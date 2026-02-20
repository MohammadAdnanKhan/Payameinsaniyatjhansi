"use client";

import React, { ReactNode, MouseEventHandler, CSSProperties } from "react";
import Link from "next/link";
import "./elegantbutton.css";

interface ElegantButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;

  background?: string;
  textColor?: string;
  borderColor?: string;
  hoverBackground?: string;
  glowColor?: string;
  borderWidth?: string;
}

export default function ElegantButton({
  children,
  href,
  onClick,
  className = "",
  background = "var(--color-primary)",
  textColor = "var(--foreground)",
  borderColor = "rgba(255,255,255,0.1)",
  hoverBackground = "var(--color-muted)",
  glowColor = "var(--color-accent)",
  borderWidth = "1px",
}: ElegantButtonProps) {
  const styleVars: CSSProperties = {
    "--btn-bg": background,
    "--btn-text": textColor,
    "--btn-border": borderColor,
    "--btn-hover-bg": hoverBackground,
    "--btn-glow": glowColor,
    "--btn-border-width": borderWidth,
  } as CSSProperties;

  const content = (
    <span
      style={styleVars}
      className={`modern-btn inline-flex items-center justify-center ${className}`}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={styleVars}
      className={`modern-btn ${className}`}
    >
      {children}
    </button>
  );
}
