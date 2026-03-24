"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Support from "../support/supportbutton";

export default function LogoBar() {
  return (
    <div className="w-full bg-theme  relative z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3 lg:py-4 gap-4">
          
          <div className="flex items-center gap-4 lg:gap-6 min-w-0">
            <Link
              href="/"
              className="shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95 group"
            >
              <img
                src="/logo.png"
                alt="NGO Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center pl-4 lg:pl-5 py-1 shrink-0 relative">
            
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 rounded-full" />
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 mb-0.5">

                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase font-sans whitespace-nowrap">
                    Govt. Recognized
                  </span>
                </div>
                <span className="text-sm font-heading font-semibold text-foreground leading-none whitespace-nowrap">
                  Est. 2020 • Jhansi
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <div className="hidden xl:flex items-center gap-3">
              <div className="group flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/5 hover:bg-primary/10 rounded-full border border-primary/15 transition-colors duration-300 cursor-default">
                <ShieldCheck className="w-4 h-4 text-primary transition-transform group-hover:scale-110 duration-300" />
                <span className="text-[11px] font-bold font-sans text-primary/90 tracking-wide uppercase whitespace-nowrap">
                  Verified NGO
                </span>
              </div>

            </div>

            <div className="flex items-center justify-end shrink-0">
              <Support />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}