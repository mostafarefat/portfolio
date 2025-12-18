"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu , X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ------------ NAVBAR ------------ */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 pt-0 bg-white shadow-lg lg:mx-10 md:px-6 lg:bg-transparent lg:shadow-none lg:pt-3">
        <Image
          src={"/images/Vectorized.svg"}
          alt="logo"
          width={65}
          height={60}
        />

        {/* Desktop Links */}
        <div className="hidden  md:hidden lg:flex  bg-[#B3B3B3]/15 font-medium  text-[#222222] text-sm p-3 rounded-xl gap-6 ">
          <Link href={"/"} >Home</Link>
          <Link href={"/work"} >Work</Link>
          <Link href={"/blog"} >Blog</Link>
          <Link href={"/about"} >
            About
          </Link>
          <Link href={"/notebook"} >NoteBook</Link>
          <Link href={"/contact"} >Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-7 h-7 text-[#222]" />
        </button>
      </nav>

      {/* ------------ OVERLAY ------------ */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ------------ SIDEBAR ------------ */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300  
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="mb-6"
          onClick={() => setOpen(false)}
        >
          <X className="w-7 h-7 text-[#222]" />
        </button>

        {/* Links */}
        <div className="flex flex-col gap-4 text-base font-normal text-[#222222]/90 font-[roboto]  ">
          <Link href={"/"} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href={"/work"} onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href={"/blog"} onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href={"/about"} className="flex items-center gap-1" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href={"/notebook"} className="flex items-center gap-1" onClick={() => setOpen(false)}>
            Notebook
          </Link>
            <Link href={"/contact"} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
