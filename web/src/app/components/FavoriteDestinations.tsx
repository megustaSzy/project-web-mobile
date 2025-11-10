import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const destinations = [
  {
    title: "Tiba Tiba Beach",
    location: "Pesawaran, Lampung",
    img: "/images/beach1.jpg",
    desc: "Pantai tenang dengan pasir putih dan laut biru jernih.",
  },
  {
    title: "Sari Ringgung Beach",
    location: "Pesawaran, Lampung",
    img: "/images/beach2.jpg",
    desc: "Tempat favorit wisatawan untuk snorkeling dan berfoto.",
  },
  {
    title: "Dewi Mandapa Eco Park",
    location: "Pesawaran, Lampung",
    img: "/images/beach3.jpg",
    desc: "Nikmati suasana alami di jembatan cinta yang ikonik.",
  },
];

export default function FavoriteDestinations() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Tujuan Wisata Favorit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item, i) => (
          <Card key={i} className="hover:shadow-xl transition">
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={250}
              className="rounded-t-xl"
            />
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <p className="text-sm text-gray-500">{item.location}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
