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
    { label: "Daily Updates", href: "/news" },
    { label: "Donate Us", href: "/donate" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Admin", href: "/studio" },
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
