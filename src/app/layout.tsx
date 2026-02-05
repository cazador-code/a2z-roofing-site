import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "A2Z Roofing Co. | Trusted Roofing Experts in Colorado's Western Slope",
  description:
    "Family-owned roofing company serving the Roaring Fork Valley for 17+ years. New roofs, repairs, metal roofing, and more. Free estimates. 970-773-4833.",
  keywords:
    "roofing, Silt CO, Roaring Fork Valley, roof repair, new roof, metal roofing, Western Slope Colorado",
  openGraph: {
    title: "A2Z Roofing Co. | Colorado's Western Slope Roofing Experts",
    description:
      "17+ years of trusted roofing. Free estimates. Family-owned. Serving Aspen to Parachute.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
