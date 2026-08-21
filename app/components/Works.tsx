"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  MessageCircle,
  X,
} from "lucide-react";

const works = [
  {
    id: 1,
    title: "ملحق ساندويتش بانل",
    category: "ملاحق",
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "تنفيذ ملحق ساندويتش بانل بتصميم عصري ومساحة عملية مناسبة للاستخدام السكني أو الاستراحة.",

    features: [
      "تصميم حسب المساحة",
      "عزل حراري",
      "تنفيذ احترافي",
      "تشطيب متكامل",
    ],
  },

  {
    id: 2,
    title: "واجهة ديكور ليزر",
    category: "قص ليزر",
    cover:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "تنفيذ ديكور واجهة باستخدام قص الليزر بتصميم هندسي يعطي الواجهة شكلًا عصريًا ومميزًا.",

    features: [
      "قص ليزر دقيق",
      "تصميم حسب الطلب",
      "خامات عالية الجودة",
      "تركيب احترافي",
    ],
  },

  {
    id: 3,
    title: "سواتر ليزر",
    category: "سواتر",
    cover:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "تنفيذ سواتر ليزر تجمع بين الخصوصية والتصميم الجمالي، مع إمكانية اختيار النقوش والتصميم.",

    features: [
      "خصوصية عالية",
      "تصاميم ليزر متنوعة",
      "مقاومة للعوامل الخارجية",
      "تنفيذ حسب المقاس",
    ],
  },

  {
    id: 4,
    title: "أبواب كلادنج مقاومة",
    category: "أبواب",
    cover:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1400&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "أبواب كلادنج بتصاميم عصرية ومتانة عالية، مناسبة للمداخل والمنازل والمنشآت.",

    features: [
      "تصميم مودرن",
      "خامات مقاومة",
      "تنفيذ حسب المقاس",
      "تركيب احترافي",
    ],
  },

  {
    id: 5,
    title: "درابزين مودرن",
    category: "درابزين",
    cover:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "درابزين مودرن للسلالم والشرفات بتصاميم بسيطة وأنيقة تناسب الديكورات الحديثة.",

    features: [
      "تصميم مودرن",
      "تنفيذ حسب المقاس",
      "تشطيب احترافي",
      "مناسب للداخل والخارج",
    ],
  },

  {
    id: 6,
    title: "مشروع Smart Home",
    category: "Smart Home",
    cover:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1400&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    ],

    description:
      "تنفيذ حلول منزل ذكي للتحكم في الإضاءة والأبواب وبعض أنظمة المنزل باستخدام التقنيات الذكية.",

    features: [
      "تحكم من الهاتف",
      "إضاءة ذكية",
      "تحكم في الأبواب",
      "أنظمة منزل ذكي",
    ],
  },
];

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<number | null>(
    null
  );

  const [activeImage, setActiveImage] = useState(0);

  const selected = works.find(
    (work) => work.id === selectedWork
  );

  const openWork = (id: number) => {
    setSelectedWork(id);
    setActiveImage(0);
  };

  const closeWork = () => {
    setSelectedWork(null);
    setActiveImage(0);
  };

  const nextImage = () => {
    if (!selected) return;

    setActiveImage((current) =>
      current === selected.images.length - 1
        ? 0
        : current + 1
    );
  };

  const previousImage = () => {
    if (!selected) return;

    setActiveImage((current) =>
      current === 0
        ? selected.images.length - 1
        : current - 1
    );
  };

  return (
    <section
      id="works"
      dir="rtl"
      className="relative overflow-hidden bg-black px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <AnimatePresence mode="wait">

          {/* ========================= */}
          {/* WORKS GALLERY */}
          {/* ========================= */}

          {!selected && (
            <motion.div
              key="works-gallery"
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
            >

              {/* Header */}
              <div className="mx-auto max-w-3xl text-center">

                <span className="text-sm font-bold text-amber-500">
                  أعمالنا
                </span>

                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
                  شغلنا يتكلم
                  <span className="text-amber-500">
                    {" "}
                    عننا
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  شاهد مجموعة من مشاريعنا السابقة واضغط
                  على أي مشروع لمشاهدة التفاصيل والصور.
                </p>

              </div>

              {/* Gallery */}
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {works.map((work, index) => (
                  <motion.button
                    key={work.id}
                    type="button"
                    onClick={() => openWork(work.id)}
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
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group relative h-[370px] overflow-hidden rounded-3xl border border-white/10 text-right"
                  >

                    <img
                      src={work.cover}
                      alt={work.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Category */}
                    <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      {work.category}
                    </span>

                    {/* Zoom Icon */}
                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                      <Maximize2 size={17} />
                    </div>

                    {/* Text */}
                    <div className="absolute bottom-0 right-0 left-0 p-6">

                      <h3 className="text-2xl font-black text-white">
                        {work.title}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-sm font-bold text-amber-500 opacity-0 translate-y-3 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        مشاهدة الصور
                        <ArrowLeft size={17} />
                      </div>

                    </div>

                  </motion.button>
                ))}

              </div>

            </motion.div>
          )}

          {/* ========================= */}
          {/* WORK DETAILS */}
          {/* ========================= */}

          {selected && (
            <motion.div
              key={`work-${selected.id}`}
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -60,
              }}
              transition={{
                duration: 0.45,
              }}
            >

              {/* Back */}
              <button
                type="button"
                onClick={closeWork}
                className="mb-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-amber-500/40 hover:text-amber-500"
              >
                <ArrowRight size={18} />

                العودة إلى الأعمال
              </button>

              {/* Details */}
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#101010]">

                <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

                  {/* Gallery */}
                  <div className="p-4 sm:p-6">

                    {/* Main Image */}
                    <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">

                      <AnimatePresence mode="wait">
                        <motion.img
                          key={selected.images[activeImage]}
                          src={selected.images[activeImage]}
                          alt={selected.title}
                          initial={{
                            opacity: 0,
                            scale: 1.04,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="h-full w-full object-cover"
                        />
                      </AnimatePresence>

                      {/* Arrows */}
                      {selected.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={previousImage}
                            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-amber-500 hover:text-black"
                          >
                            <ArrowRight size={20} />
                          </button>

                          <button
                            type="button"
                            onClick={nextImage}
                            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-amber-500 hover:text-black"
                          >
                            <ArrowLeft size={20} />
                          </button>
                        </>
                      )}

                      {/* Counter */}
                      <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                        {activeImage + 1} / {selected.images.length}
                      </div>

                    </div>

                    {/* Thumbnails */}
                    <div className="mt-4 grid grid-cols-4 gap-3">

                      {selected.images.map(
                        (image, index) => (
                          <button
                            key={image}
                            type="button"
                            onClick={() =>
                              setActiveImage(index)
                            }
                            className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                              activeImage === index
                                ? "border-amber-500"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${selected.title} ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </button>
                        )
                      )}

                    </div>

                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 sm:p-10">

                    <span className="text-sm font-bold text-amber-500">
                      {selected.category}
                    </span>

                    <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                      {selected.title}
                    </h2>

                    <p className="mt-6 leading-8 text-gray-400">
                      {selected.description}
                    </p>

                    {/* Features */}
                    <div className="mt-8 space-y-3">

                      {selected.features.map(
                        (feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2
                              size={19}
                              className="shrink-0 text-amber-500"
                            />

                            <span className="text-sm font-bold text-gray-300">
                              {feature}
                            </span>
                          </div>
                        )
                      )}

                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/966500000000?text=${encodeURIComponent(
                        `السلام عليكم، أعجبتني أعمالكم في "${selected.title}" وأريد تنفيذ مشروع مشابه`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-9 flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 font-black text-black transition hover:bg-amber-400"
                    >
                      <MessageCircle size={20} />

                      أريد تنفيذ مشروع مشابه
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}