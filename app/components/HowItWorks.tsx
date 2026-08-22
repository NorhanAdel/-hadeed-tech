"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  PenTool,
  Hammer,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "تواصل معنا",
    description:
      "تواصل معنا عبر الواتساب أو الهاتف واشرح لنا فكرتك واحتياجاتك.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "المعاينة",
    description:
      "نحدد موعدًا مناسبًا لمعاينة الموقع وقياس المساحات ومعرفة التفاصيل.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "التصميم وعرض السعر",
    description:
      "نقترح التصميم المناسب ونوضح الخامات والتفاصيل والتكلفة المتوقعة.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "التنفيذ",
    description:
      "يبدأ فريق العمل في تنفيذ المشروع مع الاهتمام بالجودة ودقة التفاصيل.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "التسليم",
    description:
      "بعد الانتهاء من التنفيذ والتأكد من جودة العمل يتم تسليم المشروع.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      dir="rtl"
      className="relative overflow-hidden bg-[#080808] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

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
          <span className="inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-bold text-amber-500">
            خطوات العمل
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            من الفكرة إلى
            <span className="text-amber-500">
              {" "}
              التنفيذ
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            خطوات واضحة ومنظمة لضمان تنفيذ مشروعك بالشكل
            الذي تتوقعه.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">

          {/* Connecting Line */}
          <div className="absolute right-[10%] left-[10%] top-9 hidden h-px bg-gradient-to-l from-amber-500/50 via-white/10 to-amber-500/50 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group relative text-center"
                >

                  {/* Number / Icon */}
                  <div className="relative mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full border border-amber-500/30 bg-[#080808]">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                      <Icon size={25} />
                    </div>

                    {/* Number */}
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-black">
                      {step.number}
                    </span>

                  </div>

                  <h3 className="mt-6 text-lg font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {step.description}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
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
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
        >
          <h3 className="text-2xl font-black text-white">
            جاهز تبدأ مشروعك؟
          </h3>

          <p className="mt-3 text-gray-400">
            أرسل لنا تفاصيل مشروعك وسنتواصل معك لمناقشة
            احتياجاتك.
          </p>

          <a
            href="https://wa.me/966510190013"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-amber-500 px-7 py-4 font-black text-black transition hover:bg-amber-400"
          >
            <MessageCircle size={20} />

            ابدأ الآن

            <ArrowLeft size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}