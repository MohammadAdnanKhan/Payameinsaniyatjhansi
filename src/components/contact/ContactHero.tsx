"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="relative text-center max-w-4xl mx-auto mb-20 px-4 -mt-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="flex items-center justify-center gap-2 mb-6 animate-fadeIn">
        <MessageCircle className="w-4 h-4 text-primary fill-primary" />
        <p className="text-primary font-bold tracking-widest uppercase text-sm">
          Connect with Us
        </p>
      </div>

      <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 leading-[1.05] tracking-tight text-primary animate-slideUp">
        Let’s create <br className="hidden md:block" />
        <span className="relative inline-block">
          <span className="relative z-10 text-secondary">real impact</span>
          <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/20 -z-10 -rotate-2"></span>
        </span>{" "}
        together.
      </h1>

      <p
        className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto animate-slideUp"
        style={{ animationDelay: "0.1s" }}
      >
        We believe in transparency, trust, and direct action. Reach out directly
        to our team on the ground.
      </p>
    </div>
  );
}
