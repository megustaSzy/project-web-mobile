"use client";
import { useState } from "react";

export default function SearchCard() {
  const [location, setLocation] = useState("Kota Bandar Lampung, Lampung");

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500">Lokasi Kamu</p>
          <h3 className="text-lg font-semibold">{location}</h3>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded-md px-4 py-2 w-64"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-md">Cari Histori</button>
        </div>
      </div>
    </div>
  );
}
