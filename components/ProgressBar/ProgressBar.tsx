interface Props {
  heading: string;
  width: number;
}

const ProgressBar = ({ heading, width }: Props) => {
  return (
    <div className="flex-1 flex flex-col w-[60%] md:w-[30%] justify-center text-left h-10 md:h-20">
      <span className="text-[0.8rem] md:text-[1rem]">{heading}</span>
      <div role="progressbar" className="relative w-full h-8">
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
        >
          <div
            className={`absolute top-0 left-0 h-full bg-main-red transition-all duration-500 ease-out`}
            style={{
              width: `${width}%`,
            }}
          ></div>
        </div>

        <span className="absolute leading-none left-[5%] bottom-[30%] text-white text-[0.8rem] md:text-[1rem]">
          {width}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
