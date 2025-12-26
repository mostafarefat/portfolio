import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectHighlights = [
  {
    label: "Client Name",
    value: "Wazna",
    icon: "/cases/Vector.svg",
  },
  {
    label: "Project Type",
    value: "Health & Wellness App",
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
    <section className="bg-[#f1f1f1] px-4 py-22 sm:px-6 md:px-10 lg:px-14 xl:px-45 ">
      <div className="flex flex-col items-center max-w-6xl mx-auto mb-24 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
          Wazna
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
      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <Image
          src="/cases/w1.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-16 rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Brief
        </h3>
        <p className="mb-20 text-base sm:text-lg md:text-xl">
          Wazna empowers users to build healthier lifestyles through culturally
          intelligent nutrition guidance, personalized fitness plans, and
          community-driven wellness support designed for Arabic speaking users.
          It empowers individuals and families to make smarter nutrition and
          health decisions by combining modern health science with local
          culture, foods, and lifestyle.
        </p>
        <Image
          src="/cases/w2.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <div className=" text-[#101828]">
          <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
            The Problem
          </h3>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl">
            Cultural Disconnect
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            {`Western health apps usually don't account for fasting periods,
            Ramadan, or Middle Eastern dietary habits`}
            
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Fragmented Experience
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Users need multiple apps for nutrition tracking, fitness, meal
            planning, and consultations
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Language Barriers
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Most health apps lack proper Arabic support and culturally relevant
            content
          </p>
        </div>
        <Image
          src="/cases/w3.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mt-24 rounded-3xl"
        />
        <div className=" text-[#101828]">
          <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Our Solution
          </h3>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl">
            All-in-One Platform
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Unified experience for meal planning, fitness, consultations, and
            community
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Bilingual & Cultural
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Full Arabic support with culturally intelligent features for fasting
            and dietary preferences
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Smart Gamification
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Reward system and AI recommendations to maintain long-term
            engagement
          </p>
        </div>
        <Image
          src="/cases/w4.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mt-24 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Our Process
        </h3>
        <p className="mb-12 text-base sm:text-lg md:text-xl">
          Following the Double Diamond methodology to ensure user-centered
          design
        </p>
        <Image
          src="/cases/w5.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Design System
        </h3>
        <Image
          src="/cases/w6.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />

        <Image
          src="/cases/w7.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <Image
          src="/cases/w8.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-12 rounded-3xl"
        />
        <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          User Journey Flow
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          Smooth journey from initial contact to lasting engagement.
        </p>
        <Image
          src="/cases/w9.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          More Screens
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          A detailed exploration of the key interfaces that define the Wazna user experience.
        </p>
        <Image
          src="/cases/w10.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
          />
          </div>
      <Image
        src="/cases/m11.svg"
        alt="Color system"
        width={1200}
        height={720}
        className="object-cover w-full h-auto rounded-3xl mt-28"
      />
      <div className="flex flex-col items-center max-w-4xl px-6 py-12 mx-auto mt-16 text-center rounded-3xl sm:px-10 md:mt-20 md:px-12">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Get unlimited designs
        </h2>
        <p className="max-w-2xl mx-auto mt-4 mb-8 text-sm font-normal text-gray-600 sm:text-base">
          Let&apos;s chat about your design needs and how Observer can help
          streamline creativity!
        </p>
        <Link
          href="#"
          className="px-6 py-3 text-base font-medium text-white transition bg-black rounded-2xl hover:bg-black/80"
        >
          Book A Free Call
        </Link>
      </div>
    </section>
  );
}

export default WaznaProject;
