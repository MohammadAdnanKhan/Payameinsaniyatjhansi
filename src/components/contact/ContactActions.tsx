"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContactActions({ ngoDetails }: any) {
  return (
    <div className="px-4 max-w-6xl mx-auto mb-24">
      <div className="flex flex-col md:flex-row rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
        
        <div className="flex-1 bg-secondary/5 p-10 md:p-14 flex flex-col justify-between hover:bg-secondary/10 transition-colors duration-500">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-4 text-secondary">
              Want to volunteer?
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-md">
              Help us bring real change to the ground. We are always looking for passionate individuals.
            </p>
          </div>
          <a 
            href={`https://wa.me/${ngoDetails.cleanPhone}?text=${encodeURIComponent("Hi! I am interested in joining as a volunteer.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-bold text-secondary text-lg"
          >
            Apply via WhatsApp 
            <span className="p-2 rounded-full bg-secondary text-white group-hover:translate-x-2 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="w-full h-px md:w-px md:h-auto bg-gray-200"></div>

        <div className="flex-1 bg-primary/5 p-10 md:p-14 flex flex-col justify-between hover:bg-primary/10 transition-colors duration-500">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-4 text-primary">
              Need donation help?
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-md">
              Facing issues while donating or need an 80G receipt? Reach out and we’ll assist instantly.
            </p>
          </div>
          <a 
            href={`https://wa.me/${ngoDetails.cleanPhone}?text=${encodeURIComponent("Hi, I need some help regarding a donation / 80G receipt.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-bold text-primary text-lg"
          >
            Get Support 
            <span className="p-2 rounded-full bg-primary text-white group-hover:translate-x-2 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}