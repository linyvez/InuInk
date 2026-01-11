import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="flex-1 relative w-full h-full flex justify-center items-center overflow-hidden pt-5">
      <section className="w-1/2 h-full grid grid-rows-3 p-10">
        <div className="relative grid place-items-center">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/master-hiragana.png"}
              alt="Message background"
              fill
              className="object-right object-contain"
            />
          </div>
          <div className="col-start-1 row-start-1 w-full z-10 flex justify-end pr-[10%]">
            <p className="text-center text-[1.5rem] lg:text-[2.5rem] tracking-widest">
              Master hiragana
              <br />
              calligraphy
            </p>
          </div>
        </div>

        <div className="relative grid place-items-center">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/learn-new.png"}
              alt="Message background"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="col-start-1 row-start-1 w-full z-10 flex justify-start pl-[13%]">
            <p className="text-center text-[1.5rem] lg:text-[2.5rem] tracking-widest">
              Learn new
              <br />
              characters
            </p>
          </div>
        </div>

        <div className="relative grid place-items-center">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/get-instant.png"}
              alt="Message background"
              fill
              className="object-center object-contain"
            />
          </div>

          <div className="col-start-1 row-start-1 text-center flex justify-center z-10">
            <p className="text-center text-[1.5rem] lg:text-[2.5rem] tracking-widest leading-tight">
              Get instant
              <br />
              validation and support
              <br />
              from Sensei Shiba
              <br />
              Inu!
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-1/2 h-full">
        <Link
          href={"/practice"}
          className="absolute bottom-[3%] right-[5%] w-[60%] h-[70%] hover:scale-110 transition"
        >
          <Image
            src={"/images/happy-shiba.png"}
            alt="Happy Shiba Inu"
            fill
            className="object-contain"
          />
        </Link>

        <div className="absolute grid place-items-center h-40 aspect-square right-[3%] bottom-1/3">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/cloud-msg.png"}
              alt="Cloud message"
              fill
              className="object-contain -scale-x-100"
            />
          </div>
          <span className="col-start-1 row-start-1 text-center z-10 text-[1rem] lg:text-[2rem] leading-tight tracking-widest">
            Click
            <br />
            me!
          </span>
        </div>

        <div className="absolute grid place-items-center h-50 aspect-square left-[15%] bottom-[25%]">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/cloud-msg.png"}
              alt="Cloud message"
              fill
              className="object-contain"
            />
          </div>
          <span className="col-start-1 row-start-1 text-center z-10 text-[1rem] lg:text-[2rem] leading-tight tracking-widest">
            あなたは
            <br />
            できる！
          </span>
        </div>

        <div className="absolute grid place-items-center h-50 aspect-square top-[10%] right-[30%]">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/cloud-msg.png"}
              alt="Cloud message"
              fill
              className="object-contain"
            />
          </div>
          <span className="col-start-1 row-start-1 text-center z-10 text-[1rem] lg:text-[2rem] leading-tight tracking-widest">
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
