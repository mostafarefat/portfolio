import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ArchiveGallery from './ArchiveGallery'
import HeroSection from './HeroSection'
import { ArrowRight } from "lucide-react";
import GotAproject from './GotAproject';

const cases = [
  {
    id: 1,
    img: "/images/case1.png",
    title: "Afeed platform",
    text: "Designing  EdTech Social-driven Learningexperience for Arabian Creators with users.",
    button: "Read the case study",
  },
  {
    id: 2,
    img: "/images/case2.png",
    title: "carly platform",
    text: "Carly is a platform/brand focused on car sales or automotive services in the Saudi market",
    button: "Read the case study",
  },
  {
    id: 3,
    img: "/images/case3.png",
    title: "Offer mazad",
    text: "Streamlining operations for a cutting-edge car auction app.",
    button: "Read the case study",
  },
  {
    id: 4,
    img: "/images/case4.png",
    title: "Evelife app",
    text: "EveLife is a health app offering personalized insights and support for women.",
    button: "Read the case study",
  },
];

const caseTow = [
  {
    id: 5,
    img: "/images/case5.png",
    title: "Wazna app",
    text: "A culturally  platform for nutrition, fitness,and lifestyle designed for the MENA region",
    button: "Sneak peek",
  },
  {
    id: 6,
    img: "/images/case6.png",
    title: "Sideup platform",
    text: "Sideup Platform links e-commerce businesses with shipping providers.",
    button: "Sneak peek",
  },
  {
    id: 7,
    img: "/images/case7.png",
    title: "Medigo app",
    text: "Introducing a groundbreaking medical app tailored for the MENA region, focusing on personalized health management, booking lab tests, and wellness resources.",
    button: "Sneak peek",
  },
];

function CaseStudiesList() {
  return (
    <div className="px-2 md:px-10 lg:px-20">
      
      <HeroSection/>

      {/* Case Studies */}
      <div className="px-2 md:px-2 lg:px-20 py-36">
        <h2 className="font-[inter-tight] font-semibold text-3xl sm:text-4xl text-[#222227]">
          Case Studies
        </h2>

        <p className="font-[satoshi] text-sm text-[#6B6B6B] max-w-[360px] mb-5 mt-4">
          In the past 2 years, {`I've`} designed consumer-facing products,
          business-facing products and internal tools for brands worldwide. New
          case studies coming soon.
        </p>

        {/* Responsive Grid */}
        <div
          className="grid grid-cols-1 gap-10 md:grid-cols-2"
        >
          {/* First Column */}
          <div className="space-y-12">
            {cases.map((item) => (
              <Link 
                key={item.id}
                href={`/cases/${item.id}`}
                className="block"
              >
                <div className="space-y-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />

                  <p className="font-[satoshi] text-sm text-[#6B6B6B]">{item.title}</p>
                  <h3 className="font-[inter-tight] font-semibold text-lg sm:text-2xl text-[#222227]">
                    {item.text}
                  </h3>

                  <button className="font-[satoshi] text-sm text-[#222227] flex items-center gap-1">
                    {item.button}
                    <ArrowRight className="w-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Second Column */}
          <div className="space-y-12">
            {caseTow.map((item) => (
              <Link 
                key={item.id}
                href={`/cases/${item.id}`}
                className="block"
              >
                <div className="space-y-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={588}
                    height={388}
                    className="w-full h-auto rounded-xl"
                  />

                  <p className="font-[satoshi] text-sm text-[#6B6B6B]">{item.title}</p>
                  <h3 className="font-[inter-tight] font-semibold text-lg sm:text-2xl text-[#222227]">
                    {item.text}
                  </h3>

                  <button className="font-[satoshi] text-sm text-[#222227] flex items-center gap-1">
                    {item.button}
                    <ArrowRight className="w-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ArchiveGallery/>
      <GotAproject/>
    </div>
  )
}

export default CaseStudiesList
