import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Services() {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat h-full py-16  lg:px-20  max-[1024px]:px-0 max-[640px]-auto">
        
        <h2 className='text-4xl font-semibold text-center text-white font-[inter-tight]'>
          My Services
        </h2>

        <p className='text-2xl font-semibold text-center text-white font-[inter-tight] mt-4 mb-16 max-[640px]:text-xl'>
          I turn complex ideas into intuitive experiences.
        </p>

        <ul
          className='
            flex items-center justify-center gap-5

            max-[900px]:grid
            max-[900px]:grid-cols-2
            max-[900px]:gap-8
            max-[900px]:px-6

            max-[600px]:grid-cols-1
            max-[600px]:gap-6
          '
        >
          <li className="max-[600px]:mx-auto">
            <Link href={""}>
              <Image src={"/images/Frame59.svg"} alt='card' width={370} height={490} className='mx-auto'/>
            </Link>
          </li>

          <li className="max-[600px]:mx-auto">
            <Link href={""}>
              <Image src={"/images/Frame60.svg"} alt='card' width={370} height={490} className='mx-auto'/>
            </Link>
          </li>

          <li className="max-[600px]:mx-auto">
            <Link href={""}>
              <Image src={"/images/Frame61.svg"} alt='card' width={370} height={490} className='mx-auto'/>
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Services
