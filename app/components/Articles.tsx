import React from "react";
import Link from "next/link";
import Image from "next/image";

function Articles() {
  return (
    <section className="px-20 py-16 max-[1024px]:px-10 max-[640px]:px-5 ">
      {/* TEXT */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-normal font-sans text-[#222227]">
          Articles
        </h2>

        <p className="font-normal text-center font-sans text-base text-[#6B6B6B] my-5">
          Practical tips and resources on UI/UX Design & Productivity.
        </p>
      </div>

      {/* CARDS */}
      <ul className="grid grid-cols-1 gap-6 px-0 mb-20 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <Link href="/article">
            <Image
              src="/images/Component1.png"
              alt="card"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mx-auto"
            />
          </Link>
        </li>

        <li>
          <Link href="/article">
            <Image
              src="/images/Component2.png"
              alt="card"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mx-auto"
            />
          </Link>
        </li>

        <li>
          <Link href="/article">
            <Image
              src="/images/Component3.png"
              alt="card"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto mx-auto"
            />
          </Link>
        </li>
      </ul>

      {/* FOOTER QUOTE */}
      <div className="space-y-4 text-center">
        <p className="font-normal font-[satoshi] text-base text-[#6B6B6B] max-[480px]:text-lg">
          Thanks for dropping by! <br />I hope you find something useful here.
        </p>

        <p className="font-[caveat] text-2xl text-[#222227] max-[480px]:text-2xl mark">
          —Ebrahim Elgendy
        </p>
      </div>
    </section>
  );
}

export default Articles;
