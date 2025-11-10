"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        </div>

        {/* Navigation */}
        <nav
          className={`hidden md:flex gap-6 transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#tours">Tour List</Link>
          <Link href="#tickets">My Ticket</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/auth/login"
            className="px-4 py-2 bg-primary text-white rounded-full"
          >
            Log In
          </Link>
          <Link
            href="/auth/register"
            className={`px-4 py-2 rounded-full border ${
              scrolled ? "border-gray-700 text-gray-700" : "border-white text-white"
            }`}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? (
            <X className={scrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden border-t px-4 py-3 transition-all duration-300 ${
            scrolled ? "bg-white text-gray-800" : "bg-white/20 backdrop-blur-md text-white"
          }`}
        >
          <nav className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#tours">Tour List</Link>
            <Link href="#contact">Contact</Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="/auth/login">Log In</Link>
              <Link href="/auth/register">Sign In</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
