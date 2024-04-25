import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";

function App() {
  return (
    <div className="w-full h-screen flex  items-center justify-center">
      <div
        className="w-full h-screen border-2 border-green-500 max-w-[800px] flex flex-col gap-8 items-center
    "
      >
        <HangmanDrawing />
        <HangmanWord />
      </div>
    </div>
  );
}

export default App;
