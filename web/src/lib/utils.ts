import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fungsi cn() digunakan untuk menggabungkan beberapa class Tailwind secara aman dan bersih.
 * Biasanya digunakan di semua komponen shadcn/ui untuk mempermudah penulisan className dinamis.
 *
 * Contoh:
 * cn("p-4", isActive && "bg-blue-500") => "p-4 bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
