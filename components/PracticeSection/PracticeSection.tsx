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
import { updateStats } from "@/actions/stats";
import { useAuth } from "@/providers/AuthProvider";

const PracticeSection = () => {
  const userContext = useAuth();

  const [hint, setHint] = useState(false);
  const hintEnable = hint ? "Disable" : "Enable";

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [streak, setStreak] = useState(0);

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

    if (result) {
      const newStreak = streak + 1;
      setStreak(newStreak);

      if (userContext.user) {
        updateStats(userContext.user.login, charInfo.char, newStreak);
      }
    } else if (streak) {
      setStreak(0);
      // if (userContext.user) {
      //   compareStreak(userContext.user.login, streak);
      // }
    }
  };

  useEffect(() => {
    if (!charInfo) return;

    historyRef.current = [];
    setCorrectAnswer(false);
    setShowResult(false);
    clearCanvas();
  }, [charInfo?.char, canvas]);

  return (
    <section className="w-full h-fit md:w-[80%] lg:w-fit lg:h-full relative flex justify-center items-center">
      <div className="block lg:hidden w-full h-auto relative -z-10">
        <Image
          src="/images/form_background.png"
          alt="Practice scroll background mobile"
          width={800}
          height={1070}
          className="w-full h-auto object-fill"
        />
      </div>

      <div className="hidden lg:block w-auto h-full relative -z-10">
        <Image
          src="/images/practice_background.png"
          alt="Practice scroll background desktop"
          width={1070}
          height={800}
          className="w-auto h-full object-fill"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-4 py-[12%] lg:py-[10%]">
        <div className="flex flex-col gap-3">
          <h1 className="text-[2rem] lg:portrait:text-[4rem] xl:text-[4rem] lg:landscape:text-[3rem] leading-10 lg:leading-16 lg:landscape:leading-12 tracking-[0.26em]">
            Start <br /> writing!
          </h1>

          <span className="leading-none text-[1rem] lg:portrait:text-[1.5rem] lg:landscape:text-[1rem] xl:text-[1.5rem]">
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

        <div className="relative flex flex-col justify-center gap-2 items-center w-[70%] lg:w-[35%] h-[70%] overflow-hidden">
          <Canvas canvasRef={canvasRef} />
          {hint && charInfo && (
            <CharacterHint
              strokes={charInfo.strokes.flatMap((stroke) => stroke.value)}
            />
          )}
        </div>

        <span>
          Current streak: <strong>{streak}</strong>
        </span>

        <ProgressBar
          heading="Your progress..."
          width={
            charInfo?.numStrokes
              ? Math.min(
                  Math.round((strokesDrawn / charInfo.numStrokes) * 100),
                  100
                )
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

        <div className="flex lg:flex-col justify-center items-center gap-5 relative lg:absolute lg:bottom-[10%] lg:right-[10%] px-5 lg:p-5">
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
          <div className="fixed w-fit h-fit lg:h-auto lg:w-[20%] lg:top-[25%] bottom-0 left-[25%] lg:left-0 animate-slide origin-left">
            <div className="hidden lg:block relative w-full h-auto rotate-180">
              <Image
                src="/images/shiba_checker.png"
                alt="Shiba checker"
                width={270}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="block lg:hidden relative w-auto h-full">
              <Image
                src="/images/shiba_checker_mobile.png"
                alt="Shiba checker"
                width={400}
                height={270}
                className="w-auto h-full object-contain"
              />
            </div>
          </div>
          <div className="absolute z-50 w-[30%] lg:w-[20%] aspect-square top-[10%] left-0 lg:left-[10%] animate-stamp">
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
