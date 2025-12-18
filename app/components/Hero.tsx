import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="px-4 py-6 md:px-12 lg:px-20 lg:mt-30 ">
        {/* --- Heading inline --- */}
        <div className="flex items-center gap-4 mb-4 justify-cente lg:justify-start">
          <Image
            src="/images/home.svg"
            alt="Home Icon"
            width={70}
            height={80}
            className="w-10 md:w-14 lg:w-[70px]"
          />

          <h2 className="text-2xl font-normal md:text-5xl lg:text-6xl xl:text-[80px] whitespace-nowrap font-sans ">
            Hi, I’m Ebrahim Elgendy
          </h2>

          <Image
            src="/images/img.svg"
            alt="Avatar Icon"
            width={110}
            height={80}
            className="mt-2 w-14 md:w-20 lg:w-40"
          />
        </div>

        {/* --- All text in ONE line --- */}
        <div className="flex flex-wrap justify-start lg:justify-start items-center gap-4 font-normal text-[27px] md:text-5xl lg:text-[60px] xl:text-[78px] leading-tight font-sans">
          <p className="text-transparent bg-linear-to-b from-black/40 to-black/15 bg-clip-text whitespace-nowrap">
            Product Designer & Solopreneur
          </p>

          <div className="flex items-center gap-2 text-transparent whitespace-nowrap bg-linear-to-b from-black/40 to-black/15 bg-clip-text">
            <Image
              src="/images/star.svg"
              alt="Star Icon"
              width={70}
              height={70}
              className="w-8 md:w-12 lg:w-[60px]"
            />
            Crafting clean, delightful user
          </div>

          <div className="flex items-center gap-2 text-transparent whitespace-nowrap bg-linear-to-b from-black/40 to-black/15 bg-clip-text">
            experiences
            <Image
              src="/images/blan.svg"
              alt="Balloon Icon"
              width={70}
              height={70}
              className="w-8 md:w-12 lg:w-[60px]"
            />
            Helping people
          </div>

          <div className="flex items-center gap-2 text-transparent whitespace-nowrap bg-linear-to-b from-black/40 to-black/15 bg-clip-text">
            to increase their value
            <Image
              src="/images/party.svg"
              alt="Party Icon"
              width={70}
              height={70}
              className="w-8 md:w-12 lg:w-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Main photo */}
      <Image
        src="/images/ibrahim1.png"
        alt="Main Hero Image"
        width={1440}
        height={500}
        className="
    rounded-[40px] md:rounded-[60px] lg:rounded-[100px]
    h-auto mt-20 
    object-cover 
    object-[center_20%]
  "
      />
    </section>
  );
}

export default Hero;
