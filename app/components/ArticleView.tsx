import React from "react";
import Image from "next/image";

function ArticleView() {
  return (
    <section className="px-40">
      <div className="my-16 text-center ">
        <h3 className="font-normal text-2xl text-[#222227]">
          All you need to know about
        </h3>
        <h2 className="text-4xl font-normal text-[#222227] my-4">
          UI/UX Design
        </h2>
        <p className="text-sm font-normal text-[#6b6b6b] w-3xl m-auto">
          A work-in-progress guide and resources to everything you should know
          about User Interface Design (UI), User Experience Design (UX) and
          anything else related to the topic.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 mb-16">
          <Image
            src={"/images/ibrahim1.png"}
            alt="img"
            width={80}
            height={48}
            className="rounded-full "
          ></Image>

          <div className="text-start">
            <p className="text-sm font-medium text-[#222227]">
              Ibrahin Elgendy
            </p>

            <p className="text-sm font-normal text-[#6b6b6b]">
              Updated:Nov 24, 2025
            </p>
          </div>
        </div>
        <Image
          src={"/images/UXDesign.png"}
          alt="img"
          width={1100}
          height={540}
        ></Image>
      </div>
      <ul className="text-lg font-normal text-[#222227]/80">
        <li className="text-4xl text-[#222227] ">What is UI/UX Design?</li>
        <li className="mt-4 mb-12">
          {` UI and UX Design is the combination of both User Interface (UI) Design
          and User Experience (UX) Design. UI and UX Design are the two parts
          that make up a great product. They cannot live without each other,
          hence why they're called 'UI/UX'. Together, they make great products
          shine.`}
        </li>
        <li className="text-3xl text-[#222227]">
          What is User Experience (UX) Design?
        </li>
        <li className="my-4">
          {` User Experience design is the planning and creation of how a digital
          product works. It's the process of designing the entire user journey
          of how people interact with the product.`}
        </li>
        <li>
          Here are some useful resources on my 
          <span className="underline text-[#222227] text-lg">
            Resources
          </span>{" "}
          page. It is constantly being updated from time to time.
        </li>
        <li className="mt-4 mb-12 ">
          {` When a product's user experience is well-designed, you navigate
          through the product or service easily, without struggle or hesitation.
          Intuitively, you know where to click, and what are your next steps
          throughout the process of navigating a product. That's the power of
          good user experience design.`}
        </li>
        <li className="text-3xl text-[#222227]">
          What is User Interface (UI) Design?
        </li>
        <li className="my-4">
          {`User Interface design is designing how the interfaces of digital
          products looks and feels like. It's the visual and interactive
          elements that people see and touch when they use a digital product,
          from the interface of an ordering kiosk at McDonald's, to the
          dashboard of a car. In short, user interfaces are the point of
          interaction between people and computers.`}
        </li>
        <li>
          Tiny UI like buttons, forms, search bar, pop ups and hover animations
          are part of user interface design.
        </li>
        <li className="mt-4 mb-12">
          Products with good UI are easy to use. The visual aspects of the
          product does not feel overwhelming. The design of the interface is
          modern, intuitive and delightful.
        </li>
        <li className="text-4xl text-[#222227]">UX vs UI design</li>
        <li className="text-2xl text-[#222227] my-4">The Similarities</li>
        <li>
          UI and UX design are both about creating a good user experience for
          the end users of a product. While both design UI and UX can be seen in
          the same context, they are different.
        </li>
        <li className="text-2xl my-4 text-[#222227]">The Differences</li>
        <li className="flex gap-1">
          <span className="text-xl">1.</span>
          <span>
            UI/UX designers are responsible for the look and feel of a product,
            while UI/UX developers are responsible for the functionality of a
            product.
          </span>
        </li>
        <li className="flex gap-1 my-3">
          <span className="text-xl">2.</span>
          <span>
            {`UI/UX designers usually have a background in graphic design or art, while UI/UX developers have a background in
              computer science. (However, you don't need a degree to become a UI/UX designer)`}
          </span>
        </li>
        <li className="flex gap-1">
          <span className="text-xl">3.</span>
          <span>
            UI/UX designers usually work with mockups and prototypes, while
            UI/UX developers usually work with code.
          </span>
        </li>
        <li className="flex gap-1 my-3">
          <span className="text-xl">4.</span>
          <span>
            UI/UX designers often report to project managers or product
            managers, while UI/UX developers often report to software architects
            or engineering leads.
          </span>
        </li>
        <li className="text-3xl text-[#222227] mt-12 mb-4">
          Which one is more important: UI or UX design?
        </li>
        <li>
          Humans are visual creatures. Good UI design is what attracts us to use
          a product in the first place, while UX design ensures they stay
          engaged.
        </li>
        <li className="mt-4 mb-16">
          {` Having said that, it's up to you which one you choose to focus on
          more, but make sure you don't neglect the other. Good UI/UX design
          goes hand in hand - you need both to create a successful product.`}
        </li>
        <li className="text-3xl text-[#222227]">
          So, what do UI/UX designers do?
        </li>
        <li className="my-4">
          UI/UX designers are experts at both UX and UI design.
        </li>
        <li>
          UX designers create the flow of how users interact with a digital
          product. They have a good understanding of human psychology and how
          people interact with websites and apps. Based on the problem they aim
          to solve, they map out user flows, create wireframes, build prototypes
          and validate the designs by testing it with users.
        </li>
        <li className="my-4">
          UI designers determine how information should be arranged based off of
          research done on visual patterns and hierarchies.
        </li>
        <li>
          Good UI/UX designers are able to create designs that are both visually
          appealing and functional.
        </li>
        <li className="text-4xl text-[#222227] mt-12 mb-4">
          Are UI/UX designers the same as Graphic Designers?
        </li>
        <li>
          In short, UI design, UX design and graphic design are not the same.
          Both UI and graphic designers need to have a good understanding of
          typography, color theory, and layout principles.
        </li>
        <li className="my-4">
          Graphic designers are responsible for the visual elements of a
          product, such as logos, illustrations, and typography. They typically
          possess strong skills in graphic design software.
        </li>
        <li>
          UI/UX designer is responsible for the overall look and feel of the
          product, as well as how users interact with it, and they must have a
          strong understanding of both design and user experiences.
        </li>
        <li className="mt-4 mb-12">
          According to PayScale and{" "}
          <span className="underline text-[#222227] text-lg">
            Interaction Design Foundation
          </span>
          , the average salary of UI/UX designers are typically higher than
          graphic designers.
        </li>
      </ul>
      <div>
        <Image
          src={"/images/source.png"}
          alt="img"
          width={1100}
          height={540}
        ></Image>
        <p className="mt-3 mb-12 text-sm">
          Source: Interaction Design Foundation
        </p>
        <ul className="text-lg font-normal text-[#222227]/80">
          <li className="text-4xl text-[#222227]">
            Are UI/UX designers the same as UI/UX developers?
          </li>
          <li className="my-5">
            Short answer is no, the two professions are different.
          </li>
          <li className="mb-12">
            The roles of a UI/UX designer and UI/UX developer can overlap
            depending on the company and the project. To give you an overview,
            here are the differences:
          </li>
          <ul>
            <li className="ml-4 list-decimal">
              UI/UX designers are responsible for the look and feel of a
              product, while UI/UX developers are responsible for the
              functionality of a product.
            </li>
            <li className="my-4 ml-4 list-decimal">
              {`UI/UX designers usually have a background in graphic design or art,
            while UI/UX developers have a background in computer science.
            (However, you don't need a degree to become a UI/UX designer)`}
            </li>
            <li className="ml-4 list-decimal">
              UI/UX designers usually work with mockups and prototypes, while
              UI/UX developers usually work with code.
            </li>
            <li className="my-4 ml-4 list-decimal">
              UI/UX designers often report to project managers or product
              managers, while UI/UX developers often report to software
              architects or engineering leads.
            </li>
          </ul>
        </ul>
      </div>
      <div className="text-lg font-normal text-[#222227]/80">
        <h3 className="text-4xl text-[#222227] mt-12 mb-4">
          The UI/UX design process
        </h3>
        <p>
          With the growing popularity of UX design, there is often confusion
          about what exactly it entails. UI and UX design is a process that
          encompasses the entire user experience, from how a product looks to
          how it feels.
        </p>
        <p className="mt-3 mb-12">
          {` I've made a ~12 minute video on a step by step explanation of the full
          UX design process. It's free to watch.`}
        </p>
        <Image
          src={"/images/Figure.png"}
          alt="img"
          width={1100}
          height={540}
        ></Image>
        <h3 className="text-4xl text-[#222227] mt-12 mb-4">
          Does UI/UX design involve coding?
        </h3>
        <p>
          A career in UI or UX design can be extremely rewarding, both
          financially and personally. (I could vouch for this!)
        </p>
        <p className="my-4">
          UI and UX Designers do not need to code, though having technical
          skills is a plus to design better digital products.
        </p>
        <p>
          As the user interface and user experience of many digital products
          have a major impact on customer satisfaction, designers who specialise
          in these areas are in high demand. While there is no one-size-fits-all
          path to becoming a UI or UX designer, there are a few things that can
          give you a leg up in the job market.
        </p>
        <p className="my-4">
          {`Here's the roadmap I wish I had when I started out.`}{" "}
        </p>
        <Image
          src={"/images/source1.png"}
          alt="img"
          width={1100}
          height={540}
        ></Image>
        <h3 className="text-2xl text-[#222227] mt-12 mb-4">
          How I became a UI/UX designer in 3 months with no degree and no
          experience
        </h3>
        <p>
          Throughout my journey, I am mostly self-taught, learning all that I
          know today from free resources on Google and YouTube. This may sound
          cheesy, but if I can do it, I believe you can too.
        </p>
        <p className="my-4">
          The journey is never easy, it could take you more than 3 months to
          become a UI/UX designer. If you love what you do, it is going to be
          worthwhile.
        </p>
        <p>{`Here's my (sappy) story:`} </p>
        <Image
          src={"/images/source2.png"}
          alt="img"
          width={1100}
          height={540}
          className="my-12 rounded-3xl"
        ></Image>
        <h3 className="text-3xl text-[#222227]">
          What are the key skills of a UI/UX designer?
        </h3>
        <p className="my-4">
          This list is non-exhaustive, but here are a few essential skills that
          you should equip yourself with if you want to be a UI/UX designer:
        </p>
        <ul>
          <li className="list-disc list-inside">
            Strong visual design skills to create designs that are both
            user-friendly and aesthetically pleasing.
          </li>
          <li className="my-4 list-disc list-inside">
            Good problem-solving skills in order to be able to identify user
            needs and design solutions that meet those needs.
          </li>
          <li className="ml-[17px] list-disc list-outside">
            Good communication skills in order to be able to effectively
            collaborate with other designers/team members and present ideas
            clearly.
          </li>
          <li className="my-4 list-disc list-inside">
            Be proactive and stay up-to-date on current trends to stay relevant.
          </li>
          <li className="list-disc list-inside">
            Strong understanding of human-computer interaction and how people
            interact with digital products.
          </li>
          <li className="my-4 list-disc list-inside">
            Be proficient in using design tools like Figma.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ArticleView;

