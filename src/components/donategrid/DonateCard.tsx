import ElegantButton from "../common/styledbutton";

interface Props {
  image: string;
  text: string;
  reverse?: boolean;
}

export default function DonateCard({ image, text, reverse }: Props) {
  return (
    <div
      className={`
        group relative flex items-center gap-5 p-6
        bg-[var(--boldtheme)]
        shadow-lg hover:shadow-xl
        transition-all duration-300 hover:-translate-y-1
        border border-white/40
        rounded-[28px] 
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >
      <img
        src={image}
        alt="ngo"
        className="w-24 h-24 object-cover rounded-2xl shadow-md shrink-0"
      />
      <div className="space-y-3">
        <p className="text-sm md:text-base text-[var(--foreground)] font-medium leading-relaxed">
          {text}
        </p>

        <ElegantButton
          href="/donate"
          background="var(--color-primary)"
          textColor="var(--background)"
          borderColor="var(--color-accent)"
          hoverBackground="var(--color-primary-hover)"
          glowColor="var(--color-accent)"
        >
          Donate
        </ElegantButton>
      </div>
    </div>
  );
}
