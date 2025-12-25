import type { Metadata } from "next";
import { Roboto, Inter_Tight, Caveat , Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  weight: ["300", "400", "500", "700","600"],
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: [ "400", "500", "700"],
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700","600" ,"500"], // اختار الأوزان اللي هتستخدمها
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
    <html lang="en" className={`${roboto.className} ${interTight.className} ${caveat.className} ${robotoCondensed.className}`}>
      <body className="bg-[url('/images/bg2.WEBP')]  bg-[#fdfcf9]  h-full ">
      <div className="pb-15 md:pb-15 lg:pb-24">
        <Navbar/>
      </div>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}

