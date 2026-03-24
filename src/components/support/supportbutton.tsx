"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SupportModal from "./support";

export default function Support() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   const event = new CustomEvent("supportModalToggle", { detail: isOpen });
  //   window.dispatchEvent(event);
  // }, [isOpen]);
  useEffect(() => {
    const handler = (e: any) => {
      if (e.detail !== isOpen) {
        setIsOpen(e.detail);
      }
    };

    window.addEventListener("supportModalToggle", handler);
    return () => window.removeEventListener("supportModalToggle", handler);
  }, [isOpen]);

  useEffect(() => {

    window.dispatchEvent(
      new CustomEvent("supportModalToggle", { detail: isOpen }),
    );
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Support our work"
        className="
          group hidden sm:flex
          relative
          items-center justify-center
          h-9 w-9 sm:h-10 sm:w-10
          rounded-full
          bg-primary
          text-background
          transition-all duration-300
          hover:scale-110
          active:scale-90
          shadow-md
        "
      >
        <span
          className="
          absolute inset-0 rounded-full
          bg-primary opacity-0
          group-hover:opacity-20
          blur-lg transition duration-300
        "
        />

        <FontAwesomeIcon
          icon={faHeart}
          className="
            relative
            h-4 w-4 sm:h-5 sm:w-5
            transition-transform duration-300
            group-hover:scale-125
            group-hover:-rotate-6
          "
        />
      </button>

      <SupportModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
