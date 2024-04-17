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
  const [correctWord, setCorrectWord] = useState("");
  const [tmpInputWord, setInputWord] = useState<Array<string>>([]);

  useEffect(() => {
    if (!correctWord || correctWord !== word) {
      setCorrectWord(word);
      setInputWord([]);
    }
    isInput && setInputWord(inputWord);
  }, [setInputWord, isInput, inputWord, word, correctWord]);

  return (
    <div className="flex space-x-2 justify-center">
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={correctWord}
        index={0}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={correctWord}
        index={1}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={correctWord}
        index={2}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={correctWord}
        index={3}
        isInput={isInput}
      />
      <LetterComponent
        inputWord={tmpInputWord}
        correctWord={correctWord}
        index={4}
        isInput={isInput}
      />
    </div>
  );
};
