"use client";

import React from "react";
import CountUp from "react-countup";

export default function HeroStats() {
  return (
    <div className="flex font-body gap-8">
      <div>
        <p className="text-3xl font-bold font-heading text-primary">
          <CountUp start={10000} end={10215} duration={2.5} separator="," suffix="+" />
        </p>
        <p className="text-sm opacity-70  mt-1">People Reached</p>
      </div>

      <div>
        <p className="text-3xl font-bold font-heading  text-primary">
          <CountUp end={115} duration={2.5} suffix="+" />
        </p>
        <p className="text-sm opacity-70 mt-1">Events</p>
      </div>

      <div>
        <p className="text-3xl font-bold font-heading  text-primary">
          <CountUp end={12} duration={2.5} suffix="+" />
        </p>
        <p className="text-sm opacity-70 mt-1">Initiatives</p>
      </div>
    </div>
  );
}
