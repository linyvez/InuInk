import Image from "next/image";

const Library = () => {
  return (
    <section className="relative flex-1 flex flex-col items-center py-[5%] px-[25%] h-full">
      <Image
        src={"/images/practice_background.png"}
        alt="Scroll background"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 w-auto h-full object-contain object-center -z-10"
      />
      <div className="flex flex-col justify-between text-center h-full">
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
      <Image
        src={"/images/pointing-shiba.png"}
        alt="Hiragana cheatsheet"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute bottom-0 right-0 w-auto h-3/5 object-contain z-0"
      />
    </section>
  );
};

export default Library;
