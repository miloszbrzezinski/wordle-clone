import React, { useEffect, useState } from "react";
import { LetterComponent } from "./letter-component";
import { WordComponent } from "./word-component";
import { useRouter } from "next/navigation";

export const WordsComponent = () => {
  const [data, setData] = useState(Array);
  const [correctWord, setCorrectWord] = useState<string[]>([]);
  const [inputWord, setInputWord] = useState<Array<string>>([]);
  const [inputIndex, setInputIndex] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [gameFinished, setGameFinished] = useState(false);
  const route = useRouter();

  useEffect(() => {
    fetch(
      "https://random-word-api.herokuapp.com/word?lang=en&length=5&number=8886",
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCorrectWord(data as string[]);
      });
  }, []);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.code === "Backspace") {
        const tmpWord = [...inputWord];
        tmpWord.pop();
        if (tmpWord) {
          setInputWord(tmpWord);
        }
      }
      if (inputWord.length < 5 && !gameFinished) {
        if (e.key.length === 1) {
          const word = [...inputWord, e.key];
          setInputWord(word);
        }
      }
      if (e.code === "Enter") {
        if (inputWord.length === 5) {
          setInputWord([]);
          setInputIndex(inputIndex + 1);
          if (
            inputWord.join("").toUpperCase() === correctWord[0].toUpperCase()
          ) {
            setMessage("You won!");
            setGameFinished(true);
          }
          if (inputIndex === 6) {
            setMessage(`You lost! Corerct word: ${correctWord}`);
            setGameFinished(true);
          }
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
  }, [inputWord, inputIndex, gameFinished, correctWord]);

  const resetGame = () => {
    route.refresh();
    setGameFinished(false);
  };

  return (
    <>
      <div className="flex flex-col space-y-2 justify-center">
        <WordComponent
          isInput={inputIndex === 1}
          inputWord={inputWord}
          word={correctWord[0]}
        />
        <WordComponent
          isInput={inputIndex === 2}
          inputWord={inputWord}
          word={correctWord[0]}
        />
        <WordComponent
          isInput={inputIndex === 3}
          inputWord={inputWord}
          word={correctWord[0]}
        />
        <WordComponent
          isInput={inputIndex === 4}
          inputWord={inputWord}
          word={correctWord[0]}
        />
        <WordComponent
          isInput={inputIndex === 5}
          inputWord={inputWord}
          word={correctWord[0]}
        />
        <WordComponent
          isInput={inputIndex === 6}
          inputWord={inputWord}
          word={correctWord[0]}
        />
        <div className="py-5 h-28">
          {message.length > 0 && (
            <p className="bg-neutral-700 rounded-md text-white whitespace-nowrap justify-center text-xl flex p-2 w-full">
              {message}
            </p>
          )}
          {gameFinished && (
            <button
              onClick={resetGame}
              className="bg-white text-black text-xl p-2 rounded-md w-full"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </>
  );
};
