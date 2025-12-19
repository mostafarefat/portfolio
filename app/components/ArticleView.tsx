import React from "react";
import Image from "next/image";
import ArticleList from "./ArticleList";

function ArticleView() {
  return (
    <section className="container px-4 mx-auto sm:px-6 lg:px-20">
      {/* -------- HEADER -------- */}
      <div className="my-12 text-center sm:my-16">
        <h3 className="font-normal text-lg sm:text-2xl text-[#222227]">
          All you need to know about
        </h3>

        <h2 className="text-2xl sm:text-4xl font-normal text-[#222227] my-3 sm:my-4">
          UI/UX Design
        </h2>

        <p className="text-sm sm:text-base font-normal text-[#6b6b6b] max-w-3xl mx-auto">
          A work-in-progress guide and resources to everything you should know
          about User Interface Design (UI), User Experience Design (UX) and
          anything else related to the topic.
        </p>

        {/* -------- AUTHOR -------- */}
        <div className="flex items-center justify-center gap-4 mt-6 mb-12">
          <Image
            src="/images/ibrahim1.png"
            alt="author"
            width={64}
            height={64}
            className="rounded-full"
          />

          <div className="text-left">
            <p className="text-sm font-medium text-[#222227]">
              Ibrahin Elgendy
            </p>
            <p className="text-xs sm:text-sm font-normal text-[#6b6b6b]">
              Updated: Nov 24, 2025
            </p>
          </div>
        </div>

        {/* -------- HERO IMAGE -------- */}
        <div className="w-full">
          <Image
            src="/images/UXDesign.png"
            alt="UI UX Design"
            width={1100}
            height={540}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* -------- CONTENT -------- */}
      <ul className="text-base sm:text-lg font-normal text-[#222227]/80 max-w-4xl mx-auto">
        <li className="text-2xl sm:text-4xl text-[#222227] mb-4">
          What is UI/UX Design?
        </li>

        <li className="mb-10">
          UI and UX Design is the combination of both User Interface (UI) Design
          and User Experience (UX) Design...
        </li>

        <li className="text-xl sm:text-3xl text-[#222227]">
          What is User Experience (UX) Design?
        </li>

        <li className="my-4">
          User Experience design is the planning and creation of how a digital
          product works...
        </li>

        <li className="mb-10">
          Here are some useful resources on my{" "}
          <span className="underline text-[#222227] cursor-pointer">
            Resources
          </span>{" "}
          page.
        </li>

        <li className="text-xl sm:text-3xl text-[#222227]">
          What is User Interface (UI) Design?
        </li>

        <li className="my-4">
          User Interface design is designing how the interfaces of digital
          products looks and feels like...
        </li>

        <li className="mb-10">
          Tiny UI like buttons, forms, search bar, pop ups and hover animations
          are part of user interface design.
        </li>

        <li className="text-2xl sm:text-4xl text-[#222227]">
          UX vs UI design
        </li>

        <li className="text-lg sm:text-2xl my-4 text-[#222227]">
          The Differences
        </li>

        <li className="flex gap-2 mb-3">
          <span className="font-medium">1.</span>
          <span>
            UI/UX designers are responsible for the look and feel of a product...
          </span>
        </li>

        <li className="flex gap-2 mb-3">
          <span className="font-medium">2.</span>
          <span>
            UI/UX designers usually have a background in design...
          </span>
        </li>
      </ul>

      <ArticleList />
    </section>
  );
}

export default ArticleView;


