export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-2">LamiGo</h3>
          <p className="text-gray-400 text-sm">
            Jelajahi pesona alam Lampung bersama kami.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Navigasi</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Beranda</li>
            <li>Destinasi</li>
            <li>Tentang Kami</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Ikuti Kami</h3>
          <p className="text-gray-400 text-sm">Instagram | Facebook | TikTok</p>
        </div>
      </div>
      <div className="mt-8 text-gray-500 text-sm text-center border-t border-gray-700 pt-4">
        © 2025 LamiGo. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}
