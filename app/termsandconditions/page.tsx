"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  ChevronRight,
  Heart,
  Database,
  FileText,
  Lock,
} from "lucide-react";
import { ngoDetails, termsSections } from "@/data/legal";

const iconMap: Record<string, React.ReactNode> = {
  chevronRight: <ChevronRight className="w-6 h-6 text-secondary" />,
  heart: <Heart className="w-6 h-6 text-secondary" />,
  shield: <ShieldCheck className="w-6 h-6 text-secondary" />,
  database: <Database className="w-6 h-6 text-secondary" />,
  fileText: <FileText className="w-6 h-6 text-secondary" />,
  lock: <Lock className="w-6 h-6 text-secondary" />,
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-theme text-foreground font-sans relative overflow-hidden pt-12 pb-16">
      <div className="blob blob-green w-[400px] h-[400px] top-0 left-[-100px] opacity-20"></div>
      <div className="blob blob-blue w-[300px] h-[300px] top-[40%] right-[-50px] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 animate-slideUp">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6 border border-secondary/20">
            <Scale className="w-4 h-4" />
            Rules & Guidelines
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="text-primary">Terms and </span>{" "}
            <span className="text-secondary">Conditions</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Everything you need to know about using our platform and making
            donations.
          </p>
          <Link
            href="/privacy-policy"
            className="text-md font-medium relative italic text-primary px-1 inline-block
             transition-colors duration-300
             before:absolute before:inset-0 before:bg-primary/20
             before:scale-x-0 before:origin-left
             before:transition-transform before:duration-300 before:rounded-sm
             hover:before:scale-x-100
             after:absolute after:left-0 after:bottom-0
             after:h-[2px] after:w-0 after:bg-primary
             after:transition-all after:duration-300
             hover:after:w-full"
          >
            &larr; Read our Privacy Policy
          </Link>
        </div>

        <div className="bg-[var(--boldtheme)] rounded-[2rem] shadow-xl shadow-gray-200/50 border border-primary p-8 md:p-12">
          <p className="text-sm text-gray-400 mb-8 font-medium border-b border-gray-100 pb-4">
            Last Updated: {ngoDetails.lastUpdated}
          </p>

          <div className="space-y-10">
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                By accessing or using the services of{" "}
                <strong>{ngoDetails.name}</strong>, you agree to the following
                terms and conditions.
              </p>

              {termsSections.map((section) => (
                <div key={section.id} className="mb-8">
                  <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3 text-foreground">
                    <span className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                      {iconMap[section.iconId]}
                    </span>
                    {section.title}
                  </h2>
                  <div className="pl-2 md:pl-14">
                    {section.description && (
                      <p className="mb-4 text-gray-600">
                        {section.description}
                      </p>
                    )}

                    {section.list && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                        {section.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.subtext && (
                      <p className="text-gray-600 mb-4">{section.subtext}</p>
                    )}

                    {section.warningBox && (
                      <div className="bg-red-50 text-red-800 p-5 rounded-xl border border-red-100 mb-4">
                        <p className="font-semibold mb-2">
                          {section.warningBox.title}
                        </p>
                        <p className="text-sm">{section.warningBox.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-secondary">
                    7. Intellectual Property
                  </h3>
                  <p className="text-gray-600">
                    All content on this website (text, images, logos) is the
                    property of {ngoDetails.name} and may not be used without
                    permission.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-secondary">
                    8. Limitation of Liability
                  </h3>
                  <p className="text-gray-600">
                    We are not liable for technical issues/interruptions on the
                    website, or any indirect/consequential loss arising from the
                    use of our services.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-10">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-gray-600" /> Governing Law
                </h3>
                <p className="text-gray-600 mb-4">
                  These terms are governed by the laws of India. Any disputes
                  shall be subject to the exclusive jurisdiction of the courts
                  in <strong>Jhansi, Uttar Pradesh</strong>.
                </p>
                <div className="pt-4 border-t border-slate-200 space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> {ngoDetails.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {ngoDetails.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
