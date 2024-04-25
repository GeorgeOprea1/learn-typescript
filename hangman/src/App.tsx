import HangmanDrawing from "./HangmanDrawing";

function App() {
  return (
    <div className="w-full h-screen flex  items-center justify-center">
      <div
        className="w-full h-screen border-2 border-green-500 max-w-[800px] flex flex-col gap-2 items-center
    "
      >
        <HangmanDrawing />
      </div>
    </div>
  );
}

export default App;
