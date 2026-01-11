"use client";

import Image from "next/image";
import HankuButton from "../Buttons/HankuButton";
import { signUpUser } from "@/actions/auth";
import { useActionState } from "react";

const initialState = { message: "" };

const Form = () => {
  const [state, formAction] = useActionState(signUpUser, initialState);

  return (
    <form
      action={formAction}
      className="flex-1 h-full w-1/2 flex flex-col justify-between items-center text-[1.5rem]"
    >
      <div className="relative w-full h-20 flex flex-col">
        <input
          name="login"
          placeholder="Input your login..."
          className="z-10 bg-transparent outline-0"
        />
        <Image
          src={"/images/line.png"}
          alt="Input line"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative w-full h-20 flex flex-col">
        <input
          name="password"
          placeholder="Input your password..."
          className="z-10 bg-transparent outline-0"
        />
        <Image
          src={"/images/line.png"}
          alt="Input line"
          fill
          className="object-contain"
        />
      </div>

      <HankuButton color="red" type="submit" heading="SIGN UP" />

      <p>
        Already part of our school? <strong>Log in</strong>
      </p>
    </form>
  );
};

export default Form;
