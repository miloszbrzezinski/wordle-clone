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
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={word}
        index={0}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={word}
        index={1}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={word}
        index={2}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={word}
        index={3}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={word}
        index={4}
        isInput={isInput}
      />
    </div>
  );
};
