export interface DonateItem {
  id: number;
  title: string;
  /** The area of life this link in the chain covers. */
  sector: string;
  image: string;
  text: string;
}

export const donateData: DonateItem[] = [
  {
    id: 1,
    title: "Roti Bank",
    sector: "Hunger",
    image: "/majorprojects/rotibank.webp",
    text: "Providing daily nutritious meals to the poor, homeless, and underprivileged across Jhansi.",
  },
  {
    id: 2,
    title: "Rojgar Bank",
    sector: "Livelihood",
    image: "/majorprojects/rozgarbank.webp",
    text: "Connecting unemployed youth with sustainable job opportunities and career support.",
  },
  {
    id: 3,
    title: "Medical Camps",
    sector: "Healthcare",
    image: "/majorprojects/medical-camps.webp",
    text: "Organizing health check-ups and voluntary blood donation drives for community care.",
  },
  {
    id: 4,
    title: "Kapda Bank",
    sector: "Clothing",
    image: "/majorprojects/kapdabank.webp",
    text: "Distributing quality clothing to underprivileged families with dignity and compassion.",
  },
  {
    id: 5,
    title: "Antim Yatra Sewa",
    sector: "Dignity",
    image: "/majorprojects/antim.webp",
    text: "Offering respectful and free funeral transportation services to families in need.",
  },
  {
    id: 6,
    title: "Crowdsourcing",
    sector: "Emergency Relief",
    image: "/majorprojects/crowdsourcing.webp",
    text: "Mobilizing community fundraising to support urgent medical and disaster relief cases.",
  },
];
