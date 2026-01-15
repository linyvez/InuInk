"use client";

import Image from "next/image";
import Form from "../Form/Form";
import { useState } from "react";
import RegisterContext from "./RegisterContext";

const RegisterSection = () => {
  const [signUpForm, setSignUpForm] = useState(true);

  return (
    <section className="flex-1 relative w-full h-full flex flex-col xl:flex-row xl:justify-center items-end overflow-hidden xl:pt-5">
      <section className="absolute bottom-0 left-0 xl:relative w-full xl:w-1/2 h-1/3 xl:h-full z-10">
        <div className="absolute flex items-start bottom-0 xl:bottom-[3%] xl:left-[5%] w-auto h-[80%]">
          <Image
            src={"/images/shiba-writer.png"}
            alt="Shiba Inu Writer"
            width={662}
            height={624}
            className="h-full w-auto object-contain object-bottom-left"
          />

          <div className="xl:absolute xl:left-[30%] xl:-top-[20%] grid place-items-center h-30 md:h-50 xl:h-60 aspect-square">
            <div className="col-start-1 row-start-1 w-full h-full relative">
              <Image
                src={"/images/cloud-msg.png"}
                alt="Cloud message"
                fill
                className="object-contain -scale-x-100"
              />
            </div>
            <span className="col-start-1 row-start-1 text-center z-10 text-[1rem] md:text-[1.5rem] xl:text-[2rem] leading-tight tracking-widest">
              Become
              <br />
              my best
              <br />
              student!
            </span>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center w-full xl:w-1/2 h-full py-5">
        <div className="w-fit xl:w-auto h-full relative">
          <Image
            src={"/images/form_background.png"}
            alt="Practice scroll background"
            width={804}
            height={1077}
            className="h-full w-auto object-fill -z-10"
          />

          <div className="absolute inset-0 w-full h-3/4 xl:h-full flex flex-col gap-[3%] xl:gap-[5%] items-center p-[15%] xl:py-[15%] xl:px-0">
            <h1 className="text-center text-[2rem] md:text-[3rem] tracking-widest">
              {signUpForm ? "SAVE" : "ACCESS"} YOUR
              <br />
              PROGRESS
            </h1>

            <RegisterContext.Provider value={signUpForm}>
              <Form />
            </RegisterContext.Provider>

            <p className="relative text-[1rem] md:text-[1.5rem]">
              {signUpForm ? "Already" : "Want to become"} part of our school?{" "}
              <button
                type="button"
                onClick={() => setSignUpForm((prev) => !prev)}
              >
                <strong className="inline-block">
                  {signUpForm ? "Log in" : "Sign up"}
                </strong>
              </button>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RegisterSection;
