import { NextResponse } from "next/server";

const messageLimit = 1000;
const maxBodySize = 16_384;
const rateLimitWindowMs = 30 * 60 * 1000;
const maxRequestsPerWindow = 6;

type RateLimitEntry = { count: number; resetAt: number };
const rateLimitEntries = new Map<string, RateLimitEntry>();

const validators = {
  name: /^[A-Za-z][A-Za-z .'-]{2,59}$/,
  phone: /^[6-9][0-9]{9}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

function getField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function invalid(message: string, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

function getClientId(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(clientId: string) {
  const now = Date.now();
  const entry = rateLimitEntries.get(clientId);

  if (!entry || entry.resetAt <= now) {
    rateLimitEntries.set(clientId, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > maxRequestsPerWindow;
}

export async function POST(request: Request) {
  console.info("[contact] submission received");
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");

  if (origin && origin !== requestUrl.origin) {
    return invalid("Contact requests must come from this website.", 403);
  }

  if (isRateLimited(getClientId(request))) {
    return invalid("Too many requests. Please try again in a few minutes.", 429);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);

  if (contentLength > maxBodySize) {
    return invalid("Contact request is too large.", 413);
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return invalid("Submit the contact form using valid form data.");
  }

  if (getField(formData, "botcheck")) {
    return NextResponse.json({ success: true });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("[contact] WEB3FORMS_ACCESS_KEY is not configured");
    return invalid("Contact form is not configured.", 500);
  }

  const name = getField(formData, "name");
  const phone = getField(formData, "phone");
  const email = getField(formData, "email");
  const vehicle = getField(formData, "vehicle");
  const message = getField(formData, "message");

  if (!validators.name.test(name)) {
    return invalid("Enter a valid full name.");
  }

  if (!validators.phone.test(phone)) {
    return invalid("Enter a valid Indian mobile number.");
  }

  if (email.length > 80 || !validators.email.test(email)) {
    return invalid("Enter a valid email address.");
  }

  if (vehicle.length < 2 || vehicle.length > 60) {
    return invalid("Enter a valid vehicle model.");
  }

  if (message.length < 10 || message.length > messageLimit) {
    return invalid("Enter a valid message.");
  }

  const web3FormsData = {
    access_key: accessKey,
    subject: "New Krishna Automobiles contact request",
    from_name: "Krishna Automobiles Website",
    name,
    phone,
    email,
    vehicle,
    message,
  };

  let response: Response;
  let result: { success?: boolean; message?: string };

  try {
    console.info("[contact] submitting request to Web3Forms");
    response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3FormsData),
      cache: "no-store",
    });
  } catch (error) {
    console.error("[contact] Web3Forms request failed", { error: String(error) });
    return invalid("Contact submission failed.", 502);
  }

  const responseText = await response.text();

  try {
    result = JSON.parse(responseText) as { success?: boolean; message?: string };
  } catch {
    console.error("[contact] Web3Forms returned a non-JSON response", {
      status: response.status,
      contentType: response.headers.get("content-type"),
      preview: responseText.slice(0, 240).replace(/\s+/g, " "),
    });
    return invalid("Contact provider returned an unexpected response.", 502);
  }

  if (!response.ok || !result.success) {
    console.error("[contact] Web3Forms rejected the submission", {
      status: response.status,
      message: result.message || "No error message returned",
    });
    return invalid(result.message || "Contact submission failed.", 502);
  }

  console.info("[contact] Web3Forms accepted the submission");
  return NextResponse.json({ success: true });
}
