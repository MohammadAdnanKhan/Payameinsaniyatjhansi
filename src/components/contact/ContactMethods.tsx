"use client";
import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function ContactMethods({ ngoDetails }: any) {
  return (
    <div className="grid lg:grid-cols-12 gap-12 mb-24 px-4 max-w-6xl mx-auto animate-slideUp" style={{ animationDelay: "0.2s" }}>
      
      <div className="lg:col-span-7">
        <a
          href={`https://wa.me/${ngoDetails.cleanPhone}?text=${encodeURIComponent("Hi, I would like to connect with Payam E Insaniyat Forum.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full p-10 md:p-14 rounded-[3rem] bg-[#25D366] text-white relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/40 active:scale-[0.98]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <MessageCircle className="w-48 h-48 -rotate-12 translate-x-10 -translate-y-10" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">Chat with us</h3>
              <p className="text-white/90 text-lg md:text-xl max-w-sm leading-relaxed mb-12">
                Fastest response time. Connect directly with our core team.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-3 font-bold text-lg">
              Open WhatsApp 
              <span className="w-10 h-10 rounded-full bg-white text-[#25D366] flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </a>
      </div>

      <div className="lg:col-span-5 flex flex-col px-2 justify-center gap-8">
        
        <a 
          href={`tel:${ngoDetails.cleanPhone}`}
          className="group block pb-8 border-b-2 border-gray-100 transition-colors hover:border-primary"
        >
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Call Us</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
              {ngoDetails.phone}
            </h3>
            <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-gray-500 mt-2">Available during standard business hours.</p>
        </a>

        <a 
          href={`mailto:${ngoDetails.email}`}
          className="group block pb-8 border-b-2 border-gray-100 transition-colors hover:border-secondary"
        >
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Email Us</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:text-secondary transition-colors break-all">
              {ngoDetails.email}
            </h3>
            <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-secondary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>
          <p className="text-gray-500 mt-2">For partnerships and official documents.</p>
        </a>

      </div>
    </div>
  );
}