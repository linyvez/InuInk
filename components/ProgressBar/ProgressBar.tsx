import { useEffect, useRef, useState } from "react";

interface Props {
  heading: string;
  width: number;
}

const ProgressBar = ({ heading, width }: Props) => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getNewWidth = () => {
      const width = parentRef.current?.offsetWidth ?? 0;
      setProgressBarWidth(width);
    };

    getNewWidth();

    window.addEventListener("resize", getNewWidth);

    return () => window.removeEventListener("resize", getNewWidth);
  }, []);

  return (
    <div className="flex-1 flex flex-col w-[30%] justify-center text-left">
      <span>{heading}</span>
      <div ref={parentRef} role="progressbar" className="relative w-full h-8">
        <div
          className="absolute inset-0 bg-[#666666]"
          style={{
            WebkitMaskImage: "url('/images/progress_mask.png')",
            maskImage: "url('/images/progress_mask.png')",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        ></div>
        <div
          className={`absolute top-0 left-0 h-full bg-main-red transition-all duration-500 ease-out`}
          style={{
            width: `${width}%`,
            WebkitMaskImage: "url('/images/progress_mask.png')",
            maskImage: "url('/images/progress_mask.png')",
            WebkitMaskSize: "100% 100%",
            maskSize: `${progressBarWidth}px 100%`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        ></div>
        <span className="absolute leading-none left-[5%] bottom-[30%] text-white">
          {width}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
