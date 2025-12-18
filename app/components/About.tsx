"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const about = [
  { id: 1, age: "1999", desc: "Born in Cairo, Egypt" },
  { id: 2, age: "2017", desc: "Studied hard, got good grades but failed to get a scholarship" },
  { id: 3, age: "2018", desc: "Enrolled myself into the faculty of Al-Alsun ( Spanish Department ) to study the Spanish language & litrature" },
  { id: 4, age: "2018 - 2022", desc: "Aside my Studies, Tried different jobs like customer service rep, salesperson, working in an ad agency and Spanish Translator" },
  { id: 5, age: "April 2022", desc: "Joined a Google UX/UI path at Coursera, 6 months later, got my certificate." },
  { id: 6, age: "January 2023", desc: "Received first UI/UX design Freelance Project" },
  { id: 7, age: "June 2024", desc: "Finished my military service." },
  { id: 8, age: "July 2024", desc: "Started my Journey on Tourism , As a Tour Operator Side by side with my work as a freelancer ( UX/UI Designer)" },
  { id: 9, age: "Dec , 2024", desc: "Made the whole career-shift and Become a Product Designer" },
  { id: 10, age: "Dec , 2024", desc: "Starting my new job as a Product Designer At Observer Studio." },
];

const sections = [
  { id: "about", label: "About me in 10 seconds" },
  { id: "now", label: "Now" },

  { id: "timeline", label: "Timeline" },
  { id: "online", label: "Find me online" },
];

function About() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-20% 0px -20% 0px",
    }
  );

  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setActiveSection(null);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <section className="px-5 py-16 md:px-10 lg:px-38">
      <div className="flex flex-col mx-auto max-w-7xl gap-14 lg:flex-row lg:gap-34">

        {/* SIDEBAR */}
        <ul className="hidden w-1/4 lg:block">
          <div className="sticky space-y-3 text-base font-medium top-28">
            {sections.map((section) => (
              <li key={section.id} className="relative">
                <Link
                  href={`#${section.id}`}
                  className={`transition-colors ${
                    activeSection === section.id
                      ? "text-[#222227]"
                      : "text-[#6b6b6b]"
                  }`}
                >
                  {section.label}
                </Link>


              </li>
            ))}
          </div>
        </ul>

        {/* CONTENT */}
        <div className="flex-1">

          {/* IMAGE */}
          <Image
            src="/images/ibrahim1.png"
            alt="Main Hero Image"
            width={900}
            height={600}
            className="object-cover w-full rounded-3xl"
            priority
          />

          {/* ABOUT */}
          <h3
            id="about"
            className="mt-12 mb-2 text-3xl font-semibold text-[#222227] md:text-4xl"
          >
            About me in 10 seconds
          </h3>

          <p className="mb-6 font-[satoshi] text-base text-[#6B6B6B]">
            I design thoughtful digital experiences that solve real problems and
            make products easier to use.
          </p>

          <p className="mb-20 font-[satoshi] text-base text-[#6B6B6B]">
            Think Less, Create More.
          </p>

          {/* NOW */}
          <h3
            id="now"
            className="mb-6 text-3xl font-semibold text-[#222227] md:text-4xl"
          >
            NOW
          </h3>

          <ul>
            <li className="mb-2 flex items-center gap-2 text-base font-medium text-[#222227]">
              <Link href="">Part of Design Team of Observer Studio</Link>
              <ArrowRight className="w-4" />
            </li>
            <li className="mb-6 font-[satoshi] text-base text-[#6B6B6B]">
              Collaborating with the talented Team.
            </li>

            <li className="mb-2 flex items-center gap-2 text-base font-medium text-[#222227]">
              <Link href="">Independent Product Designer</Link>
              <ArrowRight className="w-4" />
            </li>
            <li className="mb-6 font-[satoshi] text-base text-[#6B6B6B]">
              Product design, Bubble/Framer Development and consultation.
            </li>

            <li className="mb-2 flex items-center gap-2 text-base font-medium text-[#222227]">
              <Link href="">Writing my newsletter</Link>
              <ArrowRight className="w-4" />
            </li>
            <li className="mb-6 font-[satoshi] text-base text-[#6B6B6B]">
              Get actionable tips on UI/UX design and Solopreneurship.
            </li>
          </ul>

          {/* TIMELINE */}
          <h3
            id="timeline"
            className="mt-24 mb-6 text-3xl font-semibold text-[#222227] md:text-4xl"
          >
            Timeline
          </h3>

          {about.map((item) => (
            <div key={item.id} className="flex gap-6 h-28 md:h-22 lg:h-22">
              <div className="flex flex-col items-center">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#ff8564]" />
                <div className="h-full w-0.5 bg-[#f0dbd6] " />
              </div>

              <div>
                <p className="text-lg font-medium text-[#222227]">{item.age}</p>
                <p className="font-[satoshi] text-base text-[#6B6B6B]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="flex gap-6 ">
            <div className="mt-2 h-2 w-2 rounded-full bg-[#ff8564]" />
            <div>
              <p className="text-lg font-medium text-[#222227]">And...</p>
              <p className="font-[satoshi] text-base text-[#6B6B6B]">
                To be continued :)
              </p>
            </div>
          </div>

          {/* FIND ME */}
          <h3
            id="online"
            className="mt-24 mb-6 text-3xl font-semibold text-[#222227] md:text-4xl"
          >
            Find me online
          </h3>

          <p className="flex flex-wrap gap-1 font-[satoshi] text-base text-[#6B6B6B]">
            You can find me on
            <Link href="" className="font-medium text-[#222227]"> Behance,</Link>
            <Link href="" className="font-medium text-[#222227]"> Dribbble,</Link>
            <Link href="" className="font-medium text-[#222227]"> LinkedIn,</Link>
            and
            <Link href="" className="font-medium text-[#222227]"> Instagram.</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;


