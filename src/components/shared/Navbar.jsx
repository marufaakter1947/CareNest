"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      setOpen(false);
    } catch {
      toast.error("Logout failed");
    }
  };

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
    <nav className="sticky top-0 z-50 bg-[#00563B] text-[#F9FAFB] shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/care.io-Logo.jpg"
              alt="CareNest Logo"
              width={36}
              height={36}
              className="rounded-full border-2 border-[#A7E3CF]"
            />
            <span className="text-2xl font-bold tracking-wide">
              Care<span className="text-[#A7E3CF]">Nest</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavItems />
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
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
              </>
            ) : (
              <div className="relative group">
                <Image
                  src={user.photoURL || "/images/default-avatar.png"}
                  alt="User Avatar"
                  width={38}
                  height={38}
                  className="rounded-full cursor-pointer border-2 border-[#A7E3CF]"
                />

                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
                  <p className="px-4 py-2 border-b font-semibold">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
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
            <div className="flex flex-col gap-4 mt-4 text-center">
              <NavItems />

              {!user ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="border border-[#A7E3CF] mx-6 py-2 rounded"
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
                </>
              ) : (
                <>
                  <p className="font-semibold">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 mx-6 py-2 rounded text-white"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
