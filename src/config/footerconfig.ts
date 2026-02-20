import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Initiatives", href: "/initiatives" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Daily Updates", href: "/news" },
  ],

  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "FAQ", href: "/faq" },
    { label: "Refund & Cancellation", href: "/refund-policy" },
  ],

  socialLinks: [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: faFacebookF,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: faInstagram,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: faLinkedinIn,
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: faYoutube,
    },
  ],
};
