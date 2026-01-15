import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="flex-1 relative w-full h-full flex flex-col xl:flex-row justify-center items-center overflow-hidden md:px-10 xl:px-0">
      <section className="relative h-1/2 w-full xl:w-1/2 xl:h-full grid grid-rows-3 p-3">
        <div className="relative flex w-auto h-full justify-end items-center text-center pt-5">
          <div className="relative w-auto h-[140%] md:h-[160%] xl:h-[120%] flex justify-center items-center">
            <Image
              src={"/images/master-hiragana.png"}
              alt="Message background"
              width={600}
              height={363}
              className="object-fill w-auto h-full"
            />

            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] tracking-widest z-10">
              Master hiragana calligraphy
            </p>
          </div>
        </div>

        <div className="relative flex w-auto h-full justify-start items-center text-center">
          <div className="relative w-auto h-full md:h-[130%] xl:h-full flex justify-center items-center">
            <Image
              src={"/images/learn-new.png"}
              alt="Message background"
              width={389}
              height={224}
              className="object-fill w-auto h-full"
            />
            <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] tracking-widest z-10">
              Learn new characters
            </p>
          </div>
        </div>

        <div className="relative flex w-auto h-full justify-center items-center text-center pl-[15%]">
          <div className="relative w-auto h-[120%] md:h-[120%] xl:h-[110%] flex justify-center items-center">
            <Image
              src={"/images/get-instant.png"}
              alt="Message background"
              width={389}
              height={224}
              className="object-fill w-auto h-full"
            />

            <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] tracking-widest z-10 whitespace-nowrap">
              Get instant <br />
              validation and support <br />
              from Sensei Shiba <br />
              Inu!
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-5/8 w-full xl:w-1/2 xl:h-full">
        <Link
          href={"/practice"}
          className="absolute bottom-[3%] right-0 xl:right-[5%] w-[70%] xl:w-[60%] h-[70%] hover:scale-110 transition"
        >
          <Image
            src={"/images/happy-shiba.png"}
            alt="Happy Shiba Inu"
            fill
            className="object-contain"
          />
        </Link>

        <div className="absolute grid place-items-center h-20 md:h-40 aspect-square right-[3%] bottom-40 md:bottom-1/3">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/cloud-msg.png"}
              alt="Cloud message"
              fill
              className="object-contain -scale-x-100"
            />
          </div>
          <span className="col-start-1 row-start-1 text-center z-10 text-[1rem] md:text-[2rem] leading-tight tracking-widest">
            Click
            <br />
            me!
          </span>
        </div>

        <div className="absolute grid place-items-center h-35 md:h-50 aspect-square left-[5%] md:left-[20%] xl:left-[15%] bottom-[25%]">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/cloud-msg.png"}
              alt="Cloud message"
              fill
              className="object-contain"
            />
          </div>
          <span className="col-start-1 row-start-1 text-center z-10 text-[1.5rem] md:text-[2rem] leading-tight tracking-widest">
            あなたは
            <br />
            できる！
          </span>
        </div>

        <div className="absolute grid place-items-center h-40 xl:h-50 aspect-square top-5 xl:top-[10%] right-[30%]">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/cloud-msg.png"}
              alt="Cloud message"
              fill
              className="object-contain"
            />
          </div>
          <span className="col-start-1 row-start-1 text-center z-10 text-[1.5rem] xl:text-[2rem] leading-tight tracking-widest">
            Keep
            <br />
            going!
          </span>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
