import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactActions from "@/components/contact/ContactActions";
export default function ContactPage() {
  const ngoDetails = {
    phone: "+91 9452594977",
    cleanPhone: "919140047092",
    email: "peif.jhansi@gmail.com",
    address: "Jhansi, Uttar Pradesh, India",
  };

  return (
    <div className="pt-24 pb-20 bg-theme">
      <ContactHero />
      <ContactMethods ngoDetails={ngoDetails} />
      <ContactActions ngoDetails={ngoDetails} />
      <ContactInfo ngoDetails={ngoDetails} />
    </div>
  );
}