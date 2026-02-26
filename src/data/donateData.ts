export interface DonateItem {
  id: number;
  image: string;
  text: string;
}

export const donateData: DonateItem[] = [
  {
    id: 1,
    image: "/majorprojects/rotibank.jpeg",
    text: "Providing daily nutritious meals to the poor, homeless, and underprivileged across Jhansi.",
  },
  {
    id: 2,
    image: "/majorprojects/rozgarbank.jpeg",
    text: "Connecting unemployed youth with sustainable job opportunities and career support.",
  },
  {
    id: 3,
    image: "/majorprojects/medical-camps.jpeg",
    text: "Organizing health check-ups and voluntary blood donation drives for community care.",
  },
  {
    id: 4,
    image: "/majorprojects/kapdabank.jpeg",
    text: "Distributing quality clothing to underprivileged families with dignity and compassion.",
  },
  {
    id: 5,
    image: "/majorprojects/antim.png",
    text: "Offering respectful and free funeral transportation services to families in need.",
  },
  {
    id: 6,
    image: "/majorprojects/crowdsourcing.jpeg",
    text: "Mobilizing community fundraising to support urgent medical and disaster relief cases.",
  },
];
