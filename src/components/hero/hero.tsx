// import Image from "next/image";
// import HeroClient from "./HeroClient";
// import dynamic from "next/dynamic";

// // below-the-fold (unchanged behavior)
// const Majorprojects = dynamic(() => import("../additional/majorprojects"), {
//   loading: () => <div className="h-40" />,
// });

// const DonateTreeSection = dynamic(
//   () => import("../donategrid/DonateTreeSection")
// );

// const Donatecol = dynamic(() => import("../common/donatecolumn"));

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] bg-theme text-foreground px-10 overflow-hidden py-3">

//       <div className="relative mx-auto max-w-7xl w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

//           {/* LEFT (CLIENT - animations + text) */}
//           <HeroClient />

//           {/* RIGHT (SERVER - LCP FIX 🔥) */}
//           <div className="relative">
//             <div
//               className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[var(--theme)]
//               h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]"
//             >
//               <Image
//                 src="/hero.png"
//                 alt="Community collaboration"
//                 fill
//                 priority
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 quality={80}
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             </div>

//             <div className="absolute inset-0 border-2 border-primary/20 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10" />
//           </div>

//         </div>
//       </div>

//       {/* BELOW FOLD */}
//       <Majorprojects />
//       <DonateTreeSection />
//       <Donatecol />
//     </section>
//   );
// }

import Image from "next/image";
import HeroClient from "./HeroClient";
import HeroRightClient from "./HeroRightClient"; 
import dynamic from "next/dynamic";

const Majorprojects = dynamic(() => import("../additional/majorprojects"));
const DonateTreeSection = dynamic(
  () => import("../donategrid/DonateTreeSection")
);
const Donatecol = dynamic(() => import("../common/donatecolumn"));

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-theme text-foreground px-10 overflow-hidden py-3">

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          <HeroClient />

          <div className="relative">
            <div
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[var(--theme)]
              h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]"
            >

              <Image
                src="/hero.png"
                alt="Community collaboration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <HeroRightClient />
            </div>

            <div className="absolute inset-0 border-2 border-primary/20 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10" />
          </div>

        </div>
      </div>

      <Majorprojects />
      <DonateTreeSection />
      <Donatecol />
    </section>
  );
}