import { useEffect, useState } from "react";
import { LetterComponent } from "./letter-component";
import { WordComponent } from "./word-component";

export const WordsComponent = () => {
  const [inputWord, setInputWord] = useState<Array<string>>([]);
  const [inputIndex, setInputIndex] = useState<number>(1);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.code === "Backspace") {
        const tmpWord = [...inputWord];
        tmpWord.pop();
        if (tmpWord) {
          setInputWord(tmpWord);
        }
      }
      if (inputWord.length < 5) {
        if (e.key.length === 1) {
          const word = [...inputWord, e.key];
          setInputWord(word);
          console.log(`${word}  ${word.length === 6}  ${inputIndex}`);
          //   if (word.length > 5) {
          //     setInputWord([e.key]);
          //     setInputIndex(inputIndex + 1);
          //   }
        }
      }
      if (e.code === "Enter") {
        if (inputWord.length === 5) {
          setInputWord([]);
          setInputIndex(inputIndex + 1);
          setMessage("");
        } else {
          setMessage("Not enaugh letters!");
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [inputWord, inputIndex]);

  return (
    <>
      <div className="flex flex-col space-y-2 justify-center">
        <WordComponent
          isInput={inputIndex === 1}
          inputWord={inputWord}
          word="apple"
        />
        <WordComponent
          isInput={inputIndex === 2}
          inputWord={inputWord}
          word="apple"
        />
        <WordComponent
          isInput={inputIndex === 3}
          inputWord={inputWord}
          word="apple"
        />
        <WordComponent
          isInput={inputIndex === 4}
          inputWord={inputWord}
          word="apple"
        />
        <WordComponent
          isInput={inputIndex === 5}
          inputWord={inputWord}
          word="apple"
        />
        <WordComponent
          isInput={inputIndex === 6}
          inputWord={inputWord}
          word="apple"
        />
      </div>
      {message.length > 0 && (
        <p className="bg-white rounded-md text-neutral-900 w-min whitespace-nowrap justify-center text-xl flex p-2">
          {message}
        </p>
      )}
    </>
  );
};
