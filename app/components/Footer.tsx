import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="px-6 py-16 mt-16 md:px-16 lg:px-20">
      <div
        className="flex flex-col items-center gap-10 text-center  lg:flex-row lg:justify-between lg:items-start lg:text-left"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start">
          <Image
            src={"/images/Vectorized.svg"}
            alt="logo"
            width={65}
            height={60}
          />

          <Image
            src={"/images/think less.svg"}
            alt="logo"
            width={100}
            height={110}
            className="mt-3"
          />
        </div>

        {/* Links Section */}
        <div
          className="grid w-full grid-cols-1 gap-10 text-center  sm:grid-cols-2 md:grid-cols-3 lg:w-3/5 lg:text-left"
        >
          {/* Column 1 */}
          <div className="flex flex-col font-normal text-sm text-[#1A1B1F] gap-3 items-center lg:items-start">
            <p className="text-[#6B6B6B] font-medium">HALLO</p>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Newsletter</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>FAQ</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col font-normal text-sm text-[#1A1B1F] gap-3 items-center lg:items-start">
            <p className="text-[#6B6B6B] font-medium">SERVICES</p>
            <Link href={"/"}>Product Design</Link>
            <Link href={"/"}>Webflow Development</Link>
            <Link href={"/"}>Speaking</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col font-normal text-sm text-[#1A1B1F] gap-3 items-center lg:items-start">
            <p className="text-[#6B6B6B] font-medium">Resources</p>
            <Link href={"/"}>The Creative Freelancer Kit</Link>
            <Link href={"/"}>Resume Kit for UI/UX Designers</Link>
            <Link href={"/"}>UI/UX Design Learning Roadmap</Link>
            <Link href={"/"}>Glow Wallpaper Pack</Link>
            <Link className="flex gap-2" href={"/"}>See all resources <ArrowRight className="text-[#1A1B1F] w-4"/></Link>
          </div>
        </div>
      </div>
      <hr className="my-6 text-[#E0E0E0] "/>
      <div className="flex justify-between">
        <p className="font-normal text-sm text-[#222227]">© 2025 Ebrahim Elgendy</p>
        <div className="flex ">
           <Link href={"/"}> <Image src={"/images/Youtube.svg"} alt="youtube" width={20} height={20}/></Link>
           <Link href={"/"}> <Image src={"/images/twitter.svg"} alt="twitter" width={40} height={24}/></Link>
           <Link href={"/"}> <Image src={"/images/linkedin.svg"} alt="linkedin" width={40} height={24}/></Link>
           <Link href={"/"}> <Image src={"/images/instgrame.svg"} alt="instgrame" width={40} height={24}/></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
