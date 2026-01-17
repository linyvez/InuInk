import Image from "next/image";

const Library = () => {
  return (
    <section className="relative flex xl:landscape:flex-col pt-[30%] pb-[5%] md:py-0 xl:landscape:px-[25%] h-full ">
      <div className="relative w-full h-[50%] md:h-[60%] lg:landscape:h-full xl:landscape:h-full flex flex-col justify-center md:justify-between xl:landscape:justify-center items-center py-5 md:py-10 xl:landscape:py-5">
        <Image
          src={"/images/practice_background.png"}
          alt="Scroll background"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-0 w-auto h-full object-fill xl:landscape:object-contain object-center -z-10"
        />
        <div className="flex flex-col justify-between text-center h-full md:h-[80%] xl:landscape:h-[70%] px-8 xl:landscape:px-[10%]">
          <h1 className="text-[3rem]">Hiragana</h1>
          <Image
            src={"/images/hiragana.png"}
            alt="Hiragana cheatsheet"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-full object-contain object-center -z-10"
          />
        </div>
      </div>
      <Image
        src={"/images/pointing-shiba.png"}
        alt="Hiragana cheatsheet"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute bottom-0 right-0 w-auto h-[45%] xl:landscape:h-3/5 object-contain z-0"
      />
    </section>
  );
};

export default Library;
