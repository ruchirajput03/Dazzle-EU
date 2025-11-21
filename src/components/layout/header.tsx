"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TextAlignJustify } from 'lucide-react';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white fixed w-full top-0 left-0 z-100 ">
      <div className="lg:px-[80px] xl:py-[15px] py-[10px] px-[20px]">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-start">
            <Image
              src="/logo.png"
              width={1080}
              height={1080}
              alt="Logo"
              className="cursor-pointer lg:w-[200px] w-[110px]  "
              
              priority
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center text-[14px] font-[md]  space-x-10">
            <Link
              href="/"
              className=" !text-[#141414] hover:text-gray-900  !no-underline"
            >
              Home
            </Link>
            <Link
              href="#"
              className=" !text-[#141414] hover:text-gray-900  !no-underline"
            >
              Company
            </Link>
            <Link
              href="/service"
              className=" !text-[#141414] hover:text-gray-900 !no-underline"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className=" !text-[#141414] hover:text-gray-900 !no-underline"
            >
              Our Presence
            </Link>
            <Link
              href="#"
              className=" !text-[#141414] hover:text-gray-900 !no-underline"
            >
              Portfolio
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-black text-white px-6 py-2.5 text-[14px] hover:bg-gray-800 transition">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black "
            onClick={() => setMenuOpen(!menuOpen)}
          >
           <TextAlignJustify/>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 text-[16px]">
            <Link href="#" className="!text-[#141414] !no-underline">Company</Link>
            <Link href="#" className="!text-[#141414] !no-underline">Solutions</Link>
            <Link href="#" className="!text-[#141414] !no-underline">Our Presence</Link>
            <Link href="#" className="!text-[#141414] !no-underline">Home</Link>
            <Link href="#" className="!text-[#141414] !no-underline">Portfolio</Link>

            <button className="bg-black text-white px-4 py-2 text-[15px] w-full">
              Contact Us
            </button>
          </div>
        )}
        </div>
    
    </header>
  );
}
