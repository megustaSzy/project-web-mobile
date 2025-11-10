"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Hero() {
  const [search, setSearch] = useState("");

  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          LamiGo Jelajah Alam Lampung
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Temukan keindahan destinasi terbaik di Lampung
        </p>

        <div className="flex flex-col md:flex-row gap-3 bg-white rounded-xl p-4 w-full max-w-2xl mx-auto">
          <Input
            placeholder="Cari tempat wisata..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <Button className="bg-primary hover:bg-blue-700">Cari</Button>
        </div>
      </div>
    </section>
  );
}
