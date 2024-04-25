type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

const HangmanWord = ({
  wordToGuess,
  guessedLetters,
  reveal = false,
}: HangmanWordProps) => {
  const placeholderChar = "_";

  return (
    <div className="flex gap-2 text-5xl font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-8 border-black" key={index}>
          {guessedLetters.includes(letter) || reveal ? (
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
