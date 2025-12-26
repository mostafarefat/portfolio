"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ------------ NAVBAR ------------ */}
      <nav className="fixed top-0 left-0 right-0 z-60 flex items-center justify-between px-6 pt-0 bg-white  lg:mx-10 md:px-6 lg:bg-transparent lg:shadow-none lg:pt-3">
        <Link href={"/"}>
          <Image
            src={"/images/Vectorized.svg"}
            alt="logo"
            width={65}
            height={60}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden  md:hidden lg:flex  bg-[#B3B3B3]/15 font-medium  text-[#222222] text-sm py-1.5 px-2 rounded-xl mos gap-2 ">
          <Link href={"/"} className={`mo ${pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link
            href={"/work"}
            className={`mo ${pathname === "/work" ? "active" : ""}`}
          >
            Work
          </Link>
          <Link
            href={"/blog"}
            className={`mo ${pathname === "/blog" ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            href={"/about"}
            className={`mo ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href={"/notebook"}
            className={`mo ${pathname === "/notebook" ? "active" : ""}`}
          >
            NoteBook
          </Link>
          <Link
            href={"/contact"}
            className={`mo ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <Menu className="w-7 h-7 text-[#222]" />
        </button>
      </nav>

      {/* ------------ OVERLAY ------------ */}
      {open && (
        <div
          className="fixed inset-0 z-40 "
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ------------ DROPDOWN MENU (Top to Bottom) ------------ */}
      <div
        className={`lg:hidden fixed top-13 rounded-b-4xl left-0 right-0 bg-white shadow-xl z-50 p-6 transform transition-transform duration-500
          ${open ? "translate-y-0 " : "-translate-y-full"}`}
      >
        {/* Close Button */}
        <button className="mb-6" onClick={() => setOpen(false)}></button>

        {/* Links */}
        <div className="flex flex-col gap-8 text-xl font-semibold  text-[#222222]/90 font-[roboto]  ">
          <Link
            href={"/"}
            onClick={() => setOpen(false)}
            className={pathname === "/" ? "text-black" : ""}
          >
            Home
          </Link>
          <Link
            href={"/work"}
            onClick={() => setOpen(false)}
            className={pathname === "/work" ? "text-black" : ""}
          >
            Work
          </Link>
          <Link
            href={"/blog"}
            onClick={() => setOpen(false)}
            className={pathname === "/blog" ? "text-black" : ""}
          >
            Blog
          </Link>
          <Link
            href={"/about"}
            className={`flex items-center gap-1 ${
              pathname === "/about" ? "text-black" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href={"/notebook"}
            className={`flex items-center gap-1 ${
              pathname === "/notebook" ? "text-black" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            Notebook
          </Link>
          <Link
            href={"/contact"}
            onClick={() => setOpen(false)}
            className={pathname === "/contact" ? "text-black" : ""}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
