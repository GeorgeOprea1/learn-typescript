const HangmanWord = () => {
  const word = "test";
  const guessedLetters = ["t", "a"];
  const placeholderChar = "_";

  return (
    <div className="flex gap-2 text-5xl font-bold uppercase">
      {word.split("").map((letter, index) => (
        <span className="border-b-8 border-black" key={index}>
          {guessedLetters.includes(letter) ? (
            <span>{letter}</span>
          ) : (
            <span>{placeholderChar}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
