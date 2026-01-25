import Image from "next/image";

const Statistics = () => {
  return (
    <section className="relative flex xl:landscape:flex-col pt-[30%] pb-[5%] md:py-0 h-full ">
      <div className="relative w-full h-[50%] md:h-[60%] lg:landscape:h-full xl:landscape:h-full flex flex-col justify-center md:justify-between xl:landscape:justify-center items-center py-5 md:py-10 xl:landscape:py-5">
        <Image
          src={"/images/practice_background.png"}
          alt="Scroll background"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 w-auto h-full object-fill xl:landscape:object-contain object-center -z-10"
        />
        <div className="flex flex-col justify-between text-center h-full md:h-[80%] xl:landscape:h-[90%] px-8 xl:landscape:px-[10%]">
          <h1 className="text-[3rem]">Statistics</h1>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
