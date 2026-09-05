"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  DoorClosed,
  Fence,
  HouseWifi,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  ScanLine,
  Sparkles,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "بناء ملاحق ساندويتش بانل",
    shortDescription: "تنفيذ ملاحق عصرية وعملية بجودة عالية",
    icon: Building2,
    phone: "+966539420185",
    image:
      "https://images.openai.com/static-rsc-4/4U1Cm2Sq4CE6G3uLr553rxJYXs8GsGL4y4V0Hgtl_44ttombAiG8nm6Pf-FSBl0NV2SoxbL-LiPln4fp_LPGzsvvfROVol9Vo50GD7Dt0TdOlFsVrKgY-McE7VtfPgpWgk_WzVXZRpUXJwq6iST3JHlzM3-krk4jW7R-fHJGmHuMxWB_duJOlG9gpErcte2t?purpose=fullsize",
    description:
      "تنفيذ ملاحق الساندويتش بانل للمنازل والاستراحات والمنشآت، بتصاميم عملية وعصرية تناسب احتياجاتك ومساحة المشروع.",
    features: [
      "تنفيذ ملاحق ساندويتش بانل",
      "عزل حراري مناسب",
      "تصاميم حسب المساحة",
      "تنفيذ للمنازل والاستراحات",
    ],
  },
  {
    id: 2,
    title: "ديكور واجهات ليزر",
    shortDescription: "واجهات معدنية بتصاميم ليزر مميزة",
    icon: ScanLine,
    phone: "+966539420185",
    image:
      "https://images.openai.com/static-rsc-4/HOcviV53ULYefed9W2VlwsLd_UgZpO4cZNdx19NuMgSBfNnq_Nag9gdDKr4hWgfhDR62JJveYr_D1JvuTiu-D1RF2CPX6yCbp40FBVlTH5nNQy-YgZZOi-V_eOWNd5yMDSd5P5CzvxqZTHvSb-IpvE-eALcSaGpqzZKU6-6av8opJGKd8H-4bSdEf3lJg-GV?purpose=fullsize",
    description:
      "تصميم وتنفيذ ديكورات الواجهات باستخدام قص الليزر، لإضافة لمسة عصرية ومميزة للمنازل والمحلات والمنشآت.",
    features: [
      "قص ليزر دقيق",
      "تصاميم هندسية وزخرفية",
      "تنفيذ حسب التصميم",
      "واجهات للمنازل والمحلات",
    ],
  },
  {
    id: 3,
    title: "سواتر ليزر",
    shortDescription: "سواتر تجمع بين الخصوصية والتصميم",
    icon: PanelsTopLeft,
    phone: "+966539420185",
    image:
      "https://images.openai.com/static-rsc-4/HIK5CV9fa11xsg0CStfJzOAYKWdmPXckkom5a_cAFuSuafOPv-C58DzRdfbASTShJwPP2skLeGw70bnHFhs1diwkb7sB21f8hoPQ-JZ1471jrjJMqQ-yabRKc2FcynPxzEz-VsuQKAYoOjfEdKDoCNZdCorf0KTxRhn50yaGc4R3xbjpv2dRi_wFiTTEr_j4?purpose=fullsize",
    description:
      "تصميم وتنفيذ سواتر الليزر بأشكال عصرية تمنح المكان الخصوصية والحماية مع المحافظة على الشكل الجمالي.",
    features: [
      "تصاميم ليزر متنوعة",
      "خصوصية عالية",
      "تنفيذ حسب المقاس",
      "مناسبة للمنازل والاستراحات",
    ],
  },
  {
    id: 4,
    title: "أبواب كلادنج مقاومة",
    shortDescription: "أبواب عصرية ومتينة للاستخدام الخارجي",
    icon: DoorClosed,
    phone: "+966539420185",
    image:
      "https://images.openai.com/static-rsc-4/2lHNT4L4wiuk7QKXctRlGeII8DqoeYr1LQFUtx5CZnSyju-_z-4KY2tJbN3vZt_pnVeHPZqoXj_JwMKrghte6PxnQVpCPlvdnMKvHg7HZAZhssPIJ220XySc6UxE0zS96nOsVqpm00PGT3Yr6rvuk9muhZyycclg0pYqXPsPNqvqt3pzfkI8HUlSJe_tL4j0?purpose=fullsize",
    description:
      "تنفيذ أبواب كلادنج مقاومة بتصاميم حديثة وخامات مناسبة للاستخدام الخارجي، مع الاهتمام بالتفاصيل والجودة.",
    features: [
      "أبواب كلادنج",
      "مقاومة للعوامل الخارجية",
      "تصاميم عصرية",
      "تنفيذ حسب المقاس",
    ],
  },
  {
    id: 5,
    title: "درابزين مودرن",
    shortDescription: "درابزين بتصاميم عصرية وأنيقة",
    icon: Fence,
    phone: "+966539420185",
    image:
      "https://images.openai.com/static-rsc-4/b5o2NJusTVdeMC-psDKvQcCNxTTHQqXebLJQtI1OzAelgZZKrZpXIe7kz4wRZxVlidWeZXI-x9eaPzPe6IUWd2nu0nErDW1WulSsH5k6m3X-oruKpMTJlnDNbTaM85SlxB0-DBt7UqtmReY7uMI2tYpYX6U6FNX5KevX7zIQnoeIYqufo8Z8iQxFqHwiB715?purpose=fullsize",
    description:
      "تصميم وتنفيذ درابزين مودرن للسلالم والشرفات والمداخل، مع خيارات متعددة تناسب التصميم الداخلي والخارجي.",
    features: [
      "درابزين سلالم",
      "درابزين شرفات",
      "تصاميم مودرن",
      "تنفيذ حسب المقاس",
    ],
  },
  {
    id: 6,
    title: "صيانة",
    shortDescription: "صيانة وإصلاح الأعمال الحديدية",
    icon: Wrench,
    phone: "+966539420185",
    image:
      "https://images.openai.com/static-rsc-4/zsP0Z98YoJZI7IuWIB8Eo4jJYorQpOGM-bBuf3A5YMRo6M02k73lemBEBwmR1Ar8Hf2KuhGVvcrbehKl-VpwEU2WZF5bOqdbzeu4cqFzPli_eKXxVV-1q5dxpR79DisZTs2xO4crGcuIkf8ySm_RWsU2xQl6PJpcmo5rVHgo0bV0N_ctn_HsefQeVly-yglk?purpose=fullsize",
    description:
      "خدمات صيانة وإصلاح للأبواب والبوابات والدرابزين والهياكل والأعمال الحديدية، مع إمكانية الوصول إلى موقعك.",
    features: [
      "صيانة الأبواب والبوابات",
      "إصلاح اللحام",
      "تعديل الأعمال الحديدية",
      "خدمة صيانة في الموقع",
    ],
  },
  {
    id: 7,
    title: "Smart Home",
    shortDescription: "حلول المنزل الذكي والتحكم عن بُعد",
    icon: HouseWifi,
    phone: "+966510190013",
    image:
      "https://images.openai.com/static-rsc-4/J2E06slwPC_9NNlKzqDbozBbkQi55xWXpdM4dxULkb5L9rIMgm36fjxui49z032EWF0M2c9CYH5x-el-a4bPkUGOgrItJdlvL0xneAsXVcCNu9ikOPxAZG93WCkKVmKEl8O5UoiXF-vIE0SiNFOJ36xIumjf6U8f8HPZOXwbG_Iux35flhOWPlDnO1fl513U?purpose=fullsize",
    description:
      "حلول ذكية تساعدك على التحكم في منزلك بسهولة وأمان، من الإضاءة والأبواب إلى أنظمة التحكم والأمان.",
    features: [
      "التحكم الذكي في الإضاءة",
      "التحكم في الأبواب",
      "أنظمة المنزل الذكي",
      "التحكم من الهاتف",
      "أنظمة ذكية من CAVAN لحلول الأقفال والانتر كوم",
    ],
    smartHome: true,
  },
];

const heroFeatures = [
  "تنفيذ احترافي",
  "خدمة سريعة",
  "جودة عالية",
];

export default function Hero() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        {/* IMAGE SIDE */}
        <div className="relative order-1 w-full px-4 pt-28 sm:px-6 lg:order-2 lg:w-[55%] lg:px-8 lg:pt-24">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              loop
              speed={900}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".hero-pagination",
              }}
              onSwiper={(instance) => setSwiper(instance)}
              onSlideChange={(instance) => {
                setActiveIndex(instance.realIndex);
              }}
              className="hero-swiper h-[430px] sm:h-[520px] lg:h-[610px]"
            >
              {services.map((service) => {
                const ServiceIcon = service.icon;

                return (
                  <SwiperSlide key={service.id}>
                    <div className="relative h-full w-full">
                      {/* Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      {/* Golden Glow */}
                      <div className="absolute inset-0 bg-gradient-to-l from-amber-500/10 to-transparent" />

                      {/* Service Number */}
                      <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm backdrop-blur-md">
                        <span className="text-amber-400">
                          {String(service.id).padStart(2, "0")}
                        </span>
                        <span className="mx-1 text-white/40">/</span>
                        <span className="text-white/70">07</span>
                      </div>

                      {/* Content On Image */}
                      <div className="absolute bottom-0 right-0 w-full p-6 sm:p-10">
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.6,
                          }}
                          className="max-w-xl"
                        >
                          {/* Icon */}
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-black shadow-lg shadow-amber-500/20">
                            <ServiceIcon size={28} />
                          </div>

                          {/* Title */}
                          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                            {service.title}
                          </h2>

                          {/* Description */}
                          <p className="mt-3 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                            {service.shortDescription}
                          </p>

                          {/* Features */}
                          <div className="mt-5 flex flex-wrap gap-2">
                            {service.features.slice(0, 2).map((feature) => (
                              <span
                                key={feature}
                                className="rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs text-white/85 backdrop-blur-md"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Navigation */}
            <div className="absolute bottom-5 left-5 z-20 flex gap-2">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:border-amber-400 hover:bg-amber-500 hover:text-black"
                aria-label="الخدمة السابقة"
              >
                <ChevronRight size={20} />
              </button>

              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:border-amber-400 hover:bg-amber-500 hover:text-black"
                aria-label="الخدمة التالية"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            {/* Pagination */}
            <div className="hero-pagination absolute bottom-6 right-6 z-20 flex !w-auto items-center gap-1" />
          </div>

          {/* Floating Card */}
          <motion.div
            key={activeService.id}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="absolute bottom-8 right-8 z-30 hidden w-[230px] rounded-2xl border border-white/10 bg-[#111]/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:right-2"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <ActiveIcon size={20} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-bold">
                  {activeService.title}
                </p>

                <p className="mt-1 text-xs text-white/50">
                  خدمة متاحة الآن
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONTENT SIDE */}
        <div className="order-2 flex w-full items-center px-5 pb-14 pt-10 sm:px-8 lg:order-1 lg:w-[45%] lg:px-12 lg:pb-20 lg:pt-24 xl:px-16">
          <div className="w-full max-w-xl">
            {/* Small Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <Sparkles size={20} />
              </span>

              <span className="text-sm font-medium text-amber-400">
                خدمات حداد متنقل في الرياض
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="text-5xl font-black leading-[1.1] sm:text-6xl lg:text-7xl"
            >
              نصنع الحديد
              <span className="mt-2 block text-amber-400">
                بشكل مختلف
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-7 max-w-lg text-base leading-8 text-white/60 sm:text-lg"
            >
              نقدم خدمات متكاملة تشمل ملاحق الساندويتش بانل، ديكورات
              الواجهات بالليزر، السواتر، أبواب الكلادنج، الدرابزين،
              الصيانة، وحلول المنزل الذكي.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {heroFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-amber-400"
                  />

                  <span className="text-xs text-white/70">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="https://wa.me/966539420185"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 font-bold text-black transition hover:bg-amber-400"
              >
                <MessageCircle size={20} />

                <span>تواصل عبر واتساب</span>

                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </a>

              <a
                href="tel:+966539420185"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 font-bold text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                <Phone size={20} />

                <span>اتصل الآن</span>
              </a>
            </motion.div>

            {/* Active Service */}
            <motion.div
              key={activeService.id}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mt-10 border-t border-white/10 pt-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <ActiveIcon size={23} />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    الخدمة الحالية
                  </p>

                  <h3 className="mt-1 font-bold">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {activeService.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pagination CSS */}
      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          opacity: 0.4;
          background: white;
          transition: all 0.3s ease;
        }

        .hero-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 999px;
          opacity: 1;
          background: #f59e0b;
        }
      `}</style>
    </section>
  );
}