"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SearchCard from "./SearchCard"; 
import { Calendar, Clock, Users, Search, MapPin } from "lucide-react";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex flex-col justify-end overflow-visible">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={images[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt="Hero Background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 py-28 md:py-40">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-2xl">🏆</span>
            <p className="text-sm md:text-base opacity-90 font-medium">
              Best Travel Experience
            </p>
          </div>

          <div className="flex justify-center mb-2">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                {star}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          LamiGo Jelajah Alam Lampung
        </h1>

        <p className="max-w-2xl text-sm md:text-base mb-8 opacity-90">
          Temukan destinasi terbaik, atur perjalanan impianmu, dan pesan tiket
          dengan mudah dalam satu aplikasi lengkap untuk semua kebutuhan
          liburan.
        </p>

        <div className="flex gap-2 mb-10">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

{/* Search Box (mengambang di bawah hero) */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full px-4">
  <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Lokasi */}
      <button className="group flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-500 transition-all text-left w-full">
        <MapPin className="text-blue-600 flex-shrink-0" />
        <div className="min-w-0">
          <label className="text-gray-500 text-xs md:text-sm">Lokasi</label>
          <p className="font-medium truncate group-hover:text-blue-600">
            Kota Bandar 
          </p>
        </div>
      </button>

      {/* Tanggal */}
      <button className="group flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-500 transition-all text-left w-full">
        <Calendar className="text-blue-600 flex-shrink-0" />
        <div className="min-w-0">
          <label className="text-gray-500 text-xs md:text-sm">Tanggal</label>
          <p className="font-medium truncate group-hover:text-blue-600">
            Rab, 5 Nov 2025
          </p>
        </div>
      </button>

      {/* Waktu */}
      <button className="group flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-500 transition-all text-left w-full">
        <Clock className="text-blue-600 flex-shrink-0" />
        <div className="min-w-0">
          <label className="text-gray-500 text-xs md:text-sm">Waktu</label>
          <p className="font-medium truncate group-hover:text-blue-600">
            07.00 - 16.00
          </p>
        </div>
      </button>

      {/* Jumlah Tiket */}
      <button className="group flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-500 transition-all text-left w-full">
        <Users className="text-blue-600 flex-shrink-0" />
        <div className="min-w-0">
          <label className="text-gray-500 text-xs md:text-sm">Jumlah Tiket</label>
          <p className="font-medium truncate group-hover:text-blue-600">
            4 Orang
          </p>
        </div>
      </button>

      {/* Tombol Search */}
      <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap w-full h-full">
        <Search size={18} /> Search
      </button>
    </div>
  </div>
</div>
      {/* Hanya satu SearchCard di sini */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full px-4 z-20">
        <SearchCard />
      </div>
    </section>
  );
}
