import React from "react";
import Image from "next/image";

function ArticleList() {
  return (
    <div>
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
    </div>
  );
}

export default ArticleList;
