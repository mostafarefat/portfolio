import React from "react";

function NoteBook() {
  return (
    <section className="max-w-2xl px-5 mx-auto sm:px-6 lg:px-0">
      
      {/* HEADER */}
      <div className="pt-16 pb-16 text-center sm:pt-20 sm:pb-24">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-[inter-tight] text-[#222227]">
          Welcome to my mind garden
        </h3>
        <p className="font-normal font-[satoshi] text-sm sm:text-base mt-3 text-[#6B6B6B]">
          Updated: 25 Feb 2021, 2.44AM (Malaysia Time)
        </p>
      </div>

      {/* INTRO TEXT */}
      <p className="font-normal font-[satoshi] text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
        {`Hello! You're now in my digital garden, a public notebook where I freely
        explore ideas, thoughts, resources, questions, unknowns, and stuff I
        find useful or interesting. This garden embraces imperfection and is
        filled with interconnected ideas where it will change, evolve, and grow
        over time.`}
      </p>

      <p className="font-normal font-[satoshi] text-sm sm:text-base my-5 text-[#6B6B6B]">
        {`It is unorganized on purpose—because what's life without a little chaos?`}
      </p>

      <p className="font-normal font-[satoshi] text-sm sm:text-base text-[#6B6B6B]">
        Start exploring with one of my notes below.
      </p>

      {/* CONTENT */}
      <div className="mt-12">
        <div className="flex flex-col gap-10 md:flex-row md:gap-6">
          
          {/* LEFT */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-medium text-[#222227]">
              Creativity
            </h3>
            <hr className="border-[#e0e0e0] my-4" />

            <ul className="text-sm sm:text-base font-medium text-[#222227] space-y-1 mb-10">
              <li>Quantity Leads to Quality</li>
              <li>Multiple Side Projects Yields Creativity</li>
              <li>To Be Creative Is to Write</li>
              <li>Everyone needs a side project</li>
              <li>The Future Belongs to Deep Generalists</li>
              <li>Creation Is Permissionless</li>
              <li>There Are No Original Ideas</li>
              <li>Creativity</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-medium text-[#222227]">
              Bookshelf
            </h3>
            <hr className="border-[#e0e0e0] my-4" />
            <p className="text-sm sm:text-base font-medium text-[#222227]">
              Bookshelf
            </p>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-medium text-[#222227]">
              Mental Models
            </h3>
            <hr className="border-[#e0e0e0] my-4" />
            <ul className="text-sm sm:text-base font-medium text-[#222227] space-y-1">
              <li>Regret Minimisation</li>
              <li>Pareto Principle</li>
              <li>Local or Global</li>
              <li>First Principles</li>
              <li>Mental Models</li>
            </ul>
          </div>

        </div>

        {/* FOOTER SECTION */}
        <div className="mt-16">
          <ul>
            <li className="text-xl sm:text-2xl font-bold text-[#222227]">
              Why am I doing this
            </li>

            <li className="font-normal font-[satoshi] text-sm sm:text-base mt-6 text-[#6B6B6B]">
              {`I believe the best way to learn is to learn, share and exchange
              ideas in public because we're all constantly a work-in-progress.
              My main purposes are:`}
            </li>

            <li className="font-normal font-[satoshi] text-sm sm:text-base my-6 text-[#6B6B6B] leading-relaxed">
              - To practice mindful learning <br />
              - To connect my learnings and thoughts that lead to new ideas <br />
              - To give back by helping others learn
            </li>

            <li className="font-normal font-[satoshi] text-base text-[#6B6B6B]">
              For more info, you may read the{" "}
              <span className="font-medium text-[#222227]">
                Terms of Service
              </span>{" "}
              of this garden.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NoteBook;
