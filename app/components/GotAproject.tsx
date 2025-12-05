import React from "react";
import Image from "next/image";
import Link from "next/link";

function GotAproject() {
  return (
    <section className="flex items-center justify-center px-20 text-center py-30">
      <div>
        <div className="flex justify-center">
            <Image src={"/images/Vector.svg"} alt="vector" width={44} height={148} />
        </div>
        
        <h2 className="text-4xl font-medium  text-[#222227] mt-5 mb-3 font-[Inter-Tight] md:text-6xl lg:text-6xl">Got a project?</h2>
        <p className="font-normal font-[satoshi] text-base text-[#6B6B6B] mb-9">Discover how we could work together :)</p>
        <button className="mt-20"><Link href={"/"} className="font-medium text-white bg-black rounded-full px-10 py-18 font-[satoshi] text-base ">
        Get in touch
        </Link></button>
      </div>
    </section>
  );
}

export default GotAproject;
