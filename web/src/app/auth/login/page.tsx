"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Masuk ke Akun</h2>
        <input type="email" placeholder="Email" className="border rounded-md p-3 w-full mb-3" />
        <input type="password" placeholder="Kata Sandi" className="border rounded-md p-3 w-full mb-3" />
        <button type="submit" className="w-full py-3 bg-primary text-white rounded-md">Masuk</button>
      </form>
    </div>
  );
}
