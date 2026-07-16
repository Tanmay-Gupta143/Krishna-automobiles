import type { Metadata } from "next";
import { FileText, Phone, Scale, ShieldCheck } from "lucide-react";
import { MagneticDock } from "@/components/ui/magnetic-dock";

const phoneHref = "tel:+919322245569";

export const metadata: Metadata = {
  title: "Two-Wheeler Insurance Claim Guidance in Mira Road East",
  description:
    "Get practical support with two-wheeler insurance claim paperwork, damage assessment guidance, and repair coordination at Krishna Automobiles in Mira Road East.",
};

const legalConsults = [
  "Ownership Transfer",
  "RTO Rules & Regs",
  "Accident Protocol",
  "Vehicle Verification",
];

const insuranceMarquee = [
  "Insurance Claims",
  "RTO Consultation",
  "Accidental Repair",
  "Free Legal Advice",
];

function InsuranceLegalPageContent() {
  const marqueeItems = [...insuranceMarquee, ...insuranceMarquee, ...insuranceMarquee];

  return (
    <main className="insurance-page">
      <section className="insurance-legal">
        <div className="insurance-hero ka-grid-bg">
          <img
            className="insurance-hero-asset"
            src="/assets/insurance-claims-desk.png"
            alt="Insurance claim paperwork on a workshop desk with scooters in the background"
          />
          <div className="insurance-hero-inner">
            <div className="insurance-hero-copy">
              <div className="insurance-kicker">
                <span />
                <p>Specialized Support</p>
              </div>
              <h1>
                Insurance
                <br />
                <span>&amp; Legal</span>
              </h1>
            </div>
            <div className="insurance-hero-card">
              <p>
                Professional administrative solutions for accidental claims, legal documentation, and road incident guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="insurance-block ka-grid-bg">
          <div className="insurance-block-inner">
            <div>
              <div className="protocol-heading">
                <span className="protocol-watermark">01</span>
                <div>
                  <span>01</span>
                  <h2>
                    Insurance
                    <br />
                    Management
                  </h2>
                </div>
              </div>
              <p className="insurance-lead">
                We manage accidental claims and documentation directly at our workshop to keep vehicle repair stress-free.
                From surveyor coordination to final settlement, our team handles everything in-house.
              </p>
              <div className="claim-list">
                <article>
                  <ShieldCheck size={24} />
                  <div>
                    <h3>Direct Claims</h3>
                    <p>No workshop-to-agent runaround</p>
                  </div>
                </article>
                <article>
                  <FileText size={24} />
                  <div>
                    <h3>Document Support</h3>
                    <p>Complete paper trail management</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="claims-hub">
              <img
                className="claims-hub-asset"
                src="/assets/insurance-claims-desk.png"
                alt="Workshop claim documents and scooter repair bay"
                loading="lazy"
              />
              <div className="claims-hub-content">
                <span>Direct Claims Hub</span>
                <h2>
                  Krishna
                  <br />
                  Claims
                </h2>
                <p>Full Administrative Suite</p>
              </div>
            </div>
          </div>
        </div>

        <div className="legal-advice ka-grid-bg">
          <div className="legal-advice-inner">
            <div className="protocol-heading legal-heading">
              <span className="protocol-watermark">02</span>
              <div>
                <span>02</span>
                <h2>Free Legal Advice</h2>
              </div>
            </div>

            <div className="legal-grid">
              <div>
                <p className="legal-statement">
                  Complimentary legal guidance related to two-wheeler ownership, road incidents, transport rules, and
                  vehicle verification.
                </p>
                <div className="consult-grid">
                  {legalConsults.map((consult, index) => (
                    <article key={consult}>
                      <span>{`Consult 0${index + 1}`}</span>
                      <strong>{consult}</strong>
                    </article>
                  ))}
                </div>
              </div>

              <article className="rto-card">
                <img
                  className="rto-card-asset"
                  src="/assets/insurance-legal-workbench.png"
                  alt="Vehicle legal paperwork with workshop tools"
                  loading="lazy"
                />
                <div>
                  <Scale size={34} />
                  <h2>
                    Expert RTO
                    <br />
                    Consultation
                  </h2>
                  <p>
                    Navigating the Motor Vehicles Act does not have to be daunting. Our experts provide clarity on your
                    rights and responsibilities on the road.
                  </p>
                  <a href={phoneHref}>
                    <Phone size={18} />
                    Start Consultation
                  </a>
                </div>
                <span aria-hidden="true">Legal</span>
              </article>
            </div>
          </div>
        </div>

        <div className="insurance-marquee">
          <div>
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <b>*</b>
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function InsurancePage() {
  return (
    <>
      <MagneticDock />
      <InsuranceLegalPageContent />
    </>
  );
}
