"use client";
import React from "react";
import { Instagram, Facebook } from "lucide-react";

export default function ContactInfo({ ngoDetails }: any) {
  return (
    <div className="relative max-w-6xl mx-auto px-6 mb-10 overflow-hidden py-16 md:py-24">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24vw] sm:text-[140px] lg:text-[200px] font-heading font-black text-gray-50/80 -z-10 pointer-events-none select-none tracking-tighter whitespace-nowrap">
        JHANSI
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 relative z-10">
        
        <div className="text-center md:text-left w-full md:w-1/2">
          <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Headquarters</p>
          <h4 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">Based in Jhansi, India</h4>
          <p className="text-gray-500 text-base sm:text-lg max-w-sm mx-auto md:mx-0">
            {ngoDetails.address}
          </p>
        </div>
        <div className="text-center md:text-right w-full md:w-1/2">
          <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Our Journey</p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-900 text-white font-medium hover:bg-pink-600 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-900 text-white font-medium hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}