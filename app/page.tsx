"use client";
import { WordsComponent } from "@/components/word";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col space-y-2 w-full h-full items-center justify-center bg-neutral-900">
      <div className="flex w-full h-full flex-col items-center justify-center text-6xl space-y-6 space-x-2 text-white">
        <p>Wordle</p>
        <WordsComponent />
      </div>
    </main>
  );
}
