"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

type DonationDetail = {
  label: string;
  value: string;
};

type SupportModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const details: DonationDetail[] = [
    { label: "Account Name", value: "XYZ Foundation" },
    { label: "Account No", value: "17777" },
    { label: "IFSC Code", value: "IDF888" },
    { label: "SWIFT Code", value: "IDF888" },
    { label: "Bank Name", value: "XYZ Bank" },
    { label: "UPI ID", value: "Saaa@upi" },
  ];

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("modal-open");

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const copy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1200);
  };

  if (!isOpen) return null;

  return (
<div
  className="fixed inset-0 z-[6000] flex items-center justify-center px-4 sm:px-6 lg:px-12 py-6"
  onClick={onClose}
>

  <div className="absolute inset-0 bg-theme backdrop-blur-md" />
  <div
    onClick={(e) => e.stopPropagation()}
    className="
      relative w-full max-w-2xl
      rounded-2xl
      bg-white/20 backdrop-blur-2xl
      shadow-[0_30px_100px_rgba(0,0,0,0.25)]
      p-6 sm:p-10
      animate-[slideUp_.35s_ease-out]
      max-h-[90vh] overflow-y-auto
    "
  >
    <button
      onClick={onClose}
      className="absolute right-5 top-5 text-primary text-xl hover:scale-110 transition"
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>

<h2 className="text-xl sm:text-2xl md:text-3xl font-[var(--font-heading)] mb-3">
  Be the reason someone smiles again
</h2>

    <p className="text-sm sm:text-base opacity-70 mb-8 font-[var(--font-body)]">
      Support us via bank transfer or UPI. Your support restores dignity.
    </p>

    <div className="flex justify-center mb-10">
      <img
        src="/QR.png"
        alt="Donation QR Code"
        className="w-40 sm:w-48 md:w-56 object-contain"
      />
    </div>

<div
  className="divide-y divide-white/20 text-sm sm:text-base
             max-h-[60vh] overflow-y-auto p-1"
>
  {details.map((item) => (
    <div
      key={item.label}
      className="flex justify-between items-center py-2 gap-2"
    >
      <span className="opacity-70 w-32 sm:w-40">{item.label}</span>

      <div className="flex items-center gap-3 flex-1 justify-end">
        <span className="font-medium text-right truncate">{item.value}</span>

        <button
          onClick={() => copy(item.value, item.label)}
          className="hover:scale-110 active:scale-90 transition"
          aria-label={`Copy ${item.label}`}
        >
          <FontAwesomeIcon
            icon={copied === item.label ? faCheck : faCopy}
            className="text-primary text-lg"
          />
        </button>
      </div>
    </div>
  ))}
</div>


  </div>
</div>

  );
}
