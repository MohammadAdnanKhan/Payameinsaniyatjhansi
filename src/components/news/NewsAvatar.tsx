import Image from "next/image";
import Link from "next/link";

/**
 * Chat avatar. Rendered only for the first bubble of a day group — later
 * bubbles get an invisible spacer so the column stays aligned.
 */
export default function NewsAvatar({ hidden = false }: { hidden?: boolean }) {
  if (hidden) {
    return <div className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" aria-hidden />;
  }

  return (
    <Link href="/" aria-label="Payam E Insaniyat Forum home">
      <div className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,0.15)] ring-1 ring-primary/20 transition-transform duration-300 hover:scale-105 sm:h-11 sm:w-11">
        <Image
          src="/logo.png"
          alt="Payame Insaaniyat Logo"
          width={40}
          height={40}
          className="object-contain p-1"
        />
      </div>
    </Link>
  );
}
