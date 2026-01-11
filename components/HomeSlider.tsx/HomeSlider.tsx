"use client";

import { act, useState } from "react";
import NextButton from "../Buttons/NextButton";
import SliderDots from "../SliderDots/SliderDots";

interface Props {
  children: React.ReactNode;
}

const HomeSlider = ({ children }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    const newActiceSlide = activeSlide > 0 ? activeSlide - 1 : 2;
    setActiveSlide(newActiceSlide);
  };

  const handleNextSlide = () => {
    const newActiceSlide = activeSlide < 2 ? activeSlide + 1 : 0;
    setActiveSlide(newActiceSlide);
  };

  return (
    <div className="w-[300%] h-full">
      <div
        className="h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        {children}
      </div>
      {activeSlide !== 0 && (
        <NextButton type="prev" onClick={handlePrevSlide} />
      )}
      {activeSlide !== 2 && (
        <NextButton type="next" onClick={handleNextSlide} />
      )}
      <SliderDots active={activeSlide} />
    </div>
  );
};

export default HomeSlider;
