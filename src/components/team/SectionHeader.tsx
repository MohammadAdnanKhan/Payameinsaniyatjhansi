// export default function SectionHeader({
//   title,
//   subtitle,
// }: {
//   title: string;
//   subtitle?: string;
// }) {
//   return (
//     <div className="mb-10">
//       <h2 className="text-3xl font-semibold text-secondary">
//         {title}
//       </h2>
//       {subtitle && (
//         <p className="mt-2  max-w-2xl">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );
// }

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">

      <div className="w-12 h-[3px] bg-primary mb-2 rounded-full" />

      <h2 className="
        text-3xl md:text-4xl
        font-heading
        font-semibold
        text-secondary
        tracking-tight
      ">
        {title}
      </h2>

      {subtitle && (
        <p className="
          mt-4
          text-base
          font-body
          text-[var(--color-secondary)]
          opacity-90
          leading-relaxed
        ">
          {subtitle}
        </p>
      )}
    </div>
  );
}