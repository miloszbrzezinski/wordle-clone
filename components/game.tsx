import React, { useEffect, useState } from "react";
import { LetterComponent } from "./letter-component";
import { WordComponent } from "./word-component";
import { useRouter } from "next/navigation";
import { AllowedKeys } from "@/data/keys";
import { Keyboard } from "./keyboard";

export const Game = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [data, setData] = useState(Array);
  const [correctWord, setCorrectWord] = useState<string[]>([]);
  const [inputWord, setInputWord] = useState<Array<string>>([]);
  const [inputIndex, setInputIndex] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [gameFinished, setGameFinished] = useState(false);
  const route = useRouter();
  const allowedKeys = AllowedKeys;

  useEffect(() => {
    fetch(
      "https://random-word-api.herokuapp.com/word?lang=en&length=5&number=8886",
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCorrectWord([]);
        setCorrectWord(data as string[]);
      });
  }, []);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      const key = e.key;
      if (allowedKeys.includes(key.toUpperCase())) {
        console.log("ALLOWED");

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
            setMessage("");
            if (
              inputWord.join("").toUpperCase() ===
              correctWord[wordIndex].toUpperCase()
            ) {
              setMessage("You won!");
              setGameFinished(true);
            }
            if (inputIndex === 6) {
              setMessage(`You lost! Corerct word: ${correctWord[wordIndex]}`);
              setGameFinished(true);
            }
          } else {
            setMessage("Not enaugh letters!");
          }
        }
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [
    inputWord,
    inputIndex,
    gameFinished,
    correctWord,
    allowedKeys,
    wordIndex,
  ]);

  const resetGame = () => {
    route.refresh();
    setGameFinished(false);
    setWordIndex(wordIndex + 1);
    setInputIndex(1);
    setMessage("");
  };

  const pressKey = (key: string) => {
    const word = [...inputWord, key];
    setInputWord(word);
  };

  const pressEnter = () => {
    if (inputWord.length === 5) {
      setInputWord([]);
      setInputIndex(inputIndex + 1);
      setMessage("");
      if (
        inputWord.join("").toUpperCase() ===
        correctWord[inputIndex].toUpperCase()
      ) {
        setMessage("You won!");
        setGameFinished(true);
      }
      if (inputIndex === 6) {
        setMessage(`You lost! correct word: ${correctWord[inputIndex]}`);
        setGameFinished(true);
      }
    } else {
      setMessage("Not enough letters!");
    }
  };

  const pressBackspace = () => {
    const tmpWord = [...inputWord];
    tmpWord.pop();
    if (tmpWord) {
      setInputWord(tmpWord);
    }
  };

  const onKeyboardButtonPressed = (key: string) => {
    if (key === "ENTER") {
      pressEnter();
    }
    if (key === "BACKSPACE") {
      pressBackspace();
    }
    if (key.length === 1) {
      pressKey(key);
    }
    console.log(key);
  };

  return (
    <>
      <div className="flex flex-col space-y-2 justify-center">
        <WordComponent
          isInput={inputIndex === 1}
          inputWord={inputWord}
          word={correctWord[wordIndex]}
        />
        <WordComponent
          isInput={inputIndex === 2}
          inputWord={inputWord}
          word={correctWord[wordIndex]}
        />
        <WordComponent
          isInput={inputIndex === 3}
          inputWord={inputWord}
          word={correctWord[wordIndex]}
        />
        <WordComponent
          isInput={inputIndex === 4}
          inputWord={inputWord}
          word={correctWord[wordIndex]}
        />
        <WordComponent
          isInput={inputIndex === 5}
          inputWord={inputWord}
          word={correctWord[wordIndex]}
        />
        <WordComponent
          isInput={inputIndex === 6}
          inputWord={inputWord}
          word={correctWord[wordIndex]}
        />
        <div className="space-y-1 flex flex-col">
          {message.length > 0 && (
            <p className="text-white whitespace-nowrap justify-center text-xl flex w-full">
              {message}
            </p>
          )}
          {gameFinished && (
            <button
              onClick={resetGame}
              className="bg-white text-black text-xl p-1 rounded-md w-full"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      <Keyboard onKeyboardButtonPressed={onKeyboardButtonPressed} />
    </>
  );
};
