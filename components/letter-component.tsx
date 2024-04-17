import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface LetterComponentProps {
  inputWord: string[];
  correctWord: string;
  index: number;
  isInput: boolean;
}

export const LetterComponent = ({
  inputWord,
  correctWord,
  index,
  isInput,
}: LetterComponentProps) => {
  const [wrongLetter, setWrongLetter] = useState(false);
  const [correctLetter, setCorrectLetter] = useState(false);
  const [correctLetterCorrectPlace, setCorrectLetterCorrectPlace] =
    useState(false);

  useEffect(() => {
    if (!inputWord[0]) {
      setWrongLetter(false);
      setCorrectLetter(false);
      setCorrectLetterCorrectPlace(false);
    }

    if (inputWord[index] && correctWord) {
      setWrongLetter(
        !correctWord.toUpperCase().includes(inputWord[index].toUpperCase()) &&
          !isInput,
      );
      setCorrectLetter(
        correctWord.toUpperCase().includes(inputWord[index].toUpperCase()) &&
          !isInput,
      );
      setCorrectLetterCorrectPlace(
        correctWord[index].toUpperCase() === inputWord[index].toUpperCase() &&
          !isInput,
      );
    }
  }, [setCorrectLetter, correctWord, index, inputWord, isInput, wrongLetter]);

  return (
    <div
      className={cn(
        "w-12 h-12 flex border rounded-md items-center justify-center text-2xl font-semibold",
        wrongLetter && "bg-neutral-600",
        correctLetter && "bg-amber-500",
        correctLetterCorrectPlace && "bg-green-500",
      )}
    >
      {inputWord[index] && inputWord[index].toUpperCase()}
    </div>
  );
};
