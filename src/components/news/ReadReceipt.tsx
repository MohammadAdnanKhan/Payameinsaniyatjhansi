"use client";

import { useEffect, useState } from "react";
import { CheckCheck } from "lucide-react";
import { cn } from "@/utils/cn";

/** The WhatsApp double tick: grey on arrival, then flipping to "read" blue. */
export default function ReadReceipt() {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSeen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CheckCheck
      aria-hidden
      className={cn(
        "ml-1 h-3.5 w-3.5 transition-colors duration-500",
        seen ? "text-sky-500" : "text-slate-300",
      )}
      strokeWidth={2.6}
    />
  );
}
