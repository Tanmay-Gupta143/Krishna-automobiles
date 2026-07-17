import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock3, MessageCircle, Phone } from "lucide-react";
import { MagneticDock } from "@/components/ui/magnetic-dock";

export const metadata: Metadata = {
  title: "Request received",
  description: "Your Krishna Automobiles service request has been received.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  { number: "01", title: "Request received", description: "Your service details have reached our workshop team." },
  { number: "02", title: "We review it", description: "We will check the vehicle and service information you shared." },
  { number: "03", title: "We get in touch", description: "Expect a call or WhatsApp message during workshop hours." },
];

export default function ContactSuccessPage() {
  return (
    <>
      <MagneticDock />
      <main className="contact-success-page">
        <section className="contact-success-shell" aria-labelledby="contact-success-title">
          <div className="contact-success-marker" aria-hidden="true">
            <Check size={36} strokeWidth={3} />
          </div>

          <p className="contact-success-eyebrow">Request confirmed · Krishna Automobiles</p>
          <h1 id="contact-success-title">
            You&apos;re
            <span>all set.</span>
          </h1>
          <p className="contact-success-lead">
            Thanks for contacting us. Your request has been sent successfully and our workshop team will respond with
            the next step.
          </p>

          <div className="contact-success-actions">
            <Link className="contact-success-primary" href="/services">
              Explore services <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a className="contact-success-secondary" href="tel:+919322245569">
              <Phone size={18} aria-hidden="true" /> Call the workshop
            </a>
          </div>
        </section>

        <section className="contact-success-next" aria-labelledby="contact-success-next-title">
          <div className="contact-success-next-heading">
            <p className="contact-success-eyebrow">What happens next</p>
            <h2 id="contact-success-next-title">A clear route from request to road.</h2>
          </div>

          <ol className="contact-success-steps">
            {nextSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="contact-success-note">
          <Clock3 size={22} aria-hidden="true" />
          <p>
            Workshop hours: <strong>9:00 AM – 9:30 PM, every day.</strong>
          </p>
          <a href="https://wa.me/919322245569" rel="noopener noreferrer" target="_blank">
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp us
          </a>
        </aside>
      </main>
    </>
  );
}
