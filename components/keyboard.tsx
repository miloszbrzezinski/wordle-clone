import { AllowedKeys } from "@/data/keys";
import { CornerDownLeft, Delete } from "lucide-react";

interface KeyboardParams {
  onKeyboardButtonPressed: (key: string) => void;
}

export const Keyboard = ({ onKeyboardButtonPressed }: KeyboardParams) => {
  const firstRowKeys = AllowedKeys.slice(0, 10);
  const secondRowKeys = AllowedKeys.slice(10, 19);
  const thirdRowKeys = AllowedKeys.slice(19, 26);

  return (
    <div className="flex flex-col justify-center items-center w-min bg-neutral-900 gap-1 select-none">
      <div className="flex gap-1">
        {firstRowKeys.map((keyItem) => (
          <button
            key={keyItem}
            onClick={() => onKeyboardButtonPressed(keyItem)}
            className="text-xl font-light bg-neutral-800 flex h-min w-8 items-center justify-center p-2 hover:bg-slate-700"
          >
            {keyItem.length === 1 && keyItem}
          </button>
        ))}
      </div>
      <div className="flex gap-1">
        {secondRowKeys.map((keyItem) => (
          <button
            key={keyItem}
            onClick={() => onKeyboardButtonPressed(keyItem)}
            className="text-xl font-light bg-neutral-800 flex h-min w-8 items-center justify-center p-2 hover:bg-slate-700"
          >
            {keyItem.length === 1 && keyItem}
          </button>
        ))}
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => onKeyboardButtonPressed("BACKSPACE")}
          className="text-xl font-light bg-neutral-800 flex h-full w-10 items-center justify-center p-2 hover:bg-slate-700"
        >
          <Delete strokeWidth={1} />
        </button>
        {thirdRowKeys.map((keyItem) => (
          <button
            key={keyItem}
            onClick={() => onKeyboardButtonPressed(keyItem)}
            className="text-xl font-light bg-neutral-800 flex h-min w-8 items-center justify-center p-2 hover:bg-slate-700"
          >
            {keyItem.length === 1 && keyItem}
          </button>
        ))}
        <button className="text-4xl font-light bg-neutral-800 flex h-full w-16 items-center justify-center p-2 hover:bg-slate-700">
          <CornerDownLeft
            onClick={() => onKeyboardButtonPressed("ENTER")}
            strokeWidth={1}
          />
        </button>
      </div>
    </div>
  );
};
