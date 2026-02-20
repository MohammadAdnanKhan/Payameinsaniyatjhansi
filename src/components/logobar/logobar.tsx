import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Support from "../support/supportbutton";
export default function LogoBar() {
  return (
    <div className="w-full bg-theme text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/logo.png"
              alt="NGO Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
            />

            <div className="hidden sm:flex items-center gap-2 text-sm font-body opacity-80">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Recognized
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden lg:inline-flex items-center gap-2 text-sm font-body opacity-80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Verified NGO • Est. 2020
            </span>

            <div className="flex items-center justify-end gap-4">
              <Support />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
