import Image from "next/image";
import PracticeNowLink from "../PracticeNowLink/PracticeNowLink";

const MainSection = () => {
  return (
    <section className="flex-1 relative w-full flex justify-start items-center flex-col overflow-hidden pt-10">
      <img
        src={"/images/cloud_2.png"}
        alt="Cloud"
        className="absolute -left-1/12 top-0 object-contain w-1/4 h-1/4 -z-10"
      />

      <img
        src={"/images/cloud_1.png"}
        alt="Cloud"
        className="absolute right-1/12 top-7/24 object-contain w-1/4 h-1/4 -z-10"
      />

      <div className="absolute top-[5%] h-[50%] aspect-square flex justify-center items-center text-center z-0">
        <Image
          src={"/images/red_sun.png"}
          alt="Red sun"
          fill
          className="object-contain pt-5"
        />
        <p className="absolute text-[2rem] lg:text-[4rem] whitespace-normal leading-tight tracking-[0.2em]">
          Learn <br /> Japanese <br /> with Inu
        </p>
      </div>

      <div className="absolute -bottom-[10%] w-full h-[70%] z-10">
        <Image
          src={"/images/mountain.png"}
          alt="Mountain"
          fill
          className="object-contain object-top"
        />
      </div>

      <PracticeNowLink heading="PRACTICE NOW" />
    </section>
  );
};

export default MainSection;
