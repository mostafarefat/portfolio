import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard() {
  return (
    <section className="px-4 py-16 md:px-4 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-normal text-center text-[#222227] font-sans ">
        My Projects
      </h2>
      <p className="font-normal  text-base text-[#6B6B6B] text-center mt-3 mb-8">
        A curated collection of my most impactful projects.
      </p>

      {/* Filters */}
      <ul className="grid items-center justify-center max-w-xs grid-cols-2 gap-2 mx-auto sm:grid-cols-2 sm:max-w-xs md:grid-cols-2 lg:flex lg:justify-center lg:gap-2">
        <li>
          <Link
            className="bg-[#B3B3B3]/30 py-2 px-4 rounded-xl block text-center whitespace-nowrap"
            href={"#"}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className="bg-[#B3B3B3]/30 py-2 px-4 rounded-xl block text-center whitespace-nowrap"
            href={"#"}
          >
            UI/UX
          </Link>
        </li>
        <li>
          <Link
            className="bg-[#B3B3B3]/30 py-2 px-4 rounded-xl block text-center whitespace-nowrap"
            href={"#"}
          >
            Web Design
          </Link>
        </li>
        <li>
          <Link
            className="bg-[#B3B3B3]/30 py-2 px-4 rounded-xl block text-center whitespace-nowrap"
            href={"#"}
          >
            App Design
          </Link>
        </li>
      </ul>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 my-16">
        <div className="w-full sm:w-[350px] md:w-[45%] lg:w-[30%]">
          <Link href={""}>
            <Image
              src={"/images/Rectangle1.svg"}
              alt="card"
              width={400}
              height={490}
              className="mx-auto transition duration-1000 rounded-lg hover:scale-105"
            />
          </Link>
          <p className="mt-5 mb-3 text-xl font-semibold text-gray-600 ">
            Web Design
          </p>
          <p className="text-[20px] font-normal font-[inter-tight] ">
            Air Calling Landing Page Design
          </p>
        </div>

        <div className="w-full sm:w-[350px] md:w-[45%] lg:w-[30%]">
          <Link href={""}>
            <Image
              src={"/images/Frame1.png"}
              alt="card"
              width={400}
              height={490}
              className="mx-auto transition-transform duration-1000 rounded-lg hover:scale-105"
            />
          </Link>
          <p className="mt-5 mb-3 text-xl font-semibold text-gray-600 ">
            Web Design
          </p>
          <p className="text-[20px] font-normal font-[inter-tight] ">
            Business Landing Page Design
          </p>
        </div>

        <div className="w-full sm:w-[350px] md:w-[45%] lg:w-[30%]">
          <Link href={""}>
            <Image
              src={"/images/Frame2.png"}
              alt="card"
              width={400}
              height={490}
              className="mx-auto transition-transform duration-1000 rounded-lg hover:scale-105"
            />
          </Link>
          <p className="mt-5 mb-3 text-xl font-semibold text-gray-600">
            Web Design
          </p>
          <p className="text-[20px] font-normal ">
            Ecom Web Page Design
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
