import { cn } from "@/lib/utils";

interface LetterComponentProps {
  letter: string;
  correctLetter: string;
}

export const LetterComponent = ({
  letter,
  correctLetter,
}: LetterComponentProps) => {
  return (
    <div
      className={cn(
        "w-14 h-14 flex border rounded-md items-center justify-center text-3xl font-semibold",
        correctLetter === letter && "bg-green-500",
      )}
    >
      {letter}
    </div>
  );
};
