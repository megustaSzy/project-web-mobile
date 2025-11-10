import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[68vh] min-h-[420px] w-full">
      <div className="absolute inset-0">
        <Image src="/hero.jpg" alt="Pantai Lampung" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <p className="text-sm mb-2">Best Travel Experience</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3">LamiGo Jelajah Alam Lampung</h1>
        <p className="max-w-xl text-sm md:text-base mb-8 opacity-90">
          Temukan destinasi terbaik, atur perjalanan impianmu, dan pesan tiket dengan mudah dalam satu aplikasi lengkap untuk semua kebutuhan liburan.
        </p>
        <div className="flex gap-3">
          <a href="#tours" className="bg-primary text-white py-3 px-6 rounded-full">Jelajahi Sekarang</a>
          <a href="#about" className="border border-white py-3 px-6 rounded-full">Pelajari Lebih</a>
        </div>
      </div>
    </section>
  );
}
