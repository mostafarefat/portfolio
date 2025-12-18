import React from "react";
import Image from "next/image";

const myDesign = [
  {
    id: 1,
    icon: "/images/icon1.svg",
    title: "'Kaizen'",
    desc: `The word ‘Kaizen’ means continuous
improvement. Never settle for mediocrity—
There's always room to make our designs
better, one iteration at a time.`,
  },
  {
    id: 2,
    icon: "/images/icon2.svg",
    title: "Humans, not users",
    desc: `Good design balances between aesthetics &
functionality while showing empathy towards
the user's emotions, behaviours, and jobs-to-
be-done.`,
  },
  {
    id: 3,
    icon: "/images/icon3.svg",
    title: "Details, details, details",
    desc: `The design details of a product reflects its
brand. From spacing, typography,
component sizing to micro-copy, each
element should be meticulously crafted.`,
  },
  {
    id: 4,
    icon: "/images/icon4.svg",
    title: "Surprise!",
    desc: `Subtle interactions, playful animations, and
creative copy—Tiny design elements like
these create magical user experiences.`,
  },
];

function HeroSection() {
  return (
    <div className="px-2 md:px-2 lg:px-20 ">
      {/* Hero Title */}
      <div className="py-20 md:py-28">
        <h2 className="font-[inter] font-medium text-7xl sm:text-6xl md:text-7xl lg:text-9xl text-black leading-tight">
          Good design is{" "}
          <span className="text-transparent bg-linear-to-b from-black/40 to-black/15 bg-clip-text">
            invisible.
          </span>
        </h2>

        <p className="font-[roboto] text-base sm:text-lg md:text-2xl text-[#6B6B6B] max-w-[462px] mt-4">
          Strategic thinker crafting clean, effective designs that seamlessly
          blend user delight with business success.
        </p>
      </div>

      {/* My Design Principles */}
      <div>
        <h2 className="font-[inter-tight] font-semibold text-3xl sm:text-3xl md:text-4xl my-10 text-[#222227]">
          My Design Principles
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {myDesign.map((item) => (
            <div key={item.id} className="space-y-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="mx-au lg:mx-0"
              />
              <h3 className="font-[inter-tight] font-semibold text-xl md:text-2xl text-[#222227]">
                {item.title}
              </h3>
              <p className="font-normal font-[satoshi] text-sm text-[#616161] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

