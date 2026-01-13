"use client";

import Image from "next/image";
import HankuButton from "../Buttons/HankuButton";
import { useEffect, useMemo, useState } from "react";
import EraseButton from "../Buttons/EraseButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import Canvas from "../Canvas/Canvas";
import { useDrawing } from "@/hooks/useDrawing";
import { checkAnswer } from "@/utils/checkAnswer";
import { getRandomChar } from "@/utils/getRandomChar";
import { parseCharacter } from "@/utils/hiraganaParser";
import CharacterHint from "../CharacterHint/CharacterHint";
import { HIRAGANA_TRANSCIPT } from "@/utils/hiraganaTranscipt";
import allHiragana from "../../data/allHiragana.json";

const PracticeSection = () => {
  const [hint, setHint] = useState(false);
  const hintEnable = hint ? "Disable" : "Enable";

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [currentChar, setCurrentChar] = useState<string | null>(null);

  useEffect(() => {
    setCurrentChar(getRandomChar());
  }, []);

  const charInfo = useMemo(() => {
    return currentChar ? parseCharacter(currentChar) : null;
  }, [currentChar]);

  const { canvasRef, historyRef, strokesDrawn, clearCanvas, canvas } =
    useDrawing();

  const handleCheck = () => {
    const userInput = historyRef.current;

    if (!canvas || !userInput || !charInfo) return;

    const result = checkAnswer(
      userInput,
      charInfo,
      canvas.offsetWidth,
      canvas.offsetHeight
    );

    setCorrectAnswer(result);
    setShowResult(true);
  };

  useEffect(() => {
    if (!charInfo) return;

    historyRef.current = [];
    setCorrectAnswer(false);
    setShowResult(false);
    clearCanvas();
  }, [charInfo?.char, canvas]);

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

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-5 py-[7%]">
        <div className="flex flex-col gap-3">
          <h1 className="text-[2rem] lg:text-[4rem] leading-10 lg:leading-16 tracking-[0.26em]">
            Start <br /> writing!
          </h1>

          <span className="leading-none text-[1.5rem]">
            Transcript:{" "}
            <strong>
              {currentChar ? (
                HIRAGANA_TRANSCIPT[currentChar]
              ) : (
                <span>Loading...</span>
              )}
            </strong>
          </span>
        </div>

        <div className="relative flex flex-col justify-center gap-2 items-center w-[50%] h-[60%] overflow-hidden">
          <Canvas canvasRef={canvasRef} />
          {hint && charInfo && (
            <CharacterHint
              strokes={charInfo.strokes.flatMap((stroke) => stroke.value)}
            />
          )}
        </div>

        <ProgressBar
          heading="Your progress..."
          width={
            charInfo?.numStrokes
              ? Math.round((strokesDrawn / charInfo.numStrokes) * 100)
              : 0
          }
        />

        <EraseButton
          onErase={() => {
            clearCanvas();
            historyRef.current = [];
            setCorrectAnswer(false);
            setShowResult(false);
          }}
        />

        <div className="flex flex-col justify-center items-center gap-5 absolute bottom-[20%] right-[10vh] p-5">
          <HankuButton
            heading="New Character"
            color="black"
            type="button"
            onHankuButton={() => setCurrentChar(getRandomChar())}
          />
          <HankuButton
            heading={`${hintEnable} Hint`}
            color="black"
            type="button"
            onHankuButton={() => setHint((prev) => !prev)}
          />
          <HankuButton
            heading="Check"
            color="red"
            type="button"
            onHankuButton={handleCheck}
          />
        </div>
      </div>
      {showResult && (
        <>
          <div className="absolute w-[20%] h-[40%] top-[30%] left-0 animate-slide">
            <div className="relative w-full h-full">
              <Image
                src="/images/shiba_checker.png"
                alt="Shiba checker"
                fill
                className="object-contain rotate-180"
              />
            </div>
          </div>
          <div className="absolute z-50 w-[20%] aspect-square top-[5%] left-[7%] animate-stamp">
            <Image
              src={`/images/${correctAnswer ? "correct" : "wrong"}-answer.png`}
              alt="Correct icon"
              fill
              className="object-contain"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default PracticeSection;
