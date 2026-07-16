"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { type MouseEvent, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Insurance", href: "/insurance" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MagneticDock() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateWithCurtain = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);
    window.dispatchEvent(new Event("ka:start-page-transition"));

    window.setTimeout(() => {
      router.push(href);
    }, 430);
  };

  return (
    <>
      <header className={`brand-nav${isMenuOpen ? " is-menu-open" : ""}`} aria-label="Primary navigation">
      <Link className="brand-nav-mark" href="/" aria-label="Krishna Automobiles home" onClick={(event) => navigateWithCurtain(event, "/")}>
        <span>
          <img src="/assets/logo.png" alt="" width={657} height={648} />
        </span>
        <strong>Krishna Automobiles</strong>
      </Link>

      <button
        className="brand-nav-menu-toggle"
        type="button"
        aria-controls="mobile-site-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        <span>{isMenuOpen ? "Close" : "Menu"}</span>
      </button>

      <nav className="brand-nav-links" id="mobile-site-navigation" aria-label="Site sections">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.label} onClick={(event) => navigateWithCurtain(event, link.href)}>
            {link.label}
          </Link>
        ))}
      </nav>

      <a className="brand-nav-book" href="tel:+919322245569">
        Book Now
      </a>

      </header>

      <div className="mobile-quick-actions" aria-label="Quick contact actions">
        <a href="tel:+919322245569" aria-label="Call Krishna Automobiles">
          <Phone size={19} aria-hidden="true" />
          Call
        </a>
        <a href="https://wa.me/919322245569" rel="noopener noreferrer" target="_blank" aria-label="WhatsApp Krishna Automobiles">
          <WhatsAppIcon size={20} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
