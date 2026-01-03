import Image from "next/image";
import CloudButton from "../Buttons/CloudButton";

const MainSection = () => {
  return (
    <section className="flex-1 relative w-full flex justify-between items-center flex-col overflow-hidden pt-10">
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

      <div className="relative h-[50vh] aspect-square flex justify-center items-center -mb-[35vh] text-center">
        <Image
          src={"/images/red_sun.png"}
          alt="Red sun"
          fill
          className="object-contain z-0 pt-5"
        />
        <p className="absolute text-[2rem] lg:text-[4rem] whitespace-normal leading-tight tracking-[0.2em]">
          Learn <br /> Japanese <br /> with Inu
        </p>
      </div>

      <div className="relative -bottom-3/12 w-[60vw] h-[80vh]">
        <Image
          src={"/images/mountain.png"}
          alt="Mountain"
          fill
          className="object-contain object-bottom z-10"
        />
      </div>

      <CloudButton heading="PRACTICE NOW" />
    </section>
  );
};

export default MainSection;
