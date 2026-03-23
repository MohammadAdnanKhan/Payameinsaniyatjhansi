"use client";
import React from "react";
import { Users } from "lucide-react";
export default function TeamHero() {
  return (
    <div className="relative text-center max-w-4xl mx-auto mb-20 px-4 pt-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="flex items-center justify-center gap-2 mb-6 animate-fadeIn">
        <Users className="w-4 h-4 text-primary fill-primary" />
        <p className="text-primary font-bold tracking-widest uppercase text-sm">
          Meet our team
        </p>
      </div>

      <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 leading-[1.1] tracking-tight text-primary animate-slideUp">
        The people <br className="hidden md:block" />
        <span className="relative inline-block">
          <span className="relative z-10 text-secondary">behind every</span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/20 -z-10 -rotate-2"></span>
        </span>{" "}
        act of change.
      </h2>
    </div>
  );
}
