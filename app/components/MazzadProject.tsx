import React from "react";
import Image from "next/image";
import Link from "next/link";

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

function MazzadProject() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-22 sm:px-6 md:px-10 lg:px-14 xl:px-45 ">
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
      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <Image
          src="/cases/m1.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-16 rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Brief
        </h3>
        <p className="mb-20 text-base sm:text-lg md:text-xl">
          Offer Mazad is a mobile auction platform focused on automobiles. The
          app’s tagline is Gateway to dream car auctions, and it aims to make
          car auctions accessible, intuitive, and transparent for a broad
          audience — from seasoned bidders to first-time buyers.
        </p>
        <Image
          src="/cases/m2.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <div className=" text-[#101828]">
          <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
            The Challenge
          </h3>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl">
            Trust & Transparency
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Users typically feel uneasy about auctions — “Is this a fair
            process? Will I be overpaying? Are the listings accurate?” To
            mitigate that, we needed UI and flows that make the process visible
            (inspection reports, bid history, seller info, etc.).
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Real-Time Bidding Experience
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            The auction experience must feel “live” — network latency, state
            synchronization, countdowns, bid updates, and preventing stale
            states are all tricky but must feel seamless to users.
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Onboarding & Legality
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Since users must provide identity, payment, and possibly vehicle
            documentation, the onboarding flows must be smooth, clear, and
            compliant with regulations. Errors or confusion here would be fatal
            to adoption.
          </p>
        </div>
        <Image
          src="/cases/m3.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mt-20 rounded-3xl"
        />
        <div className=" text-[#101828]">
          <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Our Solution
          </h3>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl">
            Unified Auction Experience
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            A single mobile platform for browsing, bidding, and purchasing
            vehicles — from listing to payment — all in one place.
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Transparent & Real-Time
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Live updates, bid tracking, and inspection reports ensure full
            transparency and trust in every transaction.
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Culturally Adapted & Bilingual
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Full Arabic support and localized payment options designed for MENA
            users, increasing accessibility and ease of use.
          </p>
        </div>
        <h3 className="mt-24 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Our Process
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          Following the Double Diamond methodology to ensure user-centered
          design
        </p>
        <Image
          src="/cases/m4.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <Image
          src="/cases/m5.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <h3 className="my-12 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Design System
        </h3>
        <Image
          src="/cases/m6.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <Image
          src="/cases/m7.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <Image
          src="/cases/m8.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-12 rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Key Features and Solutions
        </h3>
        <p className="mt-8 mb-12 text-base sm:text-lg md:text-xl">
          Smooth journey from initial contact to lasting engagement.
        </p>
        <Image
          src="/cases/m9.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Visual Design
        </h3>
        <p className="mt-8 mb-12 text-base sm:text-lg md:text-xl">
          {`Explore Offer Mazzad's visually stunning design journey, where every pixel tells a story of intuitive navigation and aesthetic brilliance, unlocking seamless interaction`}
        </p>
        <Image
          src="/cases/m10.svg"
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

export default MazzadProject;
