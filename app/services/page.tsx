import type { Metadata } from "next";
import {
  BatteryCharging,
  CircleGauge,
  Disc3,
  Droplets,
  Gauge,
  Phone,
  PlugZap,
  Settings,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { MagneticDock } from "@/components/ui/magnetic-dock";

const phoneDisplay = "9322245569";
const phoneHref = "tel:+919322245569";

export const metadata: Metadata = {
  title: "Scooter & Motorcycle Repair Services in Mira Road East",
  description:
    "Explore Krishna Automobiles services for scooter maintenance, motorcycle repair, brake work, battery diagnostics, and practical two-wheeler fault finding in Mira Road East.",
};

const highlights = ["Two-wheeler service", "EV scooter support", "Pickup & delivery", "Insurance claim help"];

const serviceGroups = [
  {
    label: "Routine Care",
    count: "04 services",
    description: "Regular maintenance that keeps daily-use scooters and bikes reliable.",
  },
  {
    label: "Repair Work",
    count: "05 services",
    description: "Fault diagnosis, engine work, brake repair, wiring, and road-safety fixes.",
  },
  {
    label: "Convenience",
    count: "03 services",
    description: "Pickup, delivery, urgent inspection, and accident/claim coordination.",
  },
];

const services = [
  {
    title: "General Service",
    category: "Routine Care",
    description: "Complete inspection, washing, lubrication, oil check, basic tuning, and road-readiness check.",
    includes: ["Oil and filter check", "Brake and cable adjustment", "Washing and inspection"],
    Icon: Settings,
  },
  {
    title: "Oil Change",
    category: "Routine Care",
    description: "Engine oil replacement with grade guidance for scooters, commuters, and motorcycles.",
    includes: ["Oil drain and refill", "Leak check", "Basic engine sound check"],
    Icon: Droplets,
  },
  {
    title: "Battery Service",
    category: "Electrical",
    description: "Battery charging, terminal cleaning, load testing, and genuine replacement support.",
    includes: ["Charging", "Voltage diagnosis", "Replacement guidance"],
    Icon: BatteryCharging,
  },
  {
    title: "Brake Repair",
    category: "Safety",
    description: "Brake pad, shoe, cable, disc, and fluid service for safer daily riding.",
    includes: ["Pad/shoe inspection", "Cable adjustment", "Road safety check"],
    Icon: Disc3,
  },
  {
    title: "Engine Repair",
    category: "Repair Work",
    description: "Compression issues, piston work, timing correction, noise diagnosis, and major engine faults.",
    includes: ["Fault diagnosis", "Compression check", "Repair estimate"],
    Icon: CircleGauge,
  },
  {
    title: "Carburetor Cleaning",
    category: "Tuning",
    description: "Cleaning and tuning for poor pickup, mileage drop, starting trouble, and rough idling.",
    includes: ["Carburetor clean", "Idle tuning", "Pickup check"],
    Icon: Gauge,
  },
  {
    title: "Electrical Repair",
    category: "Electrical",
    description: "Lights, indicators, self-start, wiring, horn, fuse, charging, and scooter electrical faults.",
    includes: ["Wiring trace", "Component testing", "Fault repair"],
    Icon: PlugZap,
  },
  {
    title: "EV Scooter Support",
    category: "EV Support",
    description: "Support for electric scooter charging issues, basic diagnostics, and repair coordination.",
    includes: ["Charging issue check", "Battery diagnosis", "Repair advice"],
    Icon: ShieldCheck,
  },
  {
    title: "Pickup & Delivery",
    category: "Convenience",
    description: "Vehicle pickup and drop support around Mira Road for service and repair jobs.",
    includes: ["Local pickup", "Delivery coordination", "Repair update call"],
    Icon: Truck,
  },
];

function ServiceTicker() {
  const items = [...highlights, ...highlights, ...highlights];

  return (
    <div className="ticker-wrapper services-catalog-ticker" aria-label="Service highlights">
      <div className="ticker-content services-catalog-ticker-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <b>/</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <MagneticDock />
      <main className="services-page">
        <div className="grid-pattern services-grid-bg" aria-hidden="true" />

        <header className="services-catalog-hero">
          <img
            className="services-catalog-hero-asset"
            src="/assets/service-hero-punch-bw.png"
            alt="Mechanic servicing a scooter inside a two-wheeler workshop"
          />
          <div className="services-catalog-hero-inner">
            <div className="services-catalog-copy">
              <p className="services-catalog-eyebrow">Services at Krishna Automobiles</p>
              <h1>
                What we <span>repair</span>
                <br />
                and <span>service.</span>
              </h1>
              <p>
                Clear list of two-wheeler services available at our workshop, from regular maintenance to engine,
                battery, brake, EV scooter, and pickup support.
              </p>
              <div className="services-catalog-actions">
                <a href={phoneHref}>
                  <Phone size={19} />
                  Call for service
                </a>
                <span>Open for scooters, motorcycles, and EV two-wheelers</span>
              </div>
            </div>

            <aside className="services-catalog-summary" aria-label="Workshop service summary">
              <div>
                <strong>09</strong>
                <span>listed services</span>
              </div>
              <div>
                <strong>2009</strong>
                <span>serving since</span>
              </div>
              <div>
                <strong>Mira Road</strong>
                <span>pickup support area</span>
              </div>
            </aside>
          </div>
        </header>

        <ServiceTicker />

        <section className="service-groups" aria-label="Service categories">
          {serviceGroups.map((group) => (
            <article key={group.label}>
              <span>{group.count}</span>
              <h2>{group.label}</h2>
              <p>{group.description}</p>
            </article>
          ))}
        </section>

        <section className="service-visual-strip" aria-label="Workshop service closeups">
          <img
            src="/assets/service-category-strip-bw.png"
            alt="Brake service, battery diagnostics, and engine tuning closeups"
            loading="lazy"
          />
        </section>

        <section className="service-catalog" aria-labelledby="service-catalog-heading">
          <div className="service-catalog-heading">
            <p className="services-catalog-eyebrow">Service menu</p>
            <h2 id="service-catalog-heading">Choose what your vehicle needs</h2>
          </div>

          <div className="service-catalog-grid">
            {services.map(({ title, category, description, includes, Icon }) => (
              <article className="service-offer-card" key={title}>
                <div className="service-offer-top">
                  <span className="service-offer-icon">
                    <Icon size={24} />
                  </span>
                  <div>
                    <span>{category}</span>
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {includes.map((item) => (
                    <li key={item}>
                      <Wrench size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="service-help-cta">
          <img
            className="service-help-cta-asset"
            src="/assets/service-cta-banner-bw.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div>
            <h2>Not sure what the problem is?</h2>
            <p>Call us, explain the symptom, and we will tell you what inspection or service to start with.</p>
          </div>
          <a href={phoneHref} aria-label={`Call ${phoneDisplay}`}>
            <Phone size={22} />
            Call now
          </a>
        </section>
      </main>
    </>
  );
}
