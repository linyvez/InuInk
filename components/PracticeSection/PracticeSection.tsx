"use client";

import Image from "next/image";
import HankuButton from "../Buttons/HankuButton";
import { use, useState } from "react";
import EraseButton from "../Buttons/EraseButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import Canvas from "../Canvas/Canvas";
import { useDrawing } from "@/hooks/useDrawing";

const PracticeSection = () => {
  const [hint, setHint] = useState(false);
  const letterVisibility = hint ? "text-gray-400/50" : "text-transparent";
  const hintEnable = hint ? "Disable" : "Enable";

  const canvasRef = useDrawing();

  return (
    <section className="w-fit h-[90%] relative flex justify-center overflow-hidden">
      <Image
        src={"/images/practice_background.png"}
        alt="Practice scroll background"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-auto object-contain -z-10"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-8 py-[7%]">
        <h1 className="text-[2rem] lg:text-[4rem] leading-10 lg:leading-16 tracking-[0.26em]">
          Start <br /> drawing!
        </h1>

        <div className="relative flex flex-col justify-center gap-2 items-center w-[50%] h-[60%] overflow-hidden">
          <h2 className="leading-none">
            Transcript: <strong>a</strong>
          </h2>
          <Canvas canvasRef={canvasRef} />
          <h1
            className={`absolute text-[13rem] lg:text-[26rem] leading-none select-none ${letterVisibility} pointer-events-none`}
          >
            あ
          </h1>
        </div>

        <ProgressBar heading="Your progress..." width={0} />

        <EraseButton
          onErase={() => {
            const cvs = canvasRef.current;
            cvs?.getContext("2d")?.clearRect(0, 0, cvs.width, cvs.height);
          }}
        />

        <div className="flex flex-col justify-center items-center gap-5 absolute bottom-[10vh] right-[10vh] p-5">
          <HankuButton
            heading={`${hintEnable} Hint`}
            color="black"
            onHankuButton={() => setHint((prev) => !prev)}
          />
          <HankuButton
            heading="Check"
            color="red"
            onHankuButton={() => console.log("Red")}
          />
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
