"use client";

import { useState, useEffect } from "react";

interface BibleVerse {
  text: string;
  reference: string;
}

export const useBibleVerse = () => {
  const [verse, setVerse] = useState<BibleVerse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/verse", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setVerse(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error local:", err);
        setVerse({
          text: "Todo lo puedo en Cristo que me fortalece.",
          reference: "Filipenses 4:13"
        });
        setLoading(false);
      });
  }, []);

  return { verse, loading };
};