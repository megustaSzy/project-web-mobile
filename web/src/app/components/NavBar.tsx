"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="LamiGo" width={40} height={40} />
          <span className="font-semibold text-lg">LamiGo</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#tours">Tour List</Link>
          <Link href="#tickets">My Ticket</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className="hidden md:flex gap-3">
          <Link href="/auth/login" className="px-4 py-2 bg-primary text-white rounded-full">Log In</Link>
          <Link href="/auth/register" className="px-4 py-2 border rounded-full">Sign In</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3">
          <nav className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#tours">Tour List</Link>
            <Link href="#contact">Contact</Link>
            <div className="pt-2">
              <Link href="/auth/login">Log In</Link>
              <Link href="/auth/register">Sign In</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
