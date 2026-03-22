// "use client";

// import { useState, useEffect } from "react";
// import { ArrowUp } from "lucide-react";

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {

//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
    
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//       className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-3 md:p-4 rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-all duration-500 hover:bg-primary-hover hover:shadow-primary/50 group ${
//         isVisible 
//           ? "opacity-100 translate-y-0" 
//           : "opacity-0 translate-y-12 pointer-events-none"
//       }`}
//     >
//       <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
//     </button>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-3 md:p-4 rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-all duration-500 hover:bg-primary-hover hover:shadow-primary/50 group ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}