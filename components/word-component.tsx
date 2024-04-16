import { useEffect, useState } from "react";
import { LetterComponent } from "./letter-component";

interface WordComponentProps {
  isInput: boolean;
  inputWord: string[];
  word: string;
}

export const WordComponent = ({
  inputWord,
  isInput,
  word,
}: WordComponentProps) => {
  const [tmpInputWord, setInputWord] = useState<Array<string>>([]);

  useEffect(() => {
    isInput && setInputWord(inputWord);
  }, [setInputWord, isInput, inputWord]);

  return (
    <div className="flex space-x-2 justify-center">
      <LetterComponent letter={tmpInputWord[0]} correctLetter={word[0]} />
      <LetterComponent letter={tmpInputWord[1]} correctLetter={word[1]} />
      <LetterComponent letter={tmpInputWord[2]} correctLetter={word[2]} />
      <LetterComponent letter={tmpInputWord[3]} correctLetter={word[3]} />
      <LetterComponent letter={tmpInputWord[4]} correctLetter={word[4]} />
    </div>
  );
};
