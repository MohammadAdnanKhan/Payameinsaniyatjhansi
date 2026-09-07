"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircle, Mail } from "lucide-react";
import { cn } from "@/utils/cn";

/** Inline link style shared by every answer below. */
function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="relative inline-block px-1 italic text-primary transition-colors duration-300
        before:absolute before:inset-0 before:origin-left before:scale-x-0 before:rounded-sm
        before:bg-primary/20 before:transition-transform before:duration-300 hover:before:scale-x-100
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary
        after:transition-all after:duration-300 hover:after:w-full"
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}

const FAQS: { q: string; a: ReactNode; id?: string }[] = [
  {
    q: "Will I get a receipt for tax exemption?",
    a: (
      <>
        Yes! While our automated email system is in the works, you can easily get
        your 80G compliant receipt by sending us your payment screenshot via the
        WhatsApp button above.
      </>
    ),
  },
  {
    q: "Is my payment secure?",
    a: (
      <>
        Absolutely. Our UPI QR codes and bank details route payments securely
        through trusted apps like GPay, PhonePe, and Paytm directly to our
        official NGO account.
      </>
    ),
  },
  {
    q: "Where exactly is my money used?",
    a: (
      <>
        Your funds go directly into our daily operations. 100% goes towards
        active projects. Learn more on our <A href="/about">About page</A>
      </>
    ),
  },
  {
    // The footer's "Refund & Cancellation" link targets /donate/#refundpolicy
    id: "refundpolicy",
    q: "What is your refund policy?",
    a: (
      <>
        Donations are immediately used for meals and supplies, so they are
        non-refundable. We ensure full transparency so you can see the impact of
        your contribution on our <A href="/about">About page</A>.
      </>
    ),
  },
  {
    q: "How can I verify your NGO?",
    a: (
      <>
        We maintain complete transparency about our operations and registration
        details. You can verify everything on our <A href="/about">About page</A>{" "}
        or contact us directly for documents.
      </>
    ),
  },
  {
    q: "Can I volunteer instead of donating?",
    a: (
      <>
        Yes, absolutely! We welcome volunteers. Visit our{" "}
        <A href="/contact">Contact page</A> or reach out via WhatsApp to get
        involved.
      </>
    ),
  },
  {
    q: "Do you provide updates on how donations are used?",
    a: (
      <>
        Yes, we regularly share updates and impact stories. Follow us on our
        social media pages <A href="/donate/#footer">click</A> or check updates
        on the <A href="/news">Daily News page</A>.
      </>
    ),
  },
  {
    q: "Can I donate monthly or set up recurring donations?",
    a: (
      <>
        Currently, recurring donations are manual. You can set up auto-pay
        through your banking app or contact us via the{" "}
        <A href="/contact">Contact page</A> for assistance.
      </>
    ),
  },
  {
    q: "Is there a minimum donation amount?",
    a: (
      <>
        No, every contribution matters. Even a small amount can help provide
        meals and essential supplies to those in need.
      </>
    ),
  },
  {
    q: "How can I contact you for more questions?",
    a: (
      <>
        You can reach us anytime via our <A href="/contact">Contact page</A> or
        through the WhatsApp button above.
      </>
    ),
  },
];

interface Props {
  whatsappHref: string;
}

export default function DonateFaq({ whatsappHref }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  /**
   * Deep links such as /donate/#refundpolicy should land on the right question
   * with it already expanded, not on a wall of collapsed rows.
   */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const idx = FAQS.findIndex((f) => f.id === hash);
    if (idx === -1) return;

    setOpen(idx);
    // Let the accordion paint before scrolling to it.
    const t = setTimeout(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mx-auto mt-24 max-w-3xl" id="faq">
      {/* Heading markup unchanged */}
      <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
        <span className="relative inline-block">
          <span className="relative z-10 text-primary">Frequently Asked</span>
          <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 -rotate-2"></span>
        </span>{" "}
        <span className="text-secondary">Questions</span>
      </h2>

      <p className="mx-auto mb-10 mt-4 max-w-xl text-center text-sm text-slate-500">
        Everything donors usually ask us, answered plainly.
      </p>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = open === idx;

          return (
            <motion.div
              key={faq.q}
              id={faq.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(idx, 4) * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-white transition-all duration-400",
                isOpen
                  ? "border-primary/40 shadow-[0_18px_40px_-28px_var(--color-primary)]"
                  : "border-slate-200/80 hover:border-primary/30 hover:shadow-[0_10px_28px_-22px_rgba(15,23,42,0.5)]",
              )}
            >
              {/* Left accent bar, drawn in when open */}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-y-0 left-0 w-[3px] origin-top bg-primary transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen ? "scale-y-100" : "scale-y-0",
                )}
              />

              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 p-5 text-left outline-none sm:p-6"
              >
                <span
                  className={cn(
                    "tnum grid h-8 w-8 shrink-0 place-items-center rounded-xl text-xs font-extrabold transition-colors duration-300",
                    isOpen
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary group-hover:bg-primary/20",
                  )}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <h4
                  className={cn(
                    "flex-1 font-heading text-base font-bold leading-snug transition-colors duration-300 sm:text-lg",
                    isOpen ? "text-primary" : "text-foreground",
                  )}
                >
                  {faq.q}
                </h4>

                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen
                      ? "rotate-[135deg] text-primary"
                      : "text-slate-400 group-hover:text-primary",
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-6 pl-[4.25rem] text-[0.95rem] leading-relaxed text-slate-600 sm:px-6 sm:pl-[4.5rem]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ---- Still stuck? ---- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-col items-center gap-5 rounded-[26px] border border-primary/15 bg-[var(--theme)] px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left"
      >
        <div>
          <p className="font-heading text-base font-bold text-secondary">
            Still have a question?
          </p>
          <p className="mt-1 text-sm text-slate-600">
            We reply personally — usually within a few hours.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-green-500/40 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-secondary/25 bg-white px-5 py-3 text-sm font-bold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-white active:scale-95"
          >
            <Mail className="h-4 w-4" />
            Contact page
          </a>
        </div>
      </motion.div>
    </section>
  );
}
