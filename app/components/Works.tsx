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
      "https://images.openai.com/static-rsc-4/4U1Cm2Sq4CE6G3uLr553rxJYXs8GsGL4y4V0Hgtl_44ttombAiG8nm6Pf-FSBl0NV2SoxbL-LiPln4fp_LPGzsvvfROVol9Vo50GD7Dt0TdOlFsVrKgY-McE7VtfPgpWgk_WzVXZRpUXJwq6iST3JHlzM3-krk4jW7R-fHJGmHuMxWB_duJOlG9gpErcte2t?purpose=fullsize",

    images: [
      "https://images.openai.com/static-rsc-4/4U1Cm2Sq4CE6G3uLr553rxJYXs8GsGL4y4V0Hgtl_44ttombAiG8nm6Pf-FSBl0NV2SoxbL-LiPln4fp_LPGzsvvfROVol9Vo50GD7Dt0TdOlFsVrKgY-McE7VtfPgpWgk_WzVXZRpUXJwq6iST3JHlzM3-krk4jW7R-fHJGmHuMxWB_duJOlG9gpErcte2t?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/gcX7tnjzjLXce3J3wTVcRr1PfSuV6gEN_byOhu2lhu29D-Xn1pJR5vjmhEQ0pxAtC_OgjUhFi7G7UXqo_DhCHE0ZRjeZYW7tgsMYtYrouxhrQFKSYfqIVnHRycxfOnYhddNqksIhPVR1WomeToM4gmv9iu6TT9OXWkFWYXjsrBbHaiGiZhMsKrKWSZhdUTrL?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/Q8_aoBwxfS3yfqHKWDzwStJ3QpMo4wADiLync0HmeUEFqPGSSq7_tXKNtN0jp7TM2t2zLkiMeTzYnZuvCybMoyTlx7jlGMbYQwDA6pifUdO_-j2oal08Z-2Yxi6rMsr7fqJFaeswPt34t9SrQSFZxqU0Not-I9aW52GZ0sX1ZHyc4Yj1LgLkuIdegQ7VAspw?purpose=fullsize",
 
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
      "https://images.openai.com/static-rsc-4/HOcviV53ULYefed9W2VlwsLd_UgZpO4cZNdx19NuMgSBfNnq_Nag9gdDKr4hWgfhDR62JJveYr_D1JvuTiu-D1RF2CPX6yCbp40FBVlTH5nNQy-YgZZOi-V_eOWNd5yMDSd5P5CzvxqZTHvSb-IpvE-eALcSaGpqzZKU6-6av8opJGKd8H-4bSdEf3lJg-GV?purpose=fullsize",

    images: [
      "https://images.openai.com/static-rsc-4/HOcviV53ULYefed9W2VlwsLd_UgZpO4cZNdx19NuMgSBfNnq_Nag9gdDKr4hWgfhDR62JJveYr_D1JvuTiu-D1RF2CPX6yCbp40FBVlTH5nNQy-YgZZOi-V_eOWNd5yMDSd5P5CzvxqZTHvSb-IpvE-eALcSaGpqzZKU6-6av8opJGKd8H-4bSdEf3lJg-GV?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/aTSAGrsaIW-Jc_n8GKCkqYkqYMTnakW_qvNKYrQfe9OFZVrHhSTXs2UtwRGzKAmSrb7yw9wXlaF_1x7gpr7O03d-gxqQZublTILE-NeEHJNRBXXE75Y3yrgMc2GcfQv_PSXUMnZNkvKAmc8P5eizEKKMuDDrvIxASs3ZxyIk4kN7TEd5-njdRm24DiREzEMM?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/MxmQr22W8bgL2i0AYoi3Q_RDC3UwZGVHuugARM2HmruOSVcF1eX3nR8_LE-yv6zff_usoPxPTJPXo1fWtcPXrYXeqznGByHO1YiIOnA4L39Iipi9BsP63MWB9E5jiiBxyezI8tOY9eEIXDCteHNeJtduKVd3Yi-6ZNJY2QVy_7WJi6V55KAUvYwU3hP9CWFv?purpose=fullsize",
   
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
      "https://images.openai.com/static-rsc-4/sokOIiD_Tn_Mvvg-sCR7kUlG7aJt0e_kCMHQXXzXjczX69En1uPckip879sbLprYmbXo5xmVRfr5jDzBmYcGXfN8NxJs5ONew7PbweSm-u6iA-gWfyZbI7DCVLEmbTOrRRmxv5IJ7x7WXamHJMANgqpvR5Q6x_pGRsjkPbicOQyuKkVPfbozirsDtFDy6qn_?purpose=fullsize",

    images: [
      "https://images.openai.com/static-rsc-4/sokOIiD_Tn_Mvvg-sCR7kUlG7aJt0e_kCMHQXXzXjczX69En1uPckip879sbLprYmbXo5xmVRfr5jDzBmYcGXfN8NxJs5ONew7PbweSm-u6iA-gWfyZbI7DCVLEmbTOrRRmxv5IJ7x7WXamHJMANgqpvR5Q6x_pGRsjkPbicOQyuKkVPfbozirsDtFDy6qn_?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/HIK5CV9fa11xsg0CStfJzOAYKWdmPXckkom5a_cAFuSuafOPv-C58DzRdfbASTShJwPP2skLeGw70bnHFhs1diwkb7sB21f8hoPQ-JZ1471jrjJMqQ-yabRKc2FcynPxzEz-VsuQKAYoOjfEdKDoCNZdCorf0KTxRhn50yaGc4R3xbjpv2dRi_wFiTTEr_j4?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/RZ07sAXS5hmzbjqYCvEDXCnzUmFK0_JfjGjyNd5pb19S7J7hL1W417eLmNWc6s_-gv4gJBJKUG9O9UpgyQLDG7r4OiiQtS5oQJQYztxOJer2YhnDO8oaG7awYur3ESPjqC3t-n75ZIJCbLejARmpq9-LY-BghVzObWuoH41j0uTP-UTPItBus-rb5scjNf_Z?purpose=fullsize",
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
      "https://images.openai.com/static-rsc-4/2lHNT4L4wiuk7QKXctRlGeII8DqoeYr1LQFUtx5CZnSyju-_z-4KY2tJbN3vZt_pnVeHPZqoXj_JwMKrghte6PxnQVpCPlvdnMKvHg7HZAZhssPIJ220XySc6UxE0zS96nOsVqpm00PGT3Yr6rvuk9muhZyycclg0pYqXPsPNqvqt3pzfkI8HUlSJe_tL4j0?purpose=fullsize",

    images: [
      "https://images.openai.com/static-rsc-4/2lHNT4L4wiuk7QKXctRlGeII8DqoeYr1LQFUtx5CZnSyju-_z-4KY2tJbN3vZt_pnVeHPZqoXj_JwMKrghte6PxnQVpCPlvdnMKvHg7HZAZhssPIJ220XySc6UxE0zS96nOsVqpm00PGT3Yr6rvuk9muhZyycclg0pYqXPsPNqvqt3pzfkI8HUlSJe_tL4j0?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/ExPwcLaikXTbANn5gd0MYn_u1rr5G7KiHmF3wT2gosR6FighFk2EazVveT6OY84n8UKr7rOO8u-Yg4X3l63xCWP6O16HbMEyPDmB6T8xDNXOiysocTODISuXAU0xcQmqb2fkPiIoQdyxd9DrWGh9d7hsi8Bwold3StHn00LnJvprW1P0UggNlJdZNUggkHEB?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/Hb19Ybl1oMLT0gd0rQJ2c-bRugJQTyoYcNIwKCalcD3-VxtVsLb94ibFtGsw04zjPT9amxkekJozAWWEFvKJAwqGfXPQynJu9cpN8KhOlhTnUlIC8EhxR_FTwE_8kjXUMihEVSR-5Ln42_7o57plbwkD5LmRJo-e8alcxi_zqmc2TzxHLqjK8P-RSo4LF9PV?purpose=fullsize",
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
      "https://images.openai.com/static-rsc-4/b5o2NJusTVdeMC-psDKvQcCNxTTHQqXebLJQtI1OzAelgZZKrZpXIe7kz4wRZxVlidWeZXI-x9eaPzPe6IUWd2nu0nErDW1WulSsH5k6m3X-oruKpMTJlnDNbTaM85SlxB0-DBt7UqtmReY7uMI2tYpYX6U6FNX5KevX7zIQnoeIYqufo8Z8iQxFqHwiB715?purpose=fullsize",

    images: [
      "https://images.openai.com/static-rsc-4/b5o2NJusTVdeMC-psDKvQcCNxTTHQqXebLJQtI1OzAelgZZKrZpXIe7kz4wRZxVlidWeZXI-x9eaPzPe6IUWd2nu0nErDW1WulSsH5k6m3X-oruKpMTJlnDNbTaM85SlxB0-DBt7UqtmReY7uMI2tYpYX6U6FNX5KevX7zIQnoeIYqufo8Z8iQxFqHwiB715?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/oGit9cQ0I-eSvlNhzPXuHcGXi3YJsh-B_O7SbCtZKOkNYE7tk1NTDq-sGhXoCu-0Df2AW4GQQ01xVSE9yGiW7V-tzc1fqnGZv-G0KvgvCA_PB-7mJpzjjbQvSCIRR4bIFIk5xeOV7biWDS56uuh_1jBtZi2mMHbL37wkJrQ8cyAsF5wP-XED7ZkE3VaSuXkw?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/OO170iq2kEX3mdZF-XoEImGiydZiZdQ_QaxfaTIlr6sQ7dLJZWlDNG1bO13J1Nbj5zU9JOojpmAyLfae_d0fgDo7eRnBS5EKSNDDYjtwwVjaH1LxPjXj9lgZN21OtyjzhfMLTQL7MCalp5PABDsWTDrw_bfDgsoVBddUq_usUMjojgFVoMK74_Sj0zR4YZcu?purpose=fullsize",
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
    title: " Smart Home automation",
    category: "Smart Home",
    cover:
      "https://images.openai.com/static-rsc-4/6cf-uDQLSXcsxaXUpe1mD11nNtPDp97sMH6jBWg9JW9kzCjxOvNHNn2s_0WZKhoonM-B_rR_A_DCEn1wd3jmTEHrrKdSLExX28A2NWeDkdYuBLmjEiqtCTn9dgx5eXRNXa4hbs6lvb1rOsNwaN5bkTYM5BvACCZOa0aCAEQvckrcfsu5qxWzkC9fJfd35O4H?purpose=fullsize",

    images: [
      "https://images.openai.com/static-rsc-4/6cf-uDQLSXcsxaXUpe1mD11nNtPDp97sMH6jBWg9JW9kzCjxOvNHNn2s_0WZKhoonM-B_rR_A_DCEn1wd3jmTEHrrKdSLExX28A2NWeDkdYuBLmjEiqtCTn9dgx5eXRNXa4hbs6lvb1rOsNwaN5bkTYM5BvACCZOa0aCAEQvckrcfsu5qxWzkC9fJfd35O4H?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/07I06klr9FBHyu61K0DqSLZzGx4ydUgelVe80_9z_NeIv3_R7zjmZoOjlROvGX4xqVuZy8CkVJHVo_CB8J0CaAagvYK12XfVuZQuqHsQyWXRadxPChvXbThlCjqCkOyL8fG7fF7mgqbo8V9xqPDk8cBID2Sywd8QX7uJQ-kXzz_DCb4Dwkrlm1MAMmUa6Yuv?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/J2E06slwPC_9NNlKzqDbozBbkQi55xWXpdM4dxULkb5L9rIMgm36fjxui49z032EWF0M2c9CYH5x-el-a4bPkUGOgrItJdlvL0xneAsXVcCNu9ikOPxAZG93WCkKVmKEl8O5UoiXF-vIE0SiNFOJ36xIumjf6U8f8HPZOXwbG_Iux35flhOWPlDnO1fl513U?purpose=fullsize",
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
                      href={`https://wa.me/966510190013=${encodeURIComponent(
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