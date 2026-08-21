"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "الرئيسية", href: "#" },
  { name: "خدماتنا", href: "#services" },
  { name: "أعمالنا", href: "#works" },
  { name: "من نحن", href: "#about" },
  { name: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6">

          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 font-black text-xl text-black shadow-lg shadow-amber-500/20 transition group-hover:rotate-6">
              ح
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-black leading-none text-white">
                للحداده <span className="text-amber-500">الرياض</span>
              </h1>

              <span className="text-[10px] text-gray-500">
                حلول معدنية باحترافية
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  index === 0
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}

                {index === 0 && (
                  <span className="absolute bottom-1 right-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-500" />
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="tel:+966500000000"
              className="flex items-center gap-2 text-sm font-bold text-gray-300 transition hover:text-white"
            >
              <Phone
                size={17}
                className="text-amber-500"
              />
              اتصل بنا
            </a>

            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-amber-400"
            >
              اطلب عرض سعر
            </a>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed left-4 right-4 top-[96px] z-40 rounded-2xl border border-white/10 bg-[#0b0b0b]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-right font-bold text-gray-300 transition hover:bg-white/5 hover:text-amber-500"
                >
                  {link.name}
                </a>
              ))}

              <div className="my-2 h-px bg-white/10" />

              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-amber-500 py-3.5 text-center font-black text-black"
              >
                اطلب عرض سعر
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}