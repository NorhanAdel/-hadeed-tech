"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "محمد العتيبي",
    service: "سواتر ليزر",
    text: "شغل ممتاز جدًا والتصميم طلع أجمل مما كنت متوقع. الالتزام بالموعد والتنفيذ كان ممتاز.",
    rating: 5,
  },
  {
    name: "عبدالله القحطاني",
    service: "درابزين مودرن",
    text: "تعامل راقي وشغل نظيف جدًا. الدرابزين طلع بشكل مودرن وجميل والتشطيب ممتاز.",
    rating: 5,
  },
  {
    name: "خالد الحربي",
    service: "ملاحق ساندويتش بانل",
    text: "من المعاينة إلى التسليم كان التعامل ممتاز. التنفيذ مرتب والخامات جيدة جدًا.",
    rating: 5,
  },
  {
    name: "سعد الشهري",
    service: "أبواب كلادنج",
    text: "الأبواب طلعت ممتازة والتصميم كان بالضبط اللي طلبته. أنصح بالتعامل معهم.",
    rating: 5,
  },
  {
    name: "فهد المطيري",
    service: "ديكور واجهة ليزر",
    text: "الواجهة غيرت شكل المكان بالكامل. الدقة في قص الليزر والتركيب ممتازة.",
    rating: 5,
  },
  {
    name: "ناصر الدوسري",
    service: "Smart Home",
    text: "خدمة ممتازة وتركيب مرتب، وفكرة التحكم في البيت من الجوال وفرت علينا كثير.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      dir="rtl"
      className="relative overflow-hidden bg-[#080808] px-6 py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-1/2 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

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
            آراء العملاء
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            عملاؤنا يتحدثون
            <span className="text-amber-500">
              {" "}
              عن تجربتهم
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            رضا العميل هو أهم شيء بالنسبة لنا، وهذه بعض
            تجارب عملائنا.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-amber-500/30"
            >

              {/* Quote */}
              <div className="absolute left-6 top-6 text-amber-500/10">
                <Quote size={70} />
              </div>

              {/* Stars */}
              <div className="relative flex gap-1">
                {Array.from({
                  length: item.rating,
                }).map((_, i) => (
                  <Star
                    key={i}
                    size={17}
                    fill="currentColor"
                    className="text-amber-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="relative mt-6 min-h-[130px] leading-8 text-gray-300">
                "{item.text}"
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Customer */}
              <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-black text-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-black text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {item.service}
                  </p>
                </div>

              </div>

              {/* Bottom Hover */}
              <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />

            </motion.div>
          ))}

        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-12 flex max-w-md flex-col items-center justify-center rounded-3xl border border-amber-500/20 bg-amber-500/[0.05] p-7 text-center"
        >

          <div className="flex items-center gap-1">
            <Star
              size={24}
              fill="currentColor"
              className="text-amber-500"
            />
            <Star
              size={24}
              fill="currentColor"
              className="text-amber-500"
            />
            <Star
              size={24}
              fill="currentColor"
              className="text-amber-500"
            />
            <Star
              size={24}
              fill="currentColor"
              className="text-amber-500"
            />
            <Star
              size={24}
              fill="currentColor"
              className="text-amber-500"
            />
          </div>

          <p className="mt-3 text-2xl font-black text-white">
            5.0 / 5
          </p>

          <p className="mt-1 text-sm text-gray-500">
            تقييم عملائنا
          </p>

        </motion.div>

      </div>
    </section>
  );
}