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
  Copy,
  Check,
  Landmark,
  MessageCircle,
} from "lucide-react";
import ElegantButton from "../common/styledbutton";
import FounderNote from "./FounderNote";
import DonateFaq from "./DonateFaq";

type AmountType = 500 | 1000 | 2000 | 3000 | "custom";

interface DonationOption {
  value: AmountType;
  label: string;
}

const donationOptions: DonationOption[] = [
  { value: 500, label: "Provides fresh meals to families through Roti Bank" },
  { value: 1000, label: "Distributes clothing kits via Kapda Bank" },
  {
    value: 2000,
    label: "Supports free medical camps for underserved communities",
  },
  { value: 3000, label: "Helps a youth find employment through Rojgar Bank" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<AmountType>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");

  const [copiedField, setCopiedField] = useState<string | null>(null);

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
          <div className="flex items-center justify-center gap-2 mb-6 animate-fadeIn">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <p className="text-primary font-bold tracking-widest uppercase text-sm">
              Make a Difference Today
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">
                Your support helps provide
              </span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 -rotate-2"></span>
            </span>{" "}
            {/* <span className="text-primary">Your support helps provide</span>{" "} */}
            <span className="text-secondary">
              meals and daily necessities to those in real need.
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

            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mb-6">
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
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">What happens</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 -rotate-2"></span>
            </span>{" "}
            <span className="text-secondary">after you donate?</span>
          </h2>
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
        <FounderNote />

        <DonateFaq
          whatsappHref={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        />

        <div className="mt-24 text-center ">
          <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Ready to</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 -rotate-2"></span>
            </span>{" "}
            <span className="text-secondary">Change Lives?</span>
          </h2>
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
