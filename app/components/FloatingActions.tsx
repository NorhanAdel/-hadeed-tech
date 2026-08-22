"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div
      dir="ltr"
      className="fixed right-5 top-1/2 z-[100] flex -translate-y-1/2 flex-col gap-3"
    >
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/966539420185"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        whileHover={{
          scale: 1.08,
          x: -5,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/20"
      >
        <MessageCircle size={25} />

        {/* Tooltip */}
        <span
          dir="rtl"
          className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs font-bold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100"
        >
          تواصل عبر واتساب
        </span>
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:+966539420185"
        aria-label="اتصل بنا"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.15,
        }}
        whileHover={{
          scale: 1.08,
          x: -5,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-black shadow-lg shadow-amber-500/20"
      >
        <Phone size={24} />

        {/* Tooltip */}
        <span
          dir="rtl"
          className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs font-bold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100"
        >
          اتصل بنا
        </span>
      </motion.a>
    </div>
  );
}