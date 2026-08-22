"use client";

import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
  Mail,
} from "lucide-react";

const services = [
  "ملاحق ساندويتش بانل",
  "ديكور واجهات ليزر",
  "سواتر ليزر",
  "أبواب كلادنج",
  "درابزين مودرن",
  "صيانة",
  "Smart Home",
];

const links = [
  {
    title: "الرئيسية",
    href: "#home",
  },
  {
    title: "خدماتنا",
    href: "#services",
  },
  {
    title: "أعمالنا",
    href: "#works",
  },
  {
    title: "لماذا نحن؟",
    href: "#why-us",
  },
  {
    title: "خطوات العمل",
    href: "#how-it-works",
  },
  {
    title: "آراء العملاء",
    href: "#testimonials",
  },
  {
    title: "تواصل معنا",
    href: "#contact",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 right-1/2 h-[350px] w-[600px] translate-x-1/2 rounded-full bg-amber-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ========================= */}
        {/* TOP CTA */}
        {/* ========================= */}

        <div className="border-b border-white/10 py-12">
          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

            <div className="text-center md:text-right">
              <h2 className="text-2xl font-black text-white sm:text-3xl">
                عندك مشروع في الرياض؟
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                تواصل معنا ودعنا نحول فكرتك إلى واقع.
              </p>
            </div>

            <a
              href="https://wa.me/966510190013"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-amber-500 px-7 py-4 font-black text-black transition hover:bg-amber-400"
            >
              <MessageCircle size={20} />
              تواصل عبر واتساب
            </a>

          </div>
        </div>

        {/* ========================= */}
        {/* MAIN FOOTER */}
        {/* ========================= */}

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* ========================= */}
          {/* BRAND */}
          {/* ========================= */}

          <div>

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-xl font-black text-black">
                ح
              </div>

              <div>
                <div className="text-xl font-black text-white">
                  اسم الشركة
                </div>

                <div className="text-xs text-amber-500">
                  للحدادة والديكور
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-8 text-gray-500">
              نقدم حلولًا متكاملة في أعمال الحدادة والكلادنج
              وقص الليزر والملاحق والسواتر والدرابزين
              بالإضافة إلى حلول Smart Home في الرياض.
            </p>

          </div>

          {/* ========================= */}
          {/* QUICK LINKS */}
          {/* ========================= */}

          <div>

            <h3 className="text-lg font-black text-white">
              روابط سريعة
            </h3>

            <ul className="mt-6 space-y-4">

              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition duration-300 hover:text-amber-500"
                  >
                    {link.title}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* ========================= */}
          {/* SERVICES */}
          {/* ========================= */}

          <div>

            <h3 className="text-lg font-black text-white">
              خدماتنا
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-500 transition duration-300 hover:text-amber-500"
                  >
                    {service}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* ========================= */}
          {/* CONTACT */}
          {/* ========================= */}

          <div>

            <h3 className="text-lg font-black text-white">
              تواصل معنا
            </h3>

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href="tel:+966510190013"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 transition duration-300 group-hover:bg-amber-500 group-hover:text-black">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    الهاتف
                  </p>

                  <p
                    dir="ltr"
                    className="mt-1 text-sm font-bold text-gray-300"
                  >
                    +966510190013
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/966510190013"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition duration-300 group-hover:bg-green-500 group-hover:text-white">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    واتساب
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-300">
                    تواصل معنا مباشرة
                  </p>
                </div>
              </a>

              {/* Email */}
              

              {/* Location */}
              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-gray-600">
                    الموقع
                  </p>

                  <p className="mt-1 text-sm font-bold leading-6 text-gray-300">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* BOTTOM */}
        {/* ========================= */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-right">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} الرياض للحداده. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center justify-center gap-6 sm:justify-end">

            <a
              href="#"
              className="text-xs text-gray-600 transition hover:text-amber-500"
            >
              سياسة الخصوصية
            </a>

            <a
              href="#"
              className="text-xs text-gray-600 transition hover:text-amber-500"
            >
              الشروط والأحكام
            </a>

          </div>

        </div>

      </div>

      {/* Scroll To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="العودة إلى الأعلى"
        className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black"
      >
        <ArrowUp size={18} />
      </button>

    </footer>
  );
}