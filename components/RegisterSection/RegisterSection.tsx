"use client";

import Image from "next/image";
import Form from "../Form/Form";
import { useState } from "react";
import RegisterContext from "./RegisterContext";

const RegisterSection = () => {
  const [signUpForm, setSignUpForm] = useState(true);

  return (
    <section className="flex-1 relative w-full h-full flex flex-col lg:landscape:flex-row lg:landscape:justify-center items-end overflow-hidden lg:landscape:pt-5">
      <section className="absolute bottom-0 left-0 lg:landscape:relative w-full lg:landscape:w-1/2 h-1/3 lg:landscape:h-full z-10">
        <div className="absolute flex items-start bottom-0 lg:landscape:bottom-[3%] lg:landscape:left-[5%] w-auto h-[80%]">
          <Image
            src={"/images/shiba-writer.png"}
            alt="Shiba Inu Writer"
            width={662}
            height={624}
            className="h-full w-auto object-contain object-bottom-left"
          />

          <div className="lg:landscape:absolute lg:landscape:left-[30%] lg:landscape:-top-[20%] grid place-items-center h-30 md:h-50 lg:landscape:h-40 xl:landscape:h-60 aspect-square">
            <div className="col-start-1 row-start-1 w-full h-full relative">
              <Image
                src={"/images/cloud-msg.png"}
                alt="Cloud message"
                fill
                className="object-contain -scale-x-100"
              />
            </div>
            <span className="col-start-1 row-start-1 text-center z-10 text-[1rem] md:text-[1.5rem] lg:landscape:text-[1.5rem] xl:landscape:text-[2rem] leading-tight tracking-widest">
              Become
              <br />
              my best
              <br />
              student!
            </span>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center w-full lg:landscape:w-1/2 h-full py-5">
        <div className="w-fit lg:landscape:w-auto h-full relative">
          <Image
            src={"/images/form_background.png"}
            alt="Practice scroll background"
            width={804}
            height={1077}
            className="h-full w-auto object-fill -z-10"
          />

          <div className="absolute inset-0 w-full h-3/4 lg:landscape:h-full flex flex-col gap-[3%] lg:landscape:gap-0 xl:landscape:gap-[5%] items-center p-[15%] lg:landscape:py-[15%] lg:landscape:px-0">
            <h1 className="text-center text-[2rem] md:text-[3rem] lg:landscape:text-[2rem] xl:landscape:text-[3rem] tracking-widest">
              {signUpForm ? "SAVE" : "ACCESS"} YOUR
              <br />
              PROGRESS
            </h1>

            <RegisterContext.Provider value={signUpForm}>
              <Form />
            </RegisterContext.Provider>

            <p className="relative text-[1rem] md:text-[1.5rem] lg:landscape:text-[1rem] xl:landscape:text-[1.5rem]">
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
