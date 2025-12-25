import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectHighlights = [
  {
    label: "Client Name",
    value: "Sideup",
    icon: "/cases/Vector.svg",
  },
  {
    label: "Project Type",
    value: "Logistics platform",
    icon: "/cases/vector1.svg",
  },
  {
    label: "Project Duration",
    value: "June 23rd, 2024 - November 12th, 2024",
    icon: "/cases/vector2.svg",
  },
];

function sideupProject() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-22 sm:px-6 md:px-10 lg:px-14 xl:px-45 ">
      <div className="flex flex-col items-center max-w-6xl mx-auto mb-24 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
          Sideup
        </h2>
        <p className="mb-10 max-w-4xl text-base font-normal text-[#222227] sm:text-lg md:text-xl lg:text-2xl">
          Sideup is a logistics platform that helps e-commerce businesses
          connect with shipping providers, compare rates, and manage deliveries
          easily.
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
          src="/cases/s1.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-16 rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Brief
        </h3>
        <p className="mb-20 text-base sm:text-lg md:text-xl">
          {` SideUp is a B2B logistics and operations platform helping merchants across the Middle East and North Africa scale their e-commerce businesses. By bridging fragmented shipping systems, courier networks, and fulfillment workflows, SideUp gives merchants one place to manage all their logistics — from order to delivery — with visibility, speed, and trust`}
        </p>
        <Image
          src="/cases/s2.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <div className=" text-[#101828]">
          <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Context & Challenge
          </h3>
          <p className="text-base sm:text-lg md:text-xl">
            E-commerce in MENA has grown rapidly, but the merchant ecosystem
            remains fragmented small and medium businesses face three recurring
            pain points:
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl">
            Fragmented Operations
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Merchants manually manage couriers, print labels, track shipments
            across multiple dashboards, and reconcile delivery statuses through
            spreadsheets — wasting time and creating operational blind spots.
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Low Visibility & Trust
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Most merchants lack real-time visibility into their logistics: no
            unified tracking, unclear courier performance, and inconsistent
            updates cause missed deliveries and unhappy customers.
          </p>
          <p className="mt-8 mb-3 text-base font-bold sm:text-lg md:text-xl ">
            Scalability Barriers
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            When expanding to new markets, merchants must rebuild integrations,
            understand local courier networks, and manage regulatory
            documentation — all from scratch.
          </p>
        </div>
        <Image
          src="/cases/s3.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mt-24 rounded-3xl"
        />
        <h3 className="mt-24 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Discovery
        </h3>
        <p className="mb-8 text-base sm:text-lg md:text-xl">
          {`We started by understanding the merchant's daily pain points and their
          ecosystem. Our research involved`}
        </p>
        <Image
          src="/cases/s4.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mt-24 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Key Research Findings
        </h3>
        <p className="mb-12 text-base sm:text-lg md:text-xl">
          Three critical insights emerged that shaped our design philosophy:
          clarity over complexity, automation over manual work, and regional
          empathy over generic SaaS.
        </p>
        <Image
          src="/cases/s5.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <Image
          src="/cases/s6.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mt-12 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          The Solution
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          SideUp transforms fragmented logistics into a unified platform that
          centralizes operations, provides real-time visibility, and scales
          effortlessly across regions.
        </p>
        <Image
          src="/cases/s7.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <Image
          src="/cases/s8.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mb-12 rounded-3xl"
        />
        <Image
          src="/cases/s9.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-12 rounded-3xl"
        />
        <h3 className="mt-8=24 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Design System
        </h3>
        <Image
          src="/cases/s10.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <Image
          src="/cases/s11.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto my-8 rounded-3xl"
        />
        <Image
          src="/cases/s12.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl "
        />
        <Image
          src="/cases/s13.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto mt-16 rounded-3xl"
        />
        <h3 className="mt-20 mb-8 text-2xl font-semibold sm:text-3xl md:text-4xl">
          More Screens
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          This analysis explores the key interfaces that define the Sideup user
          experience, focusing on their functionalities, design principles, and
          influence on user interactions. It highlights how each interface
          enhances a seamless and engaging experience, ensuring the design meets
          user needs.
        </p>
        <Image
          src="/cases/s14.svg"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl mt-28"
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

export default sideupProject;
