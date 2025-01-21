import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const months = ["jan.", "feb.", "mar.", "apr.", "may", "jun.", "jul.", "aug.", "sep.", "oct.", "nov.", "dec."];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function formatDate(entry: Date, time: boolean = false): string {
  const days = entry.getDate();
  const month = months[entry.getMonth()];
  const year = entry.getFullYear();

  if (time) {
    const hours = entry.getHours();
    const minutes = entry.getMinutes();

    return `${days} ${month} ${year}, ${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  }

  return `${days} ${month} ${year}`;
}
