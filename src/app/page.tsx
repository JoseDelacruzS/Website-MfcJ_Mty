"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-secondary text-4xl font-bold">Atrio Digital</h1>
      <Button color="primary" className="mt-4">
        ¡Si ves esto naranja, ganamos!
      </Button>
    </main>
  );
}