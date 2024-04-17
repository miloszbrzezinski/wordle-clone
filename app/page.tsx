"use client";
import { Game } from "@/components/game";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col space-y-2 w-full h-full items-center justify-center bg-neutral-900">
      <div className="flex w-full h-full flex-col items-center justify-center text-5xl space-y-4 space-x-2 text-white">
        <p>Wordle</p>
        <Game />
      </div>
    </main>
  );
}
