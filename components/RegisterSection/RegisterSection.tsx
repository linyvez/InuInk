import Image from "next/image";
import Form from "../Form/Form";

const RegisterSection = () => {
  return (
    <section className="flex-1 relative w-full h-full flex justify-center items-center overflow-hidden pt-5">
      <section className="relative w-1/2 h-full">
        <div className="absolute left-[30%] top-[10%] grid place-items-center h-60 aspect-square">
          <div className="col-start-1 row-start-1 w-full h-full relative">
            <Image
              src={"/images/cloud-msg.png"}
              alt="Cloud message"
              fill
              className="object-contain -scale-x-100"
            />
          </div>
          <span className="col-start-1 row-start-1 text-center z-10 text-[1rem] lg:text-[2rem] leading-tight tracking-widest">
            Become
            <br />
            my best
            <br />
            student!
          </span>
        </div>

        <div className="absolute bottom-[3%] left-[5%] w-[70%] h-[80%]">
          <Image
            src={"/images/shiba-writer.png"}
            alt="Shiba Inu Writer"
            fill
            className="object-contain object-bottom-left"
          />
        </div>
      </section>

      <section className="relative grid place-items-center w-1/2 h-full p-[3%]">
        <div className="col-start-1 row-start-1 w-full h-full relative">
          <Image
            src={"/images/practice_background.png"}
            alt="Practice scroll background"
            fill
            sizes="100vw"
            className=" object-contain -z-10 rotate-90"
          />
        </div>

        <div className="col-start-1 row-start-1 w-full h-full flex flex-col gap-[5%] items-center p-[10%]">
          <h1 className="text-center text-[2rem] lg:text-[4rem] tracking-widest">
            SAVE YOUR
            <br />
            PROGRESS
          </h1>

          <Form />
        </div>
      </section>
    </section>
  );
};

export default RegisterSection;
