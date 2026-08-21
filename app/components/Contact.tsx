"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-black px-6 py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-bold text-amber-500">
            <MapPin size={16} />

            الرياض
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            جاهز تبدأ
            <span className="text-amber-500">
              {" "}
              مشروعك؟
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            تواصل معنا الآن واحصل على استشارة حول مشروعك
            وخدماتنا المتوفرة في الرياض.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            whileHover={{
              y: -7,
            }}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition hover:border-green-500/30"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-400 transition group-hover:bg-green-500 group-hover:text-white">
              <MessageCircle size={30} />
            </div>

            <h3 className="mt-6 text-xl font-black text-white">
              واتساب
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              أرسل لنا استفسارك مباشرة عبر الواتساب
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-400">
              تواصل الآن

              <ArrowLeft
                size={17}
                className="transition-transform group-hover:-translate-x-2"
              />
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+966500000000"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
            whileHover={{
              y: -7,
            }}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition hover:border-amber-500/30"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition group-hover:bg-amber-500 group-hover:text-black">
              <Phone size={30} />
            </div>

            <h3 className="mt-6 text-xl font-black text-white">
              اتصل بنا
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              تواصل معنا مباشرة لمناقشة تفاصيل مشروعك
            </p>

            <div
              dir="ltr"
              className="mt-6 text-sm font-bold text-amber-500"
            >
              +966 50 000 0000
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            whileHover={{
              y: -7,
            }}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition hover:border-amber-500/30"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition group-hover:bg-amber-500 group-hover:text-black">
              <MapPin size={30} />
            </div>

            <h3 className="mt-6 text-xl font-black text-white">
              موقعنا
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              نقدم خدماتنا داخل مدينة الرياض
            </p>

            <div className="mt-6 text-sm font-bold text-amber-500">
              الرياض، المملكة العربية السعودية
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 rounded-3xl border border-amber-500/20 bg-gradient-to-l from-amber-500/[0.12] to-transparent p-8 text-center sm:p-10"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <CheckCircle2 size={27} />
          </div>

          <h3 className="mt-5 text-2xl font-black text-white sm:text-3xl">
            خلينا ننفذ فكرتك
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-400">
            من أعمال الحدادة والكلادنج وقص الليزر إلى الملاحق
            والسواتر والدرابزين وحلول Smart Home.
          </p>

          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-black text-black transition hover:bg-amber-400"
          >
            <MessageCircle size={20} />

            تواصل معنا الآن

            <ArrowLeft size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}