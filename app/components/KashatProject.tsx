import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectHighlights = [
  {
    label: "Client Name",
    value: "Kashat",
    icon: "/cases/Vector.svg",
  },
  {
    label: "Project Type",
    value: "Fintech",
    icon: "/cases/vector1.svg",
  },
  {
    label: "Project Duration",
    value: "6 months / JAN 2020 ",
    icon: "/cases/vector2.svg",
  },
];

const goals = [
  "Unify product presentation under one visual identity.",
  "Simplify steps for loan application and onboarding.",
  "Build an informative structure for investors, media, and users.",
  "Reflect Kashat’s leadership in Egypt’s fintech ecosystem.",
];

function KashatProject() {
  return (
    <section className="bg-[#f1f1f1] px-4 py-12 sm:px-6 md:px-10 lg:px-14 xl:px-45 ">
      <div className="flex flex-col items-center max-w-6xl mx-auto mb-24 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
          Kashat
        </h2>
        <p className="mb-10 max-w-4xl text-base font-normal text-[#222227] sm:text-lg md:text-xl lg:text-2xl">
          A digital-first financial platform offering instant nano-loans to
          empower individuals and small businesses across Egyp
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
        src={"/cases/k1.svg"}
        alt="k1"
        width={1000}
        height={599}
        className="mb-18"
      ></Image>
      <div className="space-y-6 text-[#101828]">
        <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
          Brief
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          Kashat is MENA’s first nano-financial service, enabling users to
          access micro-loans instantly through a simple and secure mobile
          experience. The platform bridges the gap between financial
          institutions and everyday users, building trust through clarity and
          speed.”
        </p>
      </div>

      <div className="space-y-6 text-[#101828]">
        <h3 className="mt-8 mb-12 text-2xl font-semibold sm:text-3xl md:text-4xl">
          Challenge
        </h3>
        <p className="text-base sm:text-lg md:text-xl">
          Financial awareness and digital trust were key challenges in Egypt’s
          growing fintech market.
        </p>
        <p className="text-base sm:text-lg md:text-xl">
          The experience had to educate first-time users while keeping the
          process fast and intuitive.”
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl mt-12 mb-8">
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
      <Image
        src={"/cases/k2.svg"}
        alt="k2"
        width={1000}
        height={599}
        className="mb-18 mt-18"
      ></Image>
      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
          User Personas
        </h3>
        <p className="text-base text-[#101828] sm:text-lg md:text-xl">
          Understanding our key user groups helps us design experiences that
          truly resonate with their needs and motivations.
        </p>
        <Image
          src={"/cases/k3.svg"}
          alt="k3"
          width={1000}
          height={599}
          className="mt-12 mb-18"
        ></Image>
      </div>
      <div className="max-w-6xl mx-auto mt-16 space-y-6 sm:mt-20 md:mt-24">
        <h3 className="text-2xl font-semibold text-[#101828] sm:text-3xl md:text-4xl">
          Design System
        </h3>
        <p className="text-base text-[#101828] sm:text-lg md:text-xl my-12">
          <span className="font-medium text-[#101828]">Colors:</span>
          Kashat’s visual identity uses a vibrant yet trustworthy palette,
          blending energy and credibility. The goal was to reflect financial
          confidence while staying friendly and accessible for all users.
        </p>
        <Image
          src="/cases/k4.svg"
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
          src="/cases/k5.svg"
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
        <ul className="space-y-4 text-base text-[#101828] sm:text-lg md:text-xl mt-12 mb-8">
          <li className="ml-5 list-disc list-outside ">
            Competitive benchmarking across regional fintech products revealed a
            clear need for faster onboarding, localized language support, and
            transparent repayment communication.
          </li>
          <li className="ml-5 list-disc list-outside">
            User interviews showed that most users felt anxiety around loan
            clarity, especially about hidden fees and repayment timelines.
          </li>
          <li className="list-disc list-inside ">
            Behavioral data confirmed that trust and simplicity were the top
            factors influencing repeated borrowing.
          </li>
          <li className="list-disc list-inside ">
            Users valued clear Arabic design, real examples, and visual
            reassurance (like showing the approval progress).
          </li>
        </ul>
        <Image
          src="/cases/Frame17.svg"
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
        <Image
          src="/cases/k6.svg"
          alt="Final screens"
          width={1100}
          height={700}
          className="object-cover w-full h-auto rounded-2xl"
        />
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

export default KashatProject;
