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
      <LetterComponent inputWord={tmpInputWord} correctWord="apple" index={0} />
      <LetterComponent inputWord={tmpInputWord} correctWord="apple" index={1} />
      <LetterComponent inputWord={tmpInputWord} correctWord="apple" index={2} />
      <LetterComponent inputWord={tmpInputWord} correctWord="apple" index={3} />
      <LetterComponent inputWord={tmpInputWord} correctWord="apple" index={4} />
    </div>
  );
};
