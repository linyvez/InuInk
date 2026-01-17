"use client";

import Image from "next/image";
import HankuButton from "../Buttons/HankuButton";
import { authGateway } from "@/actions/auth";
import { useActionState, useContext, useEffect, useState } from "react";
import RegisterContext from "../RegisterSection/RegisterContext";
import { useAuth } from "@/providers/AuthProvider";

const initialState: AuthState = { success: false, message: "", login: null };

const Form = () => {
  const signUpForm = useContext(RegisterContext);
  const { user, setUser } = useAuth();
  const [state, formAction] = useActionState(authGateway, initialState);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (user) return;

    if (!signUpForm && state.success && state.login) {
      setUser({ login: state.login });
    }
  }, [state, signUpForm, user, setUser]);

  useEffect(() => {
    if (state.message) setIsDirty(false);
  }, [state.message]);

  const handleInput = () => {
    if (!isDirty && state.message) setIsDirty(true);
  };

  return (
    <form
      action={formAction}
      className="lg:flex-1 lg:h-full w-full md:w-4/5 lg:landscape:w-3/5 flex flex-col lg:justify-center gap-5 md:gap-10 lg:landscape:gap-2 xl:landscape:gap-5 items-center text-[1.5rem] lg:landscape:text-[1rem] xl:landscape:text-[1.5rem]"
    >
      <div className="relative w-full h-10 flex flex-col">
        <input
          name="login"
          placeholder="Input your login..."
          className="z-10 bg-transparent outline-0"
          onChange={handleInput}
        />
        <Image
          src={"/images/line.png"}
          alt="Input line"
          width={0}
          height={0}
          sizes="100%"
          className="object-contain w-full h-10"
        />
      </div>

      <div className="relative w-full h-10 flex flex-col">
        <input
          name="password"
          placeholder="Input your password..."
          className="z-10 bg-transparent outline-0"
        />
        <Image
          src={"/images/line.png"}
          alt="Input line"
          width={0}
          height={0}
          sizes="100%"
          className="object-contain w-full h-10"
        />
      </div>

      {state.message && !isDirty && (
        <div
          className={`w-full ${
            state["success"]
              ? "bg-green-400/20 outline-green-500 text-green-600"
              : "bg-main-red/20 outline-main-red text-main-red"
          } outline-2 rounded-lg  p-3 text-[1rem] text-left`}
        >
          <p>{state["message"]}</p>
        </div>
      )}

      <HankuButton
        color="red"
        type="submit"
        heading={signUpForm ? "SIGN UP" : "LOG IN"}
        name="intent"
        value={signUpForm ? "signup" : "login"}
      />
    </form>
  );
};

export default Form;
