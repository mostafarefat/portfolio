"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Hero() {
  const paragraphRefs = useRef<
    (HTMLParagraphElement | HTMLDivElement | null)[]
  >([]);
  const [visibleParagraphs, setVisibleParagraphs] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    let innerRafId: number | null = null;

    // Function to get responsive observer options based on screen size
    const getObserverOptions = () => {
      const width = window.innerWidth;

      // Tailwind breakpoints: sm: 640px, md: 768px, lg: 1024px
      if (width >= 1024) {
        // Large screens (lg and above)
        return {
         
          rootMargin: "0px 0px -300px 0px",
        };
      } else if (width >= 768) {
        // Medium screens (md)
        return {
         
          rootMargin: "0px 0px -800px 0px",
        };
      } else {
        // Small screens (sm and below)
        return {
          
          rootMargin: "0px 0px -580px 0px",
        };
      }
    };

    // Function to setup observers
    const setupObservers = () => {
      // Disconnect existing observers
      observers.forEach((observer) => observer.disconnect());
      observers.length = 0;

      const options = getObserverOptions();

      paragraphRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            setVisibleParagraphs((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                // Add paragraph to visible set when it enters the viewport
                newSet.add(index);
              } else {
                // Remove paragraph from visible set when it leaves the viewport
                newSet.delete(index);
              }
              return newSet;
            });
          });
        }, options);

        observer.observe(ref);
        observers.push(observer);
      });
    };

    // Use requestAnimationFrame to ensure DOM is ready and refs are populated
    const rafId = requestAnimationFrame(() => {
      // Double RAF to ensure layout is complete
      innerRafId = requestAnimationFrame(() => {
        setupObservers();
      });
    });

    // Handle window resize to adjust observer settings for different screen sizes
    let resizeTimeout: NodeJS.Timeout | null = null;
    const handleResize = () => {
      // Debounce resize events
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setupObservers();
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Cleanup function
    return () => {
      cancelAnimationFrame(rafId);
      if (innerRafId !== null) {
        cancelAnimationFrame(innerRafId);
      }
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const isVisible = (index: number) => visibleParagraphs.has(index);

  return (
    <section className="overflow-hidden">
      <div className="px-4 py-6 md:px-12 lg:px-20 lg:mt-30 ">
        {/* --- Heading inline --- */}
        <div className="flex items-center gap-4 mb-4 justify-cente lg:justify-start">
          <Image
            src="/images/home.svg"
            alt="Home Icon"
            width={70}
            height={80}
            className="w-8 md:w-14 lg:w-[70px]"
          />

          <h2 className="text-[22px] font-normal md:text-5xl lg:text-6xl xl:text-[80px] whitespace-nowrap font-sans ">
            Hi, I&apos;m Ebrahim Elgendy
          </h2>

          <Image
            src="/images/img.svg"
            alt="Avatar Icon"
            width={110}
            height={80}
            className="mt-2 w-14 md:w-20 lg:w-40"
          />
        </div>

        {/* --- All text in ONE line --- */}
        <div className="flex flex-wrap justify-start lg:justify-start items-center gap-4 font-normal text-[25px] md:text-5xl lg:text-[60px] xl:text-[78px] leading-tight font-sans">
          <p
            ref={(el) => {
              paragraphRefs.current[0] = el;
            }}
            className="transition-all duration-1000 ease-in-out whitespace-nowrap"
            style={{
              color: "transparent",
              backgroundImage: isVisible(0)
                ? "linear-gradient(to bottom, black, black)"
                : "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.15))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Product Designer & Solopreneur
          </p>

          <div
            ref={(el) => {
              paragraphRefs.current[1] = el;
            }}
            className="flex items-center gap-2 transition-all duration-1000 ease-in-out whitespace-nowrap"
            style={{
              color: "transparent",
              backgroundImage: isVisible(1)
                ? "linear-gradient(to bottom, black, black)"
                : "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.15))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            <Image
              src="/images/star.svg"
              alt="Star Icon"
              width={70}
              height={70}
              className="w-8 md:w-12 lg:w-[60px]"
            />
            Crafting clean, delightful user
          </div>

          <div
            ref={(el) => {
              paragraphRefs.current[2] = el;
            }}
            className="flex items-center gap-2 transition-all duration-1000 ease-in-out whitespace-nowrap"
            style={{
              color: "transparent",
              backgroundImage: isVisible(2)
                ? "linear-gradient(to bottom, black, black)"
                : "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.15))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            experiences
            <Image
              src="/images/blan.svg"
              alt="Balloon Icon"
              width={70}
              height={70}
              className="w-8 md:w-12 lg:w-[60px]"
            />
            Helping people
          </div>

          <div
            ref={(el) => {
              paragraphRefs.current[3] = el;
            }}
            className="flex items-center gap-2 transition-all duration-1000 ease-in-out whitespace-nowrap"
            style={{
              color: "transparent",
              backgroundImage: isVisible(3)
                ? "linear-gradient(to bottom, black, black)"
                : "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.15))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            to increase their value
            <Image
              src="/images/party.svg"
              alt="Party Icon"
              width={70}
              height={70}
              className="w-8 md:w-12 lg:w-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Main photo */}
      <Image
        src="/images/ibrahim1.png"
        alt="Main Hero Image"
        width={1440}
        height={500}
        className="
    rounded-[40px] md:rounded-[60px] lg:rounded-[100px]
    h-auto mt-20 
    object-cover 
    object-[center_20%]
  "
      />
    </section>
  );
}

export default Hero;
