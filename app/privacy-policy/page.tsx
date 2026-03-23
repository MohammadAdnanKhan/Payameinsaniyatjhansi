"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Mail, Database, FileText, CreditCard } from "lucide-react";
import { ngoDetails, privacySections } from "@/data/legal"; 

const iconMap: Record<string, React.ReactNode> = {
  database: <Database className="w-6 h-6 text-primary" />,
  fileText: <FileText className="w-6 h-6 text-primary" />,
  shield: <ShieldCheck className="w-6 h-6 text-primary" />,
  creditCard: <CreditCard className="w-6 h-6 text-primary" />,
  lock: <Lock className="w-6 h-6 text-primary" />,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-theme text-foreground font-sans relative overflow-hidden pt-12 pb-16">

      <div className="max-w-4xl mx-auto px-4 relative z-10 animate-slideUp">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            <Lock className="w-4 h-4" />
            Data Protection
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="text-primary">Privacy</span>{" "}
            <span className="text-secondary">
              Policy
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Clear, transparent policies on how we protect your information.
          </p>
          <Link href="/termsandconditions" className="text-md font-medium relative italic text-primary px-1 inline-block
             transition-colors duration-300
             before:absolute before:inset-0 before:bg-primary/20
             before:scale-x-0 before:origin-left
             before:transition-transform before:duration-300 before:rounded-sm
             hover:before:scale-x-100
             after:absolute after:left-0 after:bottom-0
             after:h-[2px] after:w-0 after:bg-primary
             after:transition-all after:duration-300
             hover:after:w-full">
            Looking for our Terms & Conditions? &rarr;
          </Link>
        </div>

        <div className="bg-[var(--boldtheme)] rounded-[2rem] shadow-xl shadow-gray-200/50 border border-primary p-8 md:p-12">
          <p className="text-sm text-gray-400 mb-8 font-medium border-b border-gray-100 pb-4">
            Last Updated: {ngoDetails.lastUpdated}
          </p>

          <div className="space-y-10">
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At <strong>{ngoDetails.name}</strong>, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with us.
              </p>

              {privacySections.map((section) => (
                <div key={section.id} className="mb-8">
                  <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3 text-foreground">
                    <span className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                      {iconMap[section.iconId]}
                    </span>
                    {section.title}
                  </h2>
                  <div className="pl-2 md:pl-14">
                    {section.description && <p className="mb-4 text-gray-600">{section.description}</p>}
                    
                    {section.list && (
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                        {section.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.subtext && <p className="text-gray-600 font-medium">{section.subtext}</p>}
                    
                    {section.highlightBox && (
                      <p className="mt-4 font-medium text-gray-800 bg-primary/5 p-4 rounded-xl border border-primary/10">
                        {section.highlightBox}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3">6. Cookies & Website Usage</h3>
                  <p className="text-gray-600">Our website may use basic cookies to improve user experience and analyze website traffic. You can disable cookies through your browser settings.</p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-3">7. Your Rights</h3>
                  <p className="text-gray-600">You have the right to request access to your personal data, correct/update your information, or request deletion of your data.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-10">
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-600" /> Contact Us
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> {ngoDetails.email}</p>
                  <p><strong>Phone:</strong> {ngoDetails.phone}</p>
                  <p><strong>Address:</strong> {ngoDetails.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}