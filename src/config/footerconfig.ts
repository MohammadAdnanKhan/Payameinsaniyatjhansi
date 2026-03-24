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
      href: "https://www.facebook.com/share/1BMTQM2X71/",
      icon: faFacebookF,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/payam_e_insaniyat_since2020",
      icon: faInstagram,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@payameinsaaniyatforumjhans3447",
      icon: faYoutube,
    },
  ],
};
