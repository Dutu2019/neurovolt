import "./globals.css";
import type { Metadata } from "next";
import { blinker } from "@/app/fonts";

import Nav from "@/app/components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "NeuroVolts",
  description:
    "Website for the NeuroVolts committee at Collège Jean-de-Brébeuf",
  icons: {
    // Standard favicons
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    // Apple touch icons
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    // Android icons
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blinker} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
