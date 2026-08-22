"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  PanelsTopLeft,
  ScanLine,
  DoorClosed,
  Fence,
  Wrench,
  HouseWifi,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Home,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "بناء ملاحق ساندويتش بانل",
    shortDescription:
      "تنفيذ ملاحق عصرية وعملية بجودة عالية",
    icon: Building2,
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
    shortDescription:
      "واجهات معدنية بتصاميم ليزر مميزة",
    icon: ScanLine,
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
    shortDescription:
      "سواتر تجمع بين الخصوصية والتصميم",
    icon: PanelsTopLeft,
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
    shortDescription:
      "أبواب عصرية ومتينة للاستخدام الخارجي",
    icon: DoorClosed,
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
    shortDescription:
      "درابزين بتصاميم عصرية وأنيقة",
    icon: Fence,
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
    shortDescription:
      "صيانة وإصلاح الأعمال الحديدية",
    icon: Wrench,
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
    shortDescription:
      "حلول المنزل الذكي والتحكم عن بُعد",
    icon: HouseWifi,
    image:
      "https://images.openai.com/static-rsc-4/J2E06slwPC_9NNlKzqDbozBbkQi55xWXpdM4dxULkb5L9rIMgm36fjxui49z032EWF0M2c9CYH5x-el-a4bPkUGOgrItJdlvL0xneAsXVcCNu9ikOPxAZG93WCkKVmKEl8O5UoiXF-vIE0SiNFOJ36xIumjf6U8f8HPZOXwbG_Iux35flhOWPlDnO1fl513U?purpose=fullsize",
    description:
      "حلول ذكية تساعدك على التحكم في منزلك بسهولة وأمان، من الإضاءة والأبواب إلى أنظمة التحكم والأمان.",
    features: [
      "التحكم الذكي في الإضاءة",
      "التحكم في الأبواب",
      "أنظمة المنزل الذكي",
      "التحكم من الهاتف",
      "انظمة ذكية من CAVAN لحلول الاقفال والانتر كوم",
    ],
    smartHome: true,
  },
];

export default function QuickServices() {
  const [selectedService, setSelectedService] = useState<number | null>(
    null
  );

  const selected = services.find(
    (service) => service.id === selectedService
  );

  return (
    <section
      id="services"
      dir="rtl"
      className="relative overflow-hidden bg-[#080808] px-6 py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        <AnimatePresence mode="wait">

          {/* =============================== */}
          {/* SERVICES */}
          {/* =============================== */}

          {!selected && (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >

              {/* Header */}
              <div className="mx-auto max-w-3xl text-center">

                <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-bold text-amber-500">
                  <ShieldCheck size={16} />
                  خدماتنا
                </span>

                <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
                  حلول متكاملة
                  <span className="text-amber-500">
                    {" "}
                    لمشروعك
                  </span>
                </h2>

                <p className="mt-5 leading-8 text-gray-400">
                  اختر الخدمة لمعرفة التفاصيل والمميزات وطلب
                  الخدمة مباشرة.
                </p>

              </div>

              {/* Cards */}
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {services.map((service, index) => {
                  const Icon = service.icon;

                  const isSmartHome =
                    service.smartHome === true;

                  return (
                    <motion.button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        setSelectedService(service.id)
                      }
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
                      }}
                      transition={{
                        delay: index * 0.07,
                      }}
                      whileHover={{
                        y: -8,
                      }}
                      className={`group relative overflow-hidden rounded-3xl border p-7 text-right transition-all duration-300 ${
                        isSmartHome
                          ? "border-blue-500/20 bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.05] hover:border-blue-400/50"
                          : "border-white/10 bg-white/[0.03] hover:border-amber-500/50 hover:bg-amber-500/[0.05]"
                      }`}
                    >

                      {/* Number */}
                      <span className="absolute left-5 top-5 text-5xl font-black text-white/[0.04]">
                        0{index + 1}
                      </span>

                      {/* Icon */}
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                          isSmartHome
                            ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
                            : "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black"
                        }`}
                      >
                        <Icon size={30} />
                      </div>

                      {/* Smart Home Badge */}
                      {isSmartHome && (
                        <span className="absolute left-5 top-20 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold text-blue-400">
                          SMART HOME
                        </span>
                      )}

                      <h3 className="mt-7 text-xl font-black text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 min-h-[50px] text-sm leading-7 text-gray-400">
                        {service.shortDescription}
                      </p>

                      <div
                        className={`mt-6 flex items-center gap-2 text-sm font-bold ${
                          isSmartHome
                            ? "text-blue-400"
                            : "text-amber-500"
                        }`}
                      >
                        عرض التفاصيل

                        <ArrowLeft
                          size={17}
                          className="transition-transform group-hover:-translate-x-2"
                        />
                      </div>

                    </motion.button>
                  );
                })}

              </div>

            </motion.div>
          )}

          {/* =============================== */}
          {/* SERVICE DETAILS */}
          {/* =============================== */}

          {selected && (
            <motion.div
              key={`details-${selected.id}`}
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
                onClick={() => setSelectedService(null)}
                className="mb-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-gray-300 transition hover:border-amber-500/40 hover:text-amber-500"
              >
                <ArrowRight size={18} />
                العودة إلى الخدمات
              </button>

              {/* Details Card */}
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#101010]">

                <div className="grid lg:grid-cols-2">

                  {/* Image */}
                  <div className="relative min-h-[350px] lg:min-h-[600px]">

                    <motion.img
                      initial={{
                        scale: 1.08,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      src={selected.image}
                      alt={selected.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-7 right-7">

                      <span
                        className={`rounded-full px-5 py-2.5 text-sm font-black ${
                          selected.smartHome
                            ? "bg-blue-500 text-white"
                            : "bg-amber-500 text-black"
                        }`}
                      >
                        {selected.title}
                      </span>

                    </div>

                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                    <span
                      className={`text-sm font-bold ${
                        selected.smartHome
                          ? "text-blue-400"
                          : "text-amber-500"
                      }`}
                    >
                      تفاصيل الخدمة
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
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                              <CheckCircle2
                                size={17}
                                className="text-amber-500"
                              />
                            </div>

                            <span className="text-sm font-bold text-gray-300">
                              {feature}
                            </span>
                          </div>
                        )
                      )}

                    </div>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                      <a
                        href={`https://wa.me/966510190013?text=${encodeURIComponent(
                          `السلام عليكم، أريد الاستفسار عن خدمة ${selected.title}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-black transition ${
                          selected.smartHome
                            ? "bg-blue-500 text-white hover:bg-blue-400"
                            : "bg-amber-500 text-black hover:bg-amber-400"
                        }`}
                      >
                        <MessageCircle size={20} />

                        اطلب هذه الخدمة
                      </a>

                      <a
                        href="tel:+966510190013"
                        className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                      >
                        <Phone size={19} />

                        اتصل بنا
                      </a>

                    </div>

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