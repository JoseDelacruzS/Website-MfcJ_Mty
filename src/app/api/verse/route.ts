import { NextResponse } from "next/server";
import { youthVerses } from "@/lib/bibleVerse"; // Importamos tu lista

export async function GET() {
  const randomIndex = Math.floor(Math.random() * youthVerses.length);
  const randomVerse = youthVerses[randomIndex];

  return NextResponse.json(randomVerse);
}