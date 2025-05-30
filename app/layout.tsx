import "./globals.css";
import { blinker } from "@/app/ui/fonts";

import Nav from "@/app/ui/Nav";
import Footer from "./ui/Footer";

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
        <Footer/>
      </body>
    </html>
  );
}
