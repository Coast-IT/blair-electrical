import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blair Data & Electrical | Master Electricians Brisbane & Gold Coast",
  description:
    "Licensed master electricians servicing Brisbane and Gold Coast. Residential, commercial, and industrial electrical services — done right, every time.",
  keywords: [
    "electrician brisbane",
    "electrician gold coast",
    "master electrician",
    "data cabling",
    "commercial electrician",
    "residential electrician",
  ],
  openGraph: {
    title: "Blair Data & Electrical | Master Electricians Brisbane & Gold Coast",
    description:
      "Licensed master electricians servicing Brisbane and Gold Coast. Residential, commercial, and industrial electrical services.",
    url: "https://blairelectrical.com.au",
    siteName: "Blair Data & Electrical",
    type: "website",
    locale: "en_AU",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
