"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Search } from "lucide-react";

const images = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex flex-col justify-end overflow-hidden">
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

        {/* Dot Indicator */}
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

      {/* Search Box */}
      <div className="relative z-20 w-full max-w-6xl mx-auto -mb-12 md:-mb-16 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-wrap justify-between items-center gap-4">
          {/* Lokasi */}
          <div className="flex items-center gap-2 flex-1 min-w-[220px]">
            <MapPin className="text-blue-600" />
            <div>
              <label className="text-gray-500 text-sm">Lokasi Kamu</label>
              <p className="font-medium">Kota Bandar Lampung, Lampung</p>
            </div>
          </div>

          {/* Tanggal */}
          <div className="flex items-center gap-2 flex-1 min-w-[180px]">
            <Calendar className="text-blue-600" />
            <div>
              <label className="text-gray-500 text-sm">Tanggal</label>
              <p className="font-medium">Rab, 5 Nov 2025</p>
            </div>
          </div>

          {/* Waktu */}
          <div className="flex items-center gap-2 flex-1 min-w-[150px]">
            <Clock className="text-blue-600" />
            <div>
              <label className="text-gray-500 text-sm">Waktu</label>
              <p className="font-medium">07.00 - 16.00</p>
            </div>
          </div>

          {/* Jumlah Tiket */}
          <div className="flex items-center gap-2 flex-1 min-w-[120px]">
            <Users className="text-blue-600" />
            <div>
              <label className="text-gray-500 text-sm">Jumlah Tiket</label>
              <p className="font-medium">4 Orang</p>
            </div>
          </div>

          {/* Tombol Search */}
          <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 px-8 rounded-xl flex items-center gap-2">
            <Search size={18} /> Search
          </button>
        </div>
      </div>
    </section>
  );
}
