import Image from "next/image";

const stats = [
  { label: "Destinasi", value: "100+" },
  { label: "Pemandu Wisata", value: "90+" },
  { label: "Testimoni Positif", value: "300+" },
  { label: "Tingkat Kepuasan", value: "89%" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Mengapa Memilih Kami</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <Image
          src="/images/travelers.png"
          alt="travelers"
          width={250}
          height={250}
        />
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
