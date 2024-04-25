import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  return (
    <div className="w-full h-screen flex  items-center justify-center">
      <div
        className="w-full h-screen max-w-[800px] flex flex-col gap-8 items-center justify-around
    "
      >
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
