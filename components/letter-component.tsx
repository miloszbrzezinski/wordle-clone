import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface LetterComponentProps {
  inputWord: string[];
  correctWord: string;
  index: number;
}

export const LetterComponent = ({
  inputWord,
  correctWord,
  index,
}: LetterComponentProps) => {
  const [correctLetter, setCorrectLetter] = useState(false);
  const [correctLetterCorrectPlace, setCorrectLetterCorrectPlace] =
    useState(false);

  useEffect(() => {
    if (inputWord[index]) {
      setCorrectLetter(correctWord.includes(inputWord[index]));
      setCorrectLetterCorrectPlace(correctWord[index] === inputWord[index]);
    }
  }, [setCorrectLetter, correctWord, index, inputWord]);

  return (
    <div
      className={cn(
        "w-14 h-14 flex border rounded-md items-center justify-center text-3xl font-semibold",
        correctLetter && "bg-amber-500",
        correctLetterCorrectPlace && "bg-green-500",
      )}
    >
      {inputWord[index] && inputWord[index].toUpperCase()}
    </div>
  );
};
