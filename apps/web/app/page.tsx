"use client"; // Needed for Next.js App Router (if using React components)

import { Button } from "@raive-ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-6">
      <Button variant="primary" size="large">Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
    </main>
  );
}
