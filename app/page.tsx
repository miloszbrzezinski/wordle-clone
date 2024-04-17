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
      <p className="text-xs font-light text-neutral-500 p-1 text-center">
        Powered by{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href={"https://random-word-api.herokuapp.com"}
        >
          random-word-api.herokuapp.com
        </a>
        <br />
        Made by{" "}
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href={"https:github.com/miloszbrzezinski"}
        >
          milosz brzezinski
        </a>{" "}
        for portfolio purposes.
      </p>
    </main>
  );
}
