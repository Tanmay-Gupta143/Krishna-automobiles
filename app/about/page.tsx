import type { Metadata } from "next";
import { CalendarCheck, Clock, MapPin, Phone, Quote, ShieldCheck, Wrench } from "lucide-react";
import { MagneticDock } from "@/components/ui/magnetic-dock";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const phoneDisplay = "9322245569";
const phoneHref = "tel:+919322245569";
const whatsappHref = "https://wa.me/919322245569";

export const metadata: Metadata = {
  title: "About Our 17+ Year Workshop Legacy in Mira Road",
  description:
    "Learn how Shiv Kumar Gupta built Krishna Automobiles in Mira Road through honest repairs, fair pricing, and loyal service for everyday two-wheeler riders.",
};

const milestones = [
  {
    year: "2009",
    title: "A small beginning",
    text: "Shiv Kumar Gupta started Krishna Automobiles with a simple belief: every rider deserves a workshop that explains the problem honestly and fixes only what is needed.",
  },
  {
    year: "Early years",
    title: "Trust, one repair at a time",
    text: "The early days were built on persistence. Every scooter that left the bay safely, every customer who came back, and every recommendation helped the workshop find its footing in Mira Road.",
  },
  {
    year: "Today",
    title: "Still here for daily riders",
    text: "The work has grown, but the principle has not: practical repairs, fair pricing, and clear guidance for the people who depend on their two-wheelers every day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <MagneticDock />
      <main className="about-page about-history-page">
        <div className="about-grid-bg" aria-hidden="true" />

        <section className="about-hero">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <p className="about-section-label">Krishna Automobiles / Mira Road / Since 2009</p>
              <h1>
                Our 17+ Year
                <br />
                <span>Legacy</span> In
                <br />
                <b>Mira Road</b>
              </h1>
              <div className="about-hero-bottom">
                <p>
                  Started in 2009 by Shiv Kumar Gupta, Krishna Automobiles grew through the difficult early years by
                  earning a rider&apos;s trust one repair at a time.
                </p>
              </div>
              <div className="about-hero-actions">
                <a href="#our-story">
                  <Quote size={19} />
                  Read our story
                </a>
                <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
                  <Phone size={19} />
                  Talk to the workshop
                </a>
              </div>
            </div>

            <div className="about-hero-visual" aria-label="A two-wheeler mechanic working in a local workshop">
              <img
                className="about-hero-main-img about-history-hero-img"
                src="/assets/about-legacy-hero-generated.png"
                alt="Mechanic inspecting a scooter in a workshop"
              />
              <div className="about-hero-badge">
                <span>
                  <img src="/assets/logo.png" alt="" width={657} height={648} />
                </span>
                <strong>Serving Mira Road since 2009</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="about-founder" id="our-story">
          <div className="about-founder-image-wrap">
            <img
              src="/assets/about-early-days-workbench-generated.png"
              alt="Tools and a commuter motorcycle in an early workshop service bay"
              loading="lazy"
            />
            <span className="about-founder-year">2009</span>
          </div>
          <div className="about-founder-copy">
            <p className="about-section-label">The beginning</p>
            <h2>Not a shortcut.<br />A commitment.</h2>
            <p>
              In the beginning, there was no big promise—only the responsibility to do the work properly. Shiv Kumar
              Gupta built Krishna Automobiles around the everyday rider: the person who needs their scooter or bike to
              get to work, get home, and keep life moving.
            </p>
            <p>
              Those initial years asked for patience. The workshop survived by being dependable when it mattered,
              giving clear advice, and keeping repairs affordable without compromising on care.
            </p>
          </div>
        </section>

        <section className="about-timeline" aria-label="Krishna Automobiles history">
          {milestones.map((milestone) => (
            <article key={milestone.year}>
              <p>{milestone.year}</p>
              <div>
                <h3>{milestone.title}</h3>
                <span>{milestone.text}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="about-trust">
          <div className="about-trust-copy">
            <p className="about-section-label">What has stayed the same</p>
            <h2>Respect for the rider<br />comes first.</h2>
            <p>
              We do not see a vehicle as just another job card. It is someone&apos;s daily commute, family errand, or
              livelihood. That is why Krishna Automobiles continues to focus on the repair that is genuinely needed,
              a price that makes sense, and a handover a customer can feel confident about.
            </p>
            <ul>
              <li><ShieldCheck size={19} /> Honest repair guidance</li>
              <li><Wrench size={19} /> Practical, careful workmanship</li>
              <li><CalendarCheck size={19} /> Service built around daily riders</li>
            </ul>
          </div>
          <img
            src="/assets/about-trust-generated.png"
            alt="Mechanic returning scooter keys to a customer after service"
            loading="lazy"
          />
        </section>

        <section className="about-contact-cta" aria-label="Talk to Krishna Automobiles">
          <div>
            <div className="about-cta-brand">
              <span><img src="/assets/logo.png" alt="" width={657} height={648} /></span>
              <strong>Krishna Automobiles</strong>
            </div>
            <p className="about-section-label">The next chapter</p>
            <h2>Here when you need us.</h2>
            <p>For an honest conversation about your two-wheeler, call or message our Mira Road workshop.</p>
          </div>
          <div>
            <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}><Phone size={22} /> Call now</a>
            <a href={whatsappHref} rel="noopener noreferrer" target="_blank"><WhatsAppIcon size={22} /> WhatsApp</a>
          </div>
          <ul>
            <li><Clock size={17} /> 9:00 AM - 9:30 PM</li>
            <li><MapPin size={17} /> Hatkesh, Mira Road East</li>
            <li><Wrench size={17} /> Two-wheeler workshop</li>
          </ul>
        </section>
      </main>
    </>
  );
}
