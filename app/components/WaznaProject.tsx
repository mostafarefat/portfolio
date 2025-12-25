import React from "react";
import Image from "next/image";

const projectHighlights = [
  {
    label: "Client Name",
    value: "Offer Mazzad",
    icon: "/cases/Vector.svg",
  },
  {
    label: "Project Type",
    value: "Car acutions APP",
    icon: "/cases/vector1.svg",
  },
  {
    label: "Project Duration",
    value: "June 23rd, 2024 - November 12th, 2024",
    icon: "/cases/vector2.svg",
  },
];

function WaznaProject() {
  return (
    <section>
      <div className="flex flex-col items-center max-w-6xl mx-auto mb-24 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
          Offer Mazzad
        </h2>
        <p className="mb-10 max-w-4xl text-base font-normal text-[#222227] sm:text-lg md:text-xl lg:text-2xl">
          A culturally intelligent platform for nutrition, fitness, and
          lifestyle designed for the MENA region
        </p>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex flex-col gap-2 px-5 py-4 text-left shadow-sm rounded-2xl bg-white/70"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={highlight.icon}
                  alt={`${highlight.label} icon`}
                  width={27}
                  height={27}
                />
                <span className="text-base font-medium text-[#0A0D11] sm:text-lg">
                  {highlight.label}
                </span>
              </div>
              <p className="text-sm font-normal text-gray-600 sm:text-base">
                {highlight.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WaznaProject;
