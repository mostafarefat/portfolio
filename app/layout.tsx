import type { Metadata } from "next";
import { Roboto, Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-Inter-Tight",
  weight: ["300", "400", "500", "700","600"],
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: [ "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - ibrahim elgendy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${interTight.variable} ${caveat.variable}`}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

