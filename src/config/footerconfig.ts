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
    { label: "Terms & Conditions", href: "/termsandconditions" },
    { label: "FAQ", href: "/donate/#faq" },
    { label: "Refund & Cancellation", href: "/donate/#refundpolicy" },
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
      label: "YouTube",
      href: "https://youtube.com",
      icon: faYoutube,
    },
  ],
};
