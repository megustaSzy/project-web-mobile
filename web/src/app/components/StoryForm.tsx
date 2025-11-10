import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";

export default function StoryForm() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Ceritakan Momen Serumu</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <form className="flex flex-col gap-4 w-full md:w-1/2 bg-white shadow-md p-6 rounded-xl">
          <Input placeholder="Nama" required />
          <Input placeholder="Email" type="email" required />
          <Textarea placeholder="Bagikan pengalamanmu..." rows={5} required />
          <Button className="bg-primary hover:bg-blue-700">Kirim</Button>
        </form>
        <Image
          src="/images/traveler-form.png"
          alt="form traveler"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
}
