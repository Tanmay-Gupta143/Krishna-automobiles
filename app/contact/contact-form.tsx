"use client";

import { MessageSquare, Send } from "lucide-react";
import { type FormEvent, useRef, useState } from "react";

const messageLimit = 1000;

export function ContactForm() {
  const isSubmitting = useRef(false);
  const [messageLength, setMessageLength] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting.current) {
      return;
    }

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setSubmitStatus("sending");
    isSubmitting.current = true;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms rejected the submission.");
      }

      form.reset();
      setMessageLength(0);
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      isSubmitting.current = false;
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" className="contact-botcheck" tabIndex={-1} autoComplete="off" />

      <div>
        <MessageSquare size={26} />
        <h2>Contact Form</h2>
      </div>

      <label>
        <span>Full Name</span>
        <input
          name="name"
          type="text"
          placeholder="e.g. Rahul Sharma"
          minLength={3}
          maxLength={60}
          pattern="[A-Za-z][A-Za-z .'-]{2,59}"
          title="Enter a real name using letters, spaces, dots, apostrophes, or hyphens."
          autoComplete="name"
          required
        />
      </label>

      <label>
        <span>Phone Number</span>
        <input
          name="phone"
          type="tel"
          placeholder="9322245569"
          inputMode="numeric"
          minLength={10}
          maxLength={10}
          pattern="[6-9][0-9]{9}"
          title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9."
          autoComplete="tel"
          required
        />
      </label>

      <label>
        <span>Email Address</span>
        <input
          name="email"
          type="email"
          placeholder="name@example.com"
          maxLength={80}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Enter a valid email address, for example name@example.com."
          autoComplete="email"
          required
        />
      </label>

      <label>
        <span>Vehicle Model</span>
        <input name="vehicle" type="text" placeholder="e.g. Honda Activa 6G" minLength={2} maxLength={60} required />
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Service details..."
          minLength={10}
          maxLength={messageLimit}
          onChange={(event) => setMessageLength(event.currentTarget.value.length)}
          required
        />
        <small className="contact-character-count">
          {messageLength}/{messageLimit} characters
        </small>
      </label>

      {submitStatus === "success" ? <p className="contact-form-status">Request sent. The form has been cleared.</p> : null}
      {submitStatus === "error" ? (
        <p className="contact-form-status contact-form-status-error">Could not send the request. Please try again.</p>
      ) : null}

      <button className="contact-submit" type="submit" disabled={submitStatus === "sending"}>
        <Send size={18} />
        {submitStatus === "sending" ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
