import type { Metadata } from "next";
import {
  Roboto,
  Inter_Tight,
  Caveat,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  weight: ["300", "400", "500", "700", "600"],
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Portfolio - ibrahim elgendy",
    icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${interTight.className} ${caveat.className} `}
    >
      <body className="bg-[url('/images/bg2.WEBP')]  bg-[#fdfcf9]  h-full ">
        <div className="pb-15 md:pb-15 lg:pb-24">
          <Navbar />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
