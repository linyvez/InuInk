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
      className="flex-1 h-full w-1/2 flex flex-col justify-center gap-5 items-center text-[1.5rem]"
    >
      <div className="relative w-full h-20 flex flex-col">
        <input
          name="login"
          placeholder="Input your login..."
          className="z-10 bg-transparent outline-0"
          onChange={handleInput}
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
