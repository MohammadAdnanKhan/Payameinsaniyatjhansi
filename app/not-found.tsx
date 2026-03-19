import Image from "next/image";
import ElegantButton from "@/components/common/styledbutton";

export default function NotFound() {
  return (
    <main className="font-heading relative min-h-screen flex items-start justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="relative text-center max-w-xl">
        <div className="flex justify-center mb-6 animate-fadeIn">
          <Image
            src="/logo.png"
            alt="NGO Logo"
            width={80}
            height={80}
            priority
          />
        </div>

        <h1 className="text-[5rem] sm:text-[6rem] font-bold text-[var(--color-primary)] leading-none animate-slideUp">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 animate-slideUp">
          Page not found
        </h2>

        <p className="text-gray-600 mt-4 max-w-md mx-auto animate-fadeIn">
          The page you're looking for doesn't exist or may have been moved. But
          the mission continues. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
          <ElegantButton
            href="/"
            className="px-8 py-3"
            background="var(--color-primary)"
            hoverBackground="var(--color-primary-hover)"
            borderColor="gold"
            textColor="#fff"
          >
            Go Home
          </ElegantButton>

          <ElegantButton
            href="/about"
            className="px-8 py-3"
            background="var(--color-secondary)"
            borderColor="gold"
            textColor="white"
            hoverBackground="var(--color-secondary-hover)"
          >
            About Us
          </ElegantButton>
        </div>
      </div>
    </main>
  );
}
