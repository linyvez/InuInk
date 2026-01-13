"use client";

import { logOutUser } from "@/actions/auth";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import ProfileButton from "../Buttons/ProfileButton";
import { useState } from "react";

const DropDownMenu = () => {
  const userContext = useAuth();
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <ProfileButton onClick={() => setVisible((prev) => !prev)} />
      {visible && (
        <div
          className="fixed inset-0 w-full h-full z-10 cursor-default"
          onClick={() => setVisible(false)}
        ></div>
      )}
      <div
        className={`absolute z-20 right-0 w-50 text-left text-sm bg-white rounded-xl py-3 mt-3 leading-7 shadow-2xl ${
          visible ? "" : "hidden"
        }`}
      >
        {!userContext?.user && (
          <div className="relative z-10 px-5">
            <Link
              href="/"
              onClick={() => setVisible(false)}
              className="inline-block hover:scale-110 transition cursor-pointer"
            >
              Sign Up | Log in
            </Link>
          </div>
        )}

        {userContext?.user && (
          <button
            type="button"
            className="relative z-10 w-full text-left px-5 leading-none"
            onClick={async () => {
              await logOutUser();
              userContext.setUser(null);
              setVisible(false);
              window.location.reload();
            }}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
