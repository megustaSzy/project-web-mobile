import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  { name: "Fadly", review: "Pelayanan sangat ramah dan profesional!", rating: 5 },
  { name: "Alya", review: "Destinasinya indah, cocok untuk keluarga.", rating: 4 },
  { name: "Rafi", review: "Harga terjangkau, pengalaman luar biasa!", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Testimoni</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, i) => (
          <Card key={i} className="hover:shadow-xl transition">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-3">"{item.review}"</p>
              <p className="text-yellow-500">{"⭐".repeat(item.rating)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
