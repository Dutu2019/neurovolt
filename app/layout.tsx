import "./globals.css";
import { Blinker } from "next/font/google";

import Nav from "@/app/ui/Nav";
import Footer from "./ui/Footer";

export const blinker = Blinker({ weight: "400", subsets: ["latin"] });

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
