import React from "react";
import Link from "next/link";
import Image from "next/image";

function Blog(){
  return (
    <div className="px-5 py-20 md:px-8 lg:px-20">
      <h2 className="text-center font-semibold text-4xl text-[#222227]">{`Ebrahim's Newsletter`}</h2>
      <p className="font-normal text-center font-[satoshi] text-base text-[#6B6B6B] mt-5 mb-20">
        Practical tips and resources on UI/UX Design & Productivity
      </p>

      {/* Categories */}
      <div className="font-normal text-base flex flex-wrap  gap-4 text-[#494949] font-[satoshi] mb-10">
        <Link href="#" className="py-2 px-4 h-11 border rounded-full border-[#494949]/30 hover:bg-[#222227] hover:text-white">All</Link>
        <Link href="#" className="h-11 py-2 px-4 border rounded-full border-[#494949]/30 hover:bg-[#222227] hover:text-white">Self Improvement</Link>
        <Link href="#" className="h-11 py-2 px-4 border rounded-full border-[#494949]/30 hover:bg-[#222227] hover:text-white">Solopreneurship</Link>
        <Link href="#" className="h-11 py-2 px-4 border rounded-full border-[#494949]/30 hover:bg-[#222227] hover:text-white">Guides & Tutorials</Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <Link href="#"><Image src={"/images/b1.svg"} alt="card" width={400}  height={450} /></Link>
        <Link href="#"><Image src={"/images/b2.svg"} alt="card" width={400}  height={450} /></Link>
        <Link href="#"><Image src={"/images/b3.svg"} alt="card" width={400}  height={450} /></Link>
        <Link href="#"><Image src={"/images/b4.svg"} alt="card" width={400}  height={450} /></Link>
        <Link href="#"><Image src={"/images/b5.svg"} alt="card" width={400}  height={450} /></Link>
        <Link href="#"><Image src={"/images/b6.svg"} alt="card" width={400}  height={450} /></Link>
        <Link href="#"><Image src={"/images/b7.svg"} alt="card" width={400}  height={450} /></Link>
        <Link href="#"><Image src={"/images/b8.svg"} alt="card" width={400}  height={450} /></Link>
      </div>
    </div>
  );
}

export default Blog;

