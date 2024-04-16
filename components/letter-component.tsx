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
    if (inputWord[index]) {
      setWrongLetter(!correctWord.includes(inputWord[index]) && !isInput);
      setCorrectLetter(correctWord.includes(inputWord[index]) && !isInput);
      setCorrectLetterCorrectPlace(
        correctWord[index] === inputWord[index] && !isInput,
      );
    }
  }, [setCorrectLetter, correctWord, index, inputWord, isInput, wrongLetter]);

  return (
    <div
      className={cn(
        "w-14 h-14 flex border rounded-md items-center justify-center text-3xl font-semibold",
        wrongLetter && "bg-neutral-600",
        correctLetter && "bg-amber-500",
        correctLetterCorrectPlace && "bg-green-500",
      )}
    >
      {inputWord[index] && inputWord[index].toUpperCase()}
    </div>
  );
};
