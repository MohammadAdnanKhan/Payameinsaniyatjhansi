"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faShieldHalved,
  faFileContract,
  faRotateLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FOOTER_LINKS } from "@/config/footerconfig";

const Footer = () => {
  return (
    <footer className="bg-[var(--boldtheme)] font-heading border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 md:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div
                className="
                    relative
                    h-14 w-14
                    sm:h-16 sm:w-16
                    md:h-20 md:w-20
                    lg:h-24 lg:w-24
                    transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:rotate-3
                    active:scale-95
                    cursor-pointer
                    "
              >
                <Image
                  src="/logo.png"
                  alt="Payam-E-Insaniyat Forum Jhansi logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-heading tracking-tight leading-tight">
                  Payam-E-Insaniyat Forum Jhansi
                </h3>
                <p className="text-sm text-black/60">
                  Empowering lives sustainably
                </p>
              </div>
            </Link>

            <p className="text-sm text-black/70 leading-relaxed">
              A registered non-profit organization working at the grassroots
              level to strengthen resilient communities through essential daily
              needs, healthcare, employment generation, and environmental &
              social action.
            </p>

            <p className="text-xs text-black/50">
              Registration No:{" "}
              <span className="font-medium">NGO/IND/12A/80G</span>
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-base">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      relative inline-block
                      text-black/70
                      transition-colors
                      hover:text-primary
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-0 after:bg-primary
                      after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-base">Contact Us</h4>

            <ul className="space-y-4 text-sm text-black/70">
              <li className="flex gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 text-primary"
                />
                <span>
                  A2, Deen Dayal Nagar,
                  <br />
                  Jhansi, Uttar Pradesh – 284003
                  <br />
                  Timings: 10:00 AM - 01:00PM
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-primary" />
                +91 94525 94977
              </li>

              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                payameinsaniyatjhansi@gmail.com
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {FOOTER_LINKS.socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="
                    h-9 w-9 rounded-full
                    border border-black/10
                    flex items-center justify-center
                    text-black/70
                    transition-all duration-300
                    hover:bg-primary hover:text-white hover:-translate-y-1
                  "
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-heading text-base">Legal & Policies</h4>

            <ul className="space-y-4 text-sm text-black/70">
              {FOOTER_LINKS.policies.map((policy) => (
                <li key={policy.label} className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={
                      policy.label === "Privacy Policy"
                        ? faShieldHalved
                        : policy.label === "Terms & Conditions"
                          ? faFileContract
                          : policy.label === "FAQ"
                            ? faCircleQuestion
                            : faRotateLeft
                    }
                    className="text-primary"
                  />
                  <Link
                    href={policy.href}
                    className="hover:text-primary transition-colors"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 border-t border-black/5 pt-6 text-center text-xs text-black/60">
          <span className="font-medium">
            © {new Date().getFullYear()} Payam-E-Insaniyat Forum Jhansi
          </span>
          <span className="mx-2 text-black/40">•</span>
          <span>All rights reserved.</span>
        </div>

        <div className="mt-3 text-center text-xs font-body text-black/50">
          ❤️ Designed and developed by{" "}
          <Link
            href="https://www.linkedin.com/in/mohdadnan-khan/"
            target="_blank"
            rel="noopener noreferrer"
            className="
                italic font-medium
                text-black/60
                transition-colors
                hover:text-primary
                hover:underline
                after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                after:bg-primary hover:after:w-full after:transition-all
                "
          >
            Adnan
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
