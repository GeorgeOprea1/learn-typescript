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

export const Keyboard = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center  gap-2">
      {KEYS.map((key) => {
        return (
          <button
            key={key}
            className="w-[60px] border-2 border-gray-400 text-xl uppercase p-4 cursor-pointer rounded-lg hover:bg-slate-300 active:bg-blue-300 active:text-white inactive"
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
