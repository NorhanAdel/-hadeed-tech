import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "حداد برو | حداد متنقل وخدمات حدادة متكاملة",
  description:
    "حداد متنقل، صيانة وتركيب الأبواب، درابزين، مظلات سيارات، سواتر، قص ليزر وديكورات كلادنج.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}