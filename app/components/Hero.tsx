"use client";

import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/e4/24/a3/e424a3421811934604e39b75b8dd7548.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Right Gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-black/20" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black to-transparent" />

      {/* Orange Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32">

        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/40 px-5 py-2.5 text-sm font-bold text-amber-400 backdrop-blur-md"
          >
            <Sparkles size={16} />

            حلول معدنية وتنفيذ احترافي
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="text-4xl font-black leading-[1.2] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            نصنع الحديد

            <span className="block">
              <span className="text-amber-500">
                بشكل مختلف
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="mt-7 max-w-2xl text-base font-medium leading-8 text-gray-300 sm:text-lg"
          >
            حداد متنقل وخدمات متكاملة في صيانة وتركيب
            الأبواب، الدرابزين، مظلات السيارات، السواتر،
            قص الليزر وديكورات الكلادنج.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.75,
            }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300"
          >
            {[
              "تنفيذ احترافي",
              "خدمة سريعة",
              "جودة عالية",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={17}
                  className="text-amber-500"
                />

                {item}
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-7 py-4 font-black text-black shadow-xl shadow-amber-500/20"
            >
              <MessageCircle size={20} />

              اطلب عرض سعر

              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+966500000000"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              <Phone size={19} />

              اتصل بنا
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-xs text-gray-500">
          اكتشف خدماتنا
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-8 w-px bg-gradient-to-b from-amber-500 to-transparent"
        />
      </motion.div>

    </section>
  );
}