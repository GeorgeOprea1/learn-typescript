const HEAD = (
  <div className=" w-[50px] h-[50px] rounded-full border-[10px] border-black absolute top-[50px] right-[-20px]" />
);

const BODY = (
  <div className=" w-[10px] h-[100px] bg-black absolute top-[100px] right-0" />
);

const RIGHT_ARM = (
  <div className=" w-[100px] h-[10px] bg-black absolute top-[120px] right-[-90px] rotate-[-30deg]" />
);
const LEFT_ARM = (
  <div className=" w-[100px] h-[10px] bg-black absolute top-[120px] right-0 rotate-[30deg]" />
);

const RIGHT_LEG = (
  <div className=" w-[100px] h-[10px] bg-black absolute top-[215px] right-[-90px] rotate-[30deg]" />
);
const LEFT_LEG = (
  <div className=" w-[100px] h-[10px] bg-black absolute top-[215px] right-[0px] rotate-[-30deg]" />
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, LEFT_LEG, RIGHT_LEG];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className=" relative ">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[200px] bg-black ml-[120px]" />
      <div className="h-[400px] w-[10px] bg-black ml-[120px]" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
