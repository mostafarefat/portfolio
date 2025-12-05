import React from 'react'
import Image from 'next/image'

function ArchiveGallery() {
  return (
    <div className="mt-20 px-2 md:px-10 lg:px-20">
      <p className="text-base font-[satoshi] text-[#6B6B6B]">
        An archive of products I’ve designed.
      </p>

      <h3 className="text-3xl sm:text-4xl font-[inter-tight] font-semibold text-[#222227] mb-7">
        Effective, polished designs that convert.
      </h3>

      {/* FIRST ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <Image
          src="/images/macbook.png"
          alt="img"
          width={785}
          height={615}
          className="w-full h-auto"
        />
        <Image
          src="/images/screen1.png"
          alt="img"
          width={385}
          height={615}
          className="w-full h-auto"
        />
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <Image src="/images/screen2.png" alt="img" width={385} height={414} className="w-full h-auto" />
        <Image src="/images/screen3.png" alt="img" width={385} height={414} className="w-full h-auto" />
        <Image src="/images/screen4.png" alt="img" width={385} height={414} className="w-full h-auto" />
      </div>

      {/* THIRD ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 items-center">
        <p className="font-[satoshi] text-2xl text-[#494949] leading-relaxed max-w-[500px]">
          From consumer-facing apps with millions of users, to web apps for
          businesses of all sizes—I’ve done it all. This means I can quickly
          adapt and efficiently solve your product’s challenges through high
          quality designs.
        </p>

        <Image
          src="/images/screen5.png"
          alt="img"
          width={790}
          height={615}
          className="w-full h-auto"
        />
      </div>

      {/* LAST BLOCK */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
        <div>
          <Image src="/images/screen6.png" alt="img" width={400} height={615} className="w-full h-auto mb-4" />
          <Image src="/images/screen7.png" alt="img" width={400} height={300} className="w-full h-auto" />
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Image src="/images/screen8.png" alt="img" width={385} height={300} className="w-full h-auto" />
            <Image src="/images/screen9.png" alt="img" width={385} height={300} className="w-full h-auto" />
          </div>

          <Image
            src="/images/screen10.png"
            alt="img"
            width={820}
            height={615}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ArchiveGallery;
