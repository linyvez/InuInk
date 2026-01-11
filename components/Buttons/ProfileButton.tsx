"use client";
import Image from "next/image";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { useState } from "react";

const ProfileButton = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="relative w-10 aspect-square hover:scale-110 transition"
        onClick={() => setDropDownMenu((prevState) => !prevState)}
      >
        <Image
          src="/images/profile.png"
          alt="Profile icon"
          fill={true}
          className="object-contain"
        />
      </button>

      {dropDownMenu && <DropDownMenu />}
    </div>
  );
};

export default ProfileButton;
