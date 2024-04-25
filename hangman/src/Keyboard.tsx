const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center  gap-2">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            disabled={isInactive || isActive || disabled}
            className={`w-14 h-14 border-2 border-gray-400 text-xl uppercase p-4 cursor-pointer rounded-lg hover:bg-slate-300 ${
              isActive ? "active:bg-blue-300 active:text-white" : ""
            } ${isInactive ? "opacity-50 pointer-events-none" : ""}`}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
