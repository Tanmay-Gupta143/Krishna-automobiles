import type { Metadata } from "next";
import {
  Bike,
  FileText,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";
import { MagneticDock } from "@/components/ui/magnetic-dock";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

type Testimonial = {
  author: string;
  text: string;
  accent?: string;
  className: string;
  cardClassName?: string;
  mutedStars?: boolean;
};

const phoneDisplay = "9322245569";
const phoneHref = "tel:+919322245569";
const whatsappHref = "https://wa.me/919322245569";

export const metadata: Metadata = {
  title: "Two-Wheeler Service, Repair & Diagnostics in Mira Road East",
  description:
    "Krishna Automobiles provides practical scooter and motorcycle service, fault diagnosis, genuine-grade parts, and repair guidance in Mira Road East.",
};

const brands = ["Honda", "Hero MotoCorp", "Bajaj Auto", "TVS Motor", "Yamaha", "Suzuki", "Royal Enfield"];

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

const testimonials: Testimonial[] = [
  {
    author: "Pradeep Saroj",
    text: "Had a very good experience. I visited many places but couldn't find anyone who could repair my electric scooty. Krishna Automobile fixed it perfectly. Highly recommended!",
    className: "testimonial-top-left",
    cardClassName: "accent-left strong-copy",
  },
  {
    author: "Roshan Anand",
    text: "Mechanics Shiva and Deepak are highly skilled and provide excellent service. However, I felt the spare parts were priced slightly higher than expected.",
    className: "testimonial-top-right",
    cardClassName: "subtle-left muted-copy",
    mutedStars: true,
  },
  {
    author: "Paresh Jani",
    text: "Excellent Ola repair centre. They successfully resolved my electric charging system issue.",
    accent: "Ola expert",
    className: "testimonial-mid-left",
    cardClassName: "red-shadow",
  },
  {
    author: "Mahendra Sunar",
    text: "Excellent shop for repairs and auto parts. They offer quality products, quick service, and complete customer satisfaction.",
    className: "testimonial-mid-right",
    cardClassName: "white-shadow",
  },
  {
    author: "Rajesh Kumar Gupta",
    text: "My Ola scooter was repaired perfectly. Very satisfied with the service.",
    className: "testimonial-bottom-left",
    cardClassName: "accent-left",
  },
  {
    author: "Sonu Sharma",
    text: "Excellent service. Batteries and tyres are readily available, and the repair work is outstanding.",
    className: "testimonial-bottom-right",
    cardClassName: "red-shadow",
  },
];

function HeaderDock() {
  return <MagneticDock />;
}

function Hero() {
  return (
    <section className="hero" id="home">
      <video
        aria-hidden="true"
        autoPlay
        className="hero-video"
        loop
        muted
        playsInline
        poster="https://images.pexels.com/videos/30355025/pexels-photo-30355025.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
        preload="metadata"
        src="https://videos.pexels.com/video-files/30355025/13011391_640_360_60fps.mp4"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          Krishna
          <span>Automobiles</span>
        </h1>
      </div>
    </section>
  );
}

function ActionBand() {
  return (
    <section className="action-band" aria-label="Booking actions">
      <a className="primary-action" href={phoneHref}>
        <Phone size={28} />
        Call to book
      </a>
      <a className="whatsapp-action" href={whatsappHref} rel="noopener noreferrer" target="_blank">
        <WhatsAppIcon size={30} />
        WhatsApp
      </a>
    </section>
  );
}

function BrandMarquee() {
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="brand-marquee" aria-label="Supported brands">
      <div className="brand-track">
        {marqueeItems.map((brand, index) => (
          <span key={`${brand}-${index}`}>{brand}</span>
        ))}
      </div>
    </section>
  );
}

function InsuranceLegal() {
  const marqueeItems = [...insuranceMarquee, ...insuranceMarquee, ...insuranceMarquee];

  return (
    <section className="insurance-legal" id="insurance">
      <div className="insurance-hero ka-grid-bg">
        <div className="insurance-hero-inner">
          <div className="insurance-hero-copy">
            <div className="insurance-kicker">
              <span />
              <p>Specialized Support</p>
            </div>
            <h2>
              Insurance
              <br />
              <span>&amp; Legal</span>
            </h2>
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
                <h3>
                  Insurance
                  <br />
                  Management
                </h3>
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
                  <h4>Direct Claims</h4>
                  <p>No workshop-to-agent runaround</p>
                </div>
              </article>
              <article>
                <FileText size={24} />
                <div>
                  <h4>Document Support</h4>
                  <p>Complete paper trail management</p>
                </div>
              </article>
            </div>
          </div>

          <div className="claims-hub">
            <div className="claims-hub-content">
              <span>Direct Claims Hub</span>
              <h3>
                Krishna
                <br />
                Claims
              </h3>
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
              <h3>Free Legal Advice</h3>
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
              <div>
                <Scale size={34} />
                <h3>
                  Expert RTO
                  <br />
                  Consultation
                </h3>
                <p>
                  Navigating the Motor Vehicles Act does not have to be daunting. Our experts provide clarity on your
                  rights and responsibilities on the road.
                </p>
                <a href={phoneHref}>Start Consultation</a>
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
              <b>•</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmergencyCta() {
  return (
    <section className="emergency">
      <div className="emergency-copy">
        <Bike size={48} />
        <div>
          <h2>Activa start nahi ho rahi?</h2>
          <p>Call us now. We&apos;ll pick it up.</p>
        </div>
      </div>
      <a className="cta-phone-action" href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
        <Phone size={34} />
      </a>
    </section>
  );
}

function Trust() {
  return (
    <section className="section trust" id="trust">
      <div className="trust-copy">
        <p className="eyebrow">Trust & Reliability</p>
        <h2>
          Genuine Parts.
          <br />
          Master Hands.
        </h2>
        <p>
          Since 2009, Krishna Automobiles has built trust by treating every machine with exacting workshop discipline.
        </p>
        <div className="trust-features">
          <div>
            <ShieldCheck size={34} />
            <h3>100% Genuine Spares</h3>
            <p>Exide, Mobil, Castrol, Studds, and reliable OEM-grade supply.</p>
          </div>
          <div>
            <UserCheck size={34} />
            <h3>Expert Technicians</h3>
            <p>17+ years of practical repair and performance experience.</p>
          </div>
        </div>
      </div>
      <div className="image-stack" aria-label="Workshop imagery">
        <img src="https://images.unsplash.com/photo-1661745797171-ac2861891e12?auto=format&w=600&q=80&fit=crop" alt="Motorcycle repair work" loading="lazy" />
        <img src="https://images.pexels.com/photos/5252118/pexels-photo-5252118.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Workshop tools" loading="lazy" />
        <img src="https://images.pexels.com/photos/1683406/pexels-photo-1683406.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" alt="Motorcycle wheel service" loading="lazy" />
        <img src="https://images.pexels.com/photos/17883709/pexels-photo-17883709.png?auto=compress&cs=tinysrgb&w=600&q=80" alt="Two-wheeler service detail" loading="lazy" />
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="testimonial-head">
        <h2>
          The Rider&apos;s
          <span>Word.</span>
        </h2>
        <p>Straight from the floor.</p>
      </div>
      <div className="testimonial-scatter-zone">
        <div className="rating-card">
          <span>Unstoppable Trust</span>
          <strong>4.8</strong>
          <div>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={22} fill="currentColor" />
            ))}
          </div>
          <p>Verified reviews</p>
        </div>

        {testimonials.map((testimonial) => (
          <div className={`scattered-card ${testimonial.className}`} key={testimonial.author}>
            <article className={`testimonial-card ${testimonial.cardClassName || ""}`}>
              {testimonial.accent ? <span className="testimonial-accent">{testimonial.accent}</span> : null}
              {!testimonial.accent && (
                <div className="stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      fill={testimonial.mutedStars && index === 4 ? "none" : "currentColor"}
                    />
                  ))}
                </div>
              )}
              <p className="review-text">&quot;{testimonial.text}&quot;</p>
              <strong>{testimonial.author}</strong>
            </article>
          </div>
        ))}

        <div className="extra-review">
          <article className="testimonial-card">
            <p>&quot;Very fast service with experienced mechanics.&quot;</p>
            <strong>Raju Raza</strong>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <img src="/assets/logo.png" alt="Krishna Automobiles" />
        <p>Krishna Automobiles Mira Road East. Since 2009.</p>
      </div>
      <nav aria-label="Footer contact">
        <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
          <Phone size={24} />
        </a>
        <a href={whatsappHref} rel="noopener noreferrer" target="_blank" aria-label="Open WhatsApp chat">
          <WhatsAppIcon size={26} />
        </a>
      </nav>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <HeaderDock />
      <main>
        <Hero />
        <ActionBand />
        <BrandMarquee />
        <EmergencyCta />
        <Trust />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
