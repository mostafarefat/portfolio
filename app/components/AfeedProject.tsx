import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectHighlights = [
  {
    label: "Client Name",
    value: "Afeed",
    icon: "/cases/Vector.svg",
  },
  {
    label: "Project Type",
    value: "EdTech",
    icon: "/cases/vector1.svg",
  },
  {
    label: "Project Duration",
    value: "June 23rd, 2024 - November 12th, 2024",
    icon: "/cases/vector2.svg",
  },
];

const goals = [
  "Build a dual-sided platform serving both creators and consumers.",
  "Deliver news in interactive, short formats while maintaining depth.",
  "Provide premium learning experiences that feel accessible and social.",
  "Encourage longer session times through seamless discovery flows.",
];

function AfeedProject() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-18 sm:px-6 md:px-10 lg:px-14 xl:px-45">
      <div className="flex flex-col items-center max-w-6xl mx-auto text-center">
        <h2 className="mb-4 text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
          Afeed
        </h2>
        <p className="mb-10 max-w-4xl text-base font-normal text-[#222227] sm:text-lg md:text-xl lg:text-2xl">
          Afeed is a social-driven news platform that blends short videos,
          in-depth content, and interactive stories into a single experience —
          reshaping how users consume and engage with news.
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

      <div className="max-w-6xl mx-auto mt-12 space-y-10 sm:mt-14 md:mt-16 lg:mt-20">
        <Image
          src="/cases/Frame1.png"
          alt="Afeed hero"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
          priority
        />

        <div className="space-y-6 text-[#101828]">
          <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Brief
          </h3>
          <p className="text-base sm:text-lg md:text-xl">
            Afeed was founded to solve a growing need: creators struggle to
            monetize their knowledge and content beyond ads and fragmented
            platforms. The goal was to build an ecosystem where creators can
            publish, engage, and directly sell learning products, courses, and
            premium content in formats that feel social and interactive.
          </p>
        </div>

        <div className="space-y-6 text-[#101828]">
          <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Challenge
          </h3>
          <p className="text-base sm:text-lg md:text-xl">
            Creators had no single hub where they could both build a following
            and monetize through flexible product offerings. At the same time,
            users were overwhelmed by traditional, rigid e-learning platforms.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            We needed to create a platform that felt familiar and engaging (like
            social media), but structured enough to support professional
            learning and commerce.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
            Goals
          </h3>
          <ul className="list-inside space-y-3 text-base text-[#101828] sm:text-lg md:text-xl">
            {goals.map((goal) => (
              <li key={goal} className="list-disc">
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Image
            src="/cases/Frame2.png"
            alt="Afeed screen 1"
            width={560}
            height={380}
            className="object-cover w-full h-auto rounded-2xl"
          />
          <Image
            src="/cases/Frame3.png"
            alt="Afeed screen 2"
            width={560}
            height={380}
            className="object-cover w-full h-auto rounded-2xl"
          />
        </div>

        <Image
          src="/cases/Frame4.png"
          alt="Afeed flow"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
          User Personas
        </h3>
        <p className="text-base text-[#101828] sm:text-lg md:text-xl">
          Understanding our key user groups helps us design experiences that
          truly resonate with their needs and motivations.
        </p>
        <div className="rounded-3xl bg-[#e7e7e7] px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16">
          <p className="mb-10 text-base font-medium text-[#666d80] sm:mb-12 sm:text-lg">
            Personas
          </p>
          <div className="space-y-8">
            <Image
              src="/cases/Frame5.png"
              alt="Persona one"
              width={1000}
              height={650}
              className="object-cover w-full h-auto rounded-2xl"
            />
            <Image
              src="/cases/Frame6.png"
              alt="Persona two"
              width={1000}
              height={650}
              className="object-cover w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
          Design System
        </h3>
        <p className="text-base text-[#101828] sm:text-lg md:text-xl">
          <span className="font-medium text-[#101828]">Colors:</span> rant yet
          professional palette (to balance playfulness with credibility)
          resonate with their needs and motivations.
        </p>
        <Image
          src="/cases/Frame7.png"
          alt="Color system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
        <p className="text-base text-[#101828] sm:text-lg md:text-xl">
          <span className="font-medium text-[#101828]">Typography:</span> Inter
          for expressive headings, Inter for clarity in UI.
        </p>
        <Image
          src="/cases/Frame8.png"
          alt="Typography system"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
          Research & Insights
        </h3>
        <ul className="space-y-4 text-base text-[#101828] sm:text-lg md:text-xl">
          <li className="ml-4 list-disc list-outside ">
            Benchmarking against creators-first platforms (Patreon, Kajabi,
            Domestika) revealed gaps in social interaction and multi-format
            flexibility.
          </li>
          <li className="list-disc list-inside">
            User interviews confirmed creators wanted commerce tools built into
            their content flow, not as separate add-ons.
          </li>
          <li className="list-disc list-inside ">
            Learners expressed preference for bite-sized formats alongside
            premium long-form experiences.
          </li>
        </ul>
        <Image
          src="/cases/Frame13.png"
          alt="Research visuals"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
          UI Design
        </h3>
        <p className="text-base text-[#101828] sm:text-lg md:text-xl">
          Clean, social-inspired layouts with emphasis on video, stories, and
          highlights.
        </p>
        <div className="rounded-3xl bg-[#e7e7e7] px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16">
          <p className="mb-10 text-base font-medium text-[#666d80] sm:mb-12 sm:text-lg">
            Final Screens
          </p>
          <Image
            src="/cases/Frame14.png"
            alt="Final screens"
            width={1100}
            height={700}
            className="object-cover w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
          The Results
        </h3>
        <div className="space-y-4 text-base text-[#101828] sm:text-lg md:text-xl">
          <p>
            The platform prototype successfully showcased how Afeed bridges the
            gap between social media engagement and structured monetization.
          </p>
          <p>
            Creators now have an integrated path to publish, sell, and grow
            communities, while learners experience a seamless mix of free and
            paid content.
          </p>
          <p>
            Afeed sets a new standard for creator-driven platforms — one that
            feels social, sells seamlessly, and scales with both creators and
            consumers.
          </p>
        </div>
        <Image
          src="/cases/Frame15.png"
          alt="Results"
          width={1200}
          height={720}
          className="object-cover w-full h-auto rounded-3xl"
        />
      </div>

      <div className="flex flex-col items-center max-w-4xl px-6 py-12 mx-auto mt-16 text-center sm:px-10 md:mt-20 md:px-12">
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

export default AfeedProject;
