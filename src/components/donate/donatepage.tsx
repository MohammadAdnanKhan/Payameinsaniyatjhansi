"use client";
import React, { useState } from "react";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  FileText,
  QrCode,
  ArrowRight,
  IndianRupee,
  Lock,
  ChevronDown,
  Copy,
  Check,
  Landmark,
  MessageCircle,
} from "lucide-react";
import ElegantButton from "../common/styledbutton";

type AmountType = 500 | 1000 | 2000 | 3000 | "custom";

interface DonationOption {
  value: AmountType;
  label: string;
}

const donationOptions: DonationOption[] = [
  { value: 500, label: "Feeds a child for a week" },
  { value: 1000, label: "Provides school supplies" },
  { value: 2000, label: "Covers a month of meals" },
  { value: 3000, label: "Sponsors a child's term" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<AmountType>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const qrCodes: Record<string, string> = {
    "500": "/qrs/QR500.png",
    "1000": "/qrs/QR1000.png",
    "2000": "/qrs/QR2000.png",
    "3000": "/qrs/QR3000.png",
    custom: "/qrs/QR.png",
  };

  const currentQR = qrCodes[selectedAmount.toString()];
  const displayAmount =
    selectedAmount === "custom"
      ? customAmount
        ? `₹${customAmount}`
        : "Custom Amount"
      : `₹${selectedAmount}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "916306941902";
  const whatsappMessage = encodeURIComponent(
    "Hi, I just made a donation! Here is my payment screenshot for the 80G receipt.",
  );

  return (
    <div className="min-h-screen font-body bg-theme text-foreground font-sans relative overflow-hidden -mt-28">
      <div className="max-w-5xl mx-auto px-4 relative z-10 pt-16 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            <Heart className="w-4 h-4 fill-primary" />
            Make a Difference Today
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="text-primary">Your support helps provide</span>{" "}
            <span className="text-secondary">
              education and meals to children in need.
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Every rupee brings a smile. Join our mission to create a brighter
            future.
          </p>
        </div>
        <div
          className="grid lg:grid-cols-5 gap-8 bg-white rounded-3xl shadow-xl shadow-primary/5 border border-gray-100 overflow-hidden animate-slideUp"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="lg:col-span-3 p-8 md:p-10 bg-white">
            <h2 className="text-2xl font-heading font-semibold mb-6">
              Choose your impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {donationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedAmount(option.value)}
                  className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                    selectedAmount === option.value
                      ? "border-primary bg-primary/5 shadow-md shadow-primary/10 scale-[1.02]"
                      : "border-gray-100 hover:border-primary/40 hover:bg-gray-50"
                  }`}
                >
                  <div className="text-xl font-bold mb-1 flex items-center gap-1">
                    <IndianRupee className="w-5 h-5" />
                    {option.value}
                  </div>
                  <div className="text-sm text-gray-600">{option.label}</div>

                  {selectedAmount === option.value && (
                    <div className="absolute top-4 right-4 text-primary">
                      <CheckCircle2 className="w-6 h-6 fill-primary/20" />
                    </div>
                  )}
                </button>
              ))}

              <button
                onClick={() => setSelectedAmount("custom")}
                className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                  selectedAmount === "custom"
                    ? "border-primary bg-primary/5 shadow-md shadow-primary/10 scale-[1.02]"
                    : "border-gray-100 hover:border-primary/40 hover:bg-gray-50"
                }`}
              >
                <div className="text-xl font-bold mb-1">Custom</div>
                <div className="text-sm text-gray-600">
                  Choose your own amount
                </div>
              </button>
            </div>

            {selectedAmount === "custom" && (
              <div className="mb-6 animate-fadeIn">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Amount (₹)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IndianRupee className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="e.g. 1500"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-primary/30 focus:border-primary focus:ring-0 text-lg transition-colors outline-none"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-2 bg-slate-50 p-6 md:p-8 flex flex-col items-center justify-start border-l border-gray-100 relative h-full">
            <div className="text-center mb-4">
              <h3 className="text-xl font-heading font-semibold">
                Scan to Pay
              </h3>
              <p className="text-3xl font-bold text-primary mt-1">
                {displayAmount}
              </p>
            </div>
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200 mb-6 relative group">
              <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden relative">
                <img
                  src={currentQR}
                  alt={`UPI QR Code for ${displayAmount}`}
                  className="absolute inset-0 w-full h-full object-contain bg-white z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "0";
                  }}
                />
                <div className="text-center px-4 text-gray-400 z-0">
                  <QrCode className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <span className="text-xs">QR Code</span>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <Landmark className="w-4 h-4 text-gray-600" />
                <h4 className="font-semibold text-sm text-gray-800">
                  Direct Bank Transfer
                </h4>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="flex justify-between items-center group">
                  <div>
                    <p className="text-xs text-gray-500">Account Name</p>
                    <p className="font-medium text-gray-900">
                      Payam E Insaniyat Forum Jhansi
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy("Payam E Insaniyat Forum Jhansi", "name")
                    }
                    className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {copiedField === "name" ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="flex justify-between items-center group">
                  <div>
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="font-medium text-gray-900 tracking-wide">
                      04911100003020
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy("04911100003020", "acc")}
                    className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {copiedField === "acc" ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="flex justify-between items-center group">
                  <div>
                    <p className="text-xs text-gray-500">IFSC Code</p>
                    <p className="font-medium text-gray-900">PSIB0000491</p>
                  </div>
                  <button
                    onClick={() => handleCopy("PSIB0000491", "ifsc")}
                    className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {copiedField === "ifsc" ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="flex justify-between items-center group pt-2 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">UPI ID</p>
                    <p className="font-medium text-primary">
                      9140047092@psbpay
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy("9140047092@psbpay", "upi")}
                    className="p-1.5 hover:bg-gray-100 rounded-md transition-colors bg-primary/5"
                  >
                    {copiedField === "upi" ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 text-primary/70 group-hover:text-primary" />
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 leading-tight pt-1">
                  Punjab & Sind Bank, Jhokan Bagh, Jhansi
                </p>
              </div>
            </div>

            <div className="w-full text-center ">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/wa w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 active:scale-[0.98] relative overflow-hidden"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover/wa:rotate-12" />
                Get 80G Receipt via WhatsApp
              </a>

              <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
                Send us your payment screenshot to receive your{" "}
                <br className="hidden md:block" />
                <span className="font-medium text-gray-700">
                  tax exemption receipt
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <p className="text-[10px] md:text-xs font-sans text-secondary font-semibold uppercase tracking-wider">
              Upcoming: Razorpay Secure Integration
            </p>
          </div>
          <p className="text-[10px] text-gray-400 italic">
            For seamless, one-click global contributions.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12 py-6 border-b border-gray-200/60 animate-slideUp"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Govt. Reg. NGO R/JHA/07016/2025-2026</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
            <FileText className="w-5 h-5 text-primary" />
            <span>80G Tax Exemption Available</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
            <Lock className="w-5 h-5 text-primary" />
            <span>100% Secure Payments</span>
          </div>
        </div>

        <div
          className="mt-20 text-center animate-slideUp"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-2xl font-heading font-semibold mb-10">
            What happens after you donate?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--theme)] flex items-center justify-center mb-4 text-primary hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Immediate Impact</h4>
              <p className="text-gray-600 text-sm px-4">
                Because we work on the ground daily, your contribution starts
                making a difference the moment you donate.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--theme)] flex items-center justify-center mb-4 text-primary hover:scale-110 transition-transform">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">80G Tax Receipts</h4>
              <p className="text-gray-600 text-sm px-4">
                Need a receipt? Simply share your payment screenshot via our
                WhatsApp link, and we'll process your 80G receipt manually.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--theme)] flex items-center justify-center mb-4 text-primary hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Transparent Updates</h4>
              <p className="text-gray-600 text-sm px-4">
                We maintain 100% transparency. Follow our updates to see exactly
                how your funds are transforming lives every single day.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 bg-[var(--color-primary)] text-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow">
          <div className="md:w-1/3 w-48 h-48 shrink-0 rounded-full border-4 border-white/20 overflow-hidden bg-white/10">
            <img
              src="/images/team/president.png"
              alt="Mazhar Khan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left relative">
            <svg
              className="w-12 h-12 text-white/20 mb-4 mx-auto md:mx-0 absolute -top-4 -left-6 z-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 relative z-10 italic">
              "Every single rupee donated is a seed planted for a better
              tomorrow. We are on the ground every single day, ensuring your
              generosity translates directly into meals, education, and hope for
              those who need it most."
            </p>
            <div className="relative z-10">
              <p className="text-lg font-bold font-heading">
                Haji Mohd Mazhar Khan
              </p>
              <p className="text-white/80 text-sm uppercase tracking-wider mt-1">
                President & Founder
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-4">
            {[
              {
                q: "Will I get a receipt for tax exemption?",
                a: "Yes! While our automated email system is in the works, you can easily get your 80G compliant receipt by sending us your payment screenshot via the WhatsApp button above.",
              },
              {
                q: "Is my payment secure?",
                a: "Absolutely. Our current UPI QR codes and bank details route payments directly and securely through your own trusted bank apps (GPay, PhonePe, Paytm, etc) to our official NGO bank account.",
              },
              {
                q: "Where exactly is my money used?",
                a: "Your funds go directly into our daily operations. 90% goes straight toward meals and educational kits, and 10% covers the essential on-ground logistics to deliver this aid.",
              },
              {
                q: "What is your refund policy?",
                a: "Because donations are immediately deployed into our ground operations to provide meals and supplies for those in need, all contributions are strictly non-refundable. We maintain strict transparency so you can see the direct impact of your generosity.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                  openFaq === idx
                    ? "border-primary shadow-md"
                    : "border-gray-100 hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <h4
                    className={`font-bold text-lg transition-colors ${openFaq === idx ? "text-primary" : "text-foreground"}`}
                  >
                    {faq.q}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-primary" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-gray-600 border-t border-gray-50 mt-2">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center ">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to change a life?
          </h3>
          <p className="text-gray-600 mb-8">
            Every contribution counts, no matter the size.
          </p>

          <div className="flex justify-center">
            <ElegantButton
              onClick={scrollToTop}
              background="var(--color-primary)"
              textColor="var(--background)"
              borderColor="var(--color-accent)"
              hoverBackground="var(--color-primary-hover)"
              glowColor="var(--color-accent)"
            >
              Donate who deserve
            </ElegantButton>
          </div>
        </div>
      </div>
    </div>
  );
}
