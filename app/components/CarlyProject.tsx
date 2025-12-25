import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectHighlights = [
  {
    label: "Client Name",
    value: "Carly",
    icon: "/cases/Vector.svg",
  },
  {
    label: "Project Type",
    value: "Automotive services",
    icon: "/cases/vector1.svg",
  },
  {
    label: "Project Duration",
    value: "June 23rd, 2024 - November 12th, 2024 ",
    icon: "/cases/vector2.svg",
  },
];
const goals = [
  "Redesign the website to improve clarity, trust, and conversion",
  "Create a user journey optimized for Arab (RTL, culturally relevant imagery).",
  "Improve visual branding and consistency (typography, color, imagery).",
  "Ensure responsiveness and accessibility across devices (especially mobile).",
];

function CarlyProject() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-18 sm:px-6 md:px-10 lg:px-14 xl:px-45 ">
      <div className="flex flex-col items-center max-w-6xl mx-auto mb-24 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
          Carly
        </h2>
        <p className="mb-10 max-w-4xl text-base font-normal text-[#222227] sm:text-lg md:text-xl lg:text-2xl">
          Carly is a next-generation e-commerce platform
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
      <Image
        src={"/cases/c1.svg"}
        alt="c1"
        width={1000}
        height={599}
        className="mb-18"
      ></Image>
      <div className="space-y-6 text-[#101828]">
        <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          Client & Product
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          Carly is a platform/brand focused on car sales or automotive services
          in the Saudi market The website halacarly.com is their digital
          presence, presumably their primary channel for showcasing inventory,
          connecting with customers, financial solutions and building brand
          credibility.
        </p>
      </div>

      <div className=" text-[#101828]">
        <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          The Problem
        </h3>
        <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl">
          Trust Gap
        </p>
        <p className="text-base sm:text-lg md:text-xl">
          Users worry about vehicle authenticity, hidden costs, and lack of
          verified listings.
        </p>
        <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
          Fragmented Experiences
        </p>
        <p className="text-base sm:text-lg md:text-xl">
          Most users rely on multiple disconnected platforms (classified ads,
          social media, WhatsApp) to compare and connect with sellers.
        </p>
        <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
          Cultural & Linguistic Barriers
        </p>
        <p className="text-base sm:text-lg md:text-xl">
          Regional audiences face challenges with poorly localized experiences —
          from non-RTL layouts to missing Arabic support.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl mt-20 mb-8">
          Objectives
        </h3>
        <ul className="list-inside space-y-3 text-base text-[#101828] sm:text-lg md:text-xl">
          {goals.map((goal) => (
            <li key={goal} className="list-disc">
              {goal}
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <Image
          src="/cases/c2.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-16 rounded-3xl"
        />
        <Image
          src="/cases/c3.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <h3 className="my-12 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Visual Design & UI
        </h3>
        <Image
          src="/cases/c4.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <Image
          src="/cases/c5.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <Image
          src="/cases/c6.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Competitor analysis
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          Uncovering Insights to Analyzing Competitors to Inform Design
          Strategies for a Seamless Car Buying and Selling Experience
        </p>
        <Image
          src="/cases/c7.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Redesign Changes
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          {`Carly's website redesign focused on a visually appealing,
          brand-consistent look.`}
        </p>
        <Image
          src="/cases/c8.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          New Feature
        </h3>
        <p className="mt-8 mb-12 text-base sm:text-lg md:text-xl">
          The Customer Profile feature has been designed to enhance your sales
          process significantly. With this tool, you can effortlessly track
          every step of the sale, schedule necessary inspections, and access
          detailed reports. Additionally, it allows you to manage all relevant
          documents until the car is successfully sold, ensuring a smooth and
          organized experience throughout the transaction.
        </p>
        <Image
          src="/cases/c9.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-12 rounded-3xl"
        />
        <Image
          src="/cases/c10.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
      </div>
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

export default CarlyProject;
