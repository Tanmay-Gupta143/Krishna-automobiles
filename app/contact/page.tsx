import type { Metadata } from "next";
import { Clock, MapPin, Phone, WalletCards } from "lucide-react";
import { MagneticDock } from "@/components/ui/magnetic-dock";
import { ContactForm } from "./contact-form";

const phoneDisplay = "9322245569";
const secondaryPhoneDisplay = "2231570579";
const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=Krishna+Automobiles%2C+Shop+No.11%2C+Chintan+11%2C+Hatkesh+Road%2C+Phase+4%2C+Gaurav+Sankalp%2C+Mira+Road+East%2C+Thane%2C+Maharashtra+401107";
const mapEmbedHref =
  "https://www.google.com/maps?q=Krishna+Automobiles%2C+Shop+No.11%2C+Chintan+11%2C+Hatkesh+Road%2C+Phase+4%2C+Gaurav+Sankalp%2C+Mira+Road+East%2C+Thane%2C+Maharashtra+401107&z=18&output=embed";

export const metadata: Metadata = {
  title: "Contact Krishna Automobiles in Mira Road East",
  description:
    "Call, WhatsApp, or visit Krishna Automobiles at Chintan 11, Hatkesh Road, Mira Road East for two-wheeler repair, service, and insurance guidance.",
};

const contactDetails = [
  {
    label: "Location",
    value:
      "Shop No. 11, Chintan 11, Hatkesh Road, Phase 4, Gaurav Sankalp, Mira Road (E), Thane, Maharashtra 401107.",
    Icon: MapPin,
  },
  {
    label: "Phone Numbers",
    value: `${phoneDisplay} / ${secondaryPhoneDisplay}`,
    Icon: Phone,
  },
  {
    label: "Workshop Hours",
    value: "Mon - Sun, 9:00 AM - 9:30 PM",
    Icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <>
      <MagneticDock />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-grid">
            <div>
              <p className="contact-label">Mira Road East Workshop</p>
              <h1>
                Reach
                <span>Out.</span>
              </h1>
              <p className="contact-intro">
                We operate an inclusive, professional two-wheeler workshop in Mira Road East. Call, message, or submit
                your service details and we will respond with the next step.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-layout" aria-label="Contact information and request form">
          <div className="contact-info-stack">
            {contactDetails.map(({ label, value, Icon }) => (
              <article className="contact-info-card" key={label}>
                <Icon size={22} />
                <div>
                  <p className="contact-label">{label}</p>
                  <h2>{value}</h2>
                </div>
              </article>
            ))}

            <article className="contact-payment-card">
              <div>
                <WalletCards size={24} />
                <p className="contact-label">Payment Methods</p>
              </div>
              <h2>UPI and cash accepted only.</h2>
              <p>Payments can be made by UPI or cash at the workshop.</p>
              <span>No card payments</span>
            </article>
          </div>

          <ContactForm />
        </section>

        <section className="contact-map" aria-labelledby="contact-map-title">
          <div className="contact-map-copy">
            <p className="contact-label">Workshop location</p>
            <h2 id="contact-map-title">Find us in Mira Road East.</h2>
            <p>Open the map for the easiest route to the Krishna Automobiles workshop.</p>
            <a href={directionsHref} rel="noopener noreferrer" target="_blank">
              <MapPin size={18} />
              Get directions
            </a>
          </div>
          <div className="contact-map-frame">
            <iframe
              src={mapEmbedHref}
              title="Krishna Automobiles location in Mira Road East"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </>
  );
}
