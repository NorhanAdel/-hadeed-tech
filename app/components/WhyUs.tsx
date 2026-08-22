"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Ruler,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "جودة واعتمادية",
    description:
      "نهتم بأدق التفاصيل ونحرص على تنفيذ كل مشروع بجودة عالية وتشطيب احترافي.",
  },
  {
    icon: Award,
    title: "خبرة في التنفيذ",
    description:
      "خبرة في أعمال الحديد والواجهات والليزر والدرابزين والملاحق والصيانة.",
  },
  {
    icon: Ruler,
    title: "تنفيذ حسب المقاس",
    description:
      "كل مشروع يتم تصميمه وتنفيذه بما يتناسب مع مساحة المكان واحتياجات العميل.",
  },
  {
    icon: Clock3,
    title: "التزام بالمواعيد",
    description:
      "نحرص على الالتزام بمواعيد المعاينة والتنفيذ والتسليم المتفق عليها.",
  },
  {
    icon: BadgeCheck,
    title: "تشطيب احترافي",
    description:
      "نهتم بالتشطيب النهائي حتى تحصل على نتيجة تجمع بين المتانة والشكل الجمالي.",
  },
  {
    icon: Headphones,
    title: "خدمة ومتابعة",
    description:
      "نظل معك من بداية الاستفسار وحتى الانتهاء من المشروع ومتابعة احتياجاتك.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      dir="rtl"
      className="relative overflow-hidden bg-[#080808] px-6 py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-amber-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-bold text-amber-500">
            لماذا نحن؟
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            شريكك في
            <span className="text-amber-500">
              {" "}
              التنفيذ المتكامل
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            نقدم حلولًا متكاملة تجمع بين الجودة، الدقة،
            التصميم العصري والالتزام في التنفيذ.
          </p>
        </motion.div>

        {/* Advantages */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/[0.04]"
              >
                {/* Number */}
                <span className="absolute left-5 top-3 text-6xl font-black text-white/[0.03]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-l from-amber-500/[0.12] to-transparent p-8 sm:p-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-right">

            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">
                عندك مشروع في بالك؟
              </h3>

              <p className="mt-2 text-gray-400">
                تواصل معنا واحصل على استشارة وتقدير مبدئي لمشروعك.
              </p>
            </div>

            <a
              href="https://wa.me/966510190013"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl bg-amber-500 px-7 py-4 font-black text-black transition hover:bg-amber-400"
            >
              تواصل معنا
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}