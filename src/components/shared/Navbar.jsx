"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  const NavItems = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          onClick={() => setOpen(false)}
          className={`hover:text-[#A7E3CF] transition ${
            pathname === link.path ? "text-[#A7E3CF] font-semibold" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="bg-[#00563B] text-[#F9FAFB] shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/care.io-Logo.jpg"
              alt="CareNest Logo"
              width={32}
              height={42}
              className="rounded-full border-2 border-[#A7E3CF]"
            />
            <span className="text-2xl font-bold tracking-wide">
              Care<span className="text-[#A7E3CF]">Nest</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavItems />
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="border border-[#A7E3CF] px-4 py-1.5 rounded hover:bg-[#A7E3CF] hover:text-[#003B29] transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#A7E3CF] text-[#003B29] px-4 py-1.5 rounded hover:bg-[#8fd9c0] transition"
            >
              Register
            </Link>
          </div>

        
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#00563B] pb-4">
            <div className="flex flex-col gap-4 mt-3 text-center">
              <NavItems />
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="border border-[#A7E3CF] mx-6 py-2 rounded hover:bg-[#A7E3CF] hover:text-[#003B29]"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="bg-[#A7E3CF] text-[#003B29] mx-6 py-2 rounded"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
