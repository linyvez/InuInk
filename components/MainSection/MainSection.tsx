import Image from "next/image";
import PracticeNowLink from "../PracticeNowLink/PracticeNowLink";

const MainSection = () => {
  return (
    <section className="flex-1 relative h-full w-full flex justify-start items-center flex-col pt-10 overflow-hidden">
      <img
        src={"/images/cloud_2.png"}
        alt="Cloud"
        className="absolute -left-5/12 md:-left-2/12 top-0 object-contain w-1/2 md:w-1/4 aspect-square -z-10 animate-flow"
      />

      <img
        src={"/images/cloud_1.png"}
        alt="Cloud"
        className="absolute -left-9/12 md:-left-7/12 top-7/24 object-contain w-1/2 md:w-1/4 aspect-square -z-10 animate-flow"
      />

      <div className="absolute top-[15%] md:top-[5%] h-[50%] max-h-80 md:max-h-120 aspect-square flex justify-center items-center text-center z-0">
        <Image
          src={"/images/red_sun.png"}
          alt="Red sun"
          fill
          sizes="600px"
          className="object-contain pt-5"
        />
        <p className="absolute text-[2.5rem] md:text-[3rem] lg:landscape:text-[2rem] xl:landscape:text-[3rem] whitespace-normal leading-tight tracking-[0.2em]">
          Learn <br /> Japanese <br /> with Inu
        </p>
      </div>

      <div className="absolute bottom-[5%] md:-bottom-[10%] w-full h-[50%] md:h-[70%] z-10">
        <Image
          src={"/images/mountain.png"}
          alt="Mountain"
          fill
          sizes="600px"
          className="object-cover md:object-contain object-top"
        />
      </div>

      <PracticeNowLink heading="PRACTICE NOW" />
    </section>
  );
};

export default MainSection;
