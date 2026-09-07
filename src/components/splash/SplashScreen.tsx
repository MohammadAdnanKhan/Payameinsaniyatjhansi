"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** How long the intro plays before the curtain starts lifting. */
const HOLD_MS = 1550;
/** Length of the exit transition — must match `.splash-exit` in globals.css. */
const EXIT_MS = 700;

const SESSION_KEY = "pi_splash_seen";

/**
 * Logo intro shown on the first page load of a session.
 *
 * The markup is rendered on the server so it paints in the very first frame —
 * there is no flash of the homepage first. Everything that moves is a CSS
 * keyframe on transform/opacity, so the whole thing costs one small component
 * and no animation library. A blocking inline script in the document head adds
 * `.splash-done` to <html> when the session has already seen it, which hides
 * this overlay before the browser paints.
 */
export default function SplashScreen() {
  const [gone, setGone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Already seen this session (the head script has hidden us) — unmount now.
    if (document.documentElement.classList.contains("splash-done")) {
      setGone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    const toExit = setTimeout(() => setExiting(true), HOLD_MS);
    const toGone = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
      document.documentElement.classList.add("splash-done");
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* private mode — the splash simply plays again next load */
      }
    }, HOLD_MS + EXIT_MS);

    return () => {
      clearTimeout(toExit);
      clearTimeout(toGone);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      id="app-splash"
      aria-hidden
      className={`splash-root${exiting ? " splash-exit" : ""}`}
    >
      {/* Soft radial bloom behind the mark */}
      <div className="splash-glow" />

      <div className="splash-stage">
        {/* Concentric rings that breathe outward from the logo */}
        <span className="splash-ring splash-ring-1" />
        <span className="splash-ring splash-ring-2" />
        <span className="splash-ring splash-ring-3" />

        <div className="splash-mark">
          <Image
            src="/logo.png"
            alt=""
            width={128}
            height={128}
            priority
            className="splash-logo-img"
          />
          {/* Light sweeping across the mark */}
          <span className="splash-shine" />
        </div>
      </div>

      <p className="splash-word">
        <span>Payam</span> <span>E</span> <span>Insaniyat</span>{" "}
        <span>Forum</span>
      </p>

      <p className="splash-tag">Bringing hope, dignity &amp; opportunity</p>

      <div className="splash-bar">
        <span className="splash-bar-fill" />
      </div>
    </div>
  );
}
