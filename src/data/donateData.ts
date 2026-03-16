export interface DonateItem {
  id: number;
  image: string;
  text: string;
}

export const donateData: DonateItem[] = [
  {
    id: 1,
    image: "/majorprojects/rotibank.webp",
    text: "Providing daily nutritious meals to the poor, homeless, and underprivileged across Jhansi.",
  },
  {
    id: 2,
    image: "/majorprojects/rozgarbank.webp",
    text: "Connecting unemployed youth with sustainable job opportunities and career support.",
  },
  {
    id: 3,
    image: "/majorprojects/medical-camps.webp",
    text: "Organizing health check-ups and voluntary blood donation drives for community care.",
  },
  {
    id: 4,
    image: "/majorprojects/kapdabank.webp",
    text: "Distributing quality clothing to underprivileged families with dignity and compassion.",
  },
  {
    id: 5,
    image: "/majorprojects/antim.webp",
    text: "Offering respectful and free funeral transportation services to families in need.",
  },
  {
    id: 6,
    image: "/majorprojects/crowdsourcing.webp",
    text: "Mobilizing community fundraising to support urgent medical and disaster relief cases.",
  },
];
