"use client";

import Image from "next/image";

interface Props {
  onErase: () => void;
}

const EraseButton = ({ onErase }: Props) => {
  return (
    <button
      type="button"
      className="absolute w-fit h-fit top-[10%] right-[3%] lg:top-auto lg:right-auto lg:bottom-[10%] md:top-[8%] md:right-[10%] lg:left-[10%] p-5 flex flex-col justify-center items-center"
      onClick={onErase}
    >
      <Image
        src={"/images/erase_icon.png"}
        alt="Erase"
        width={60}
        height={60}
      />
      <span className="text-[1rem] md:text-[1.5rem]">Clear</span>
    </button>
  );
};

export default EraseButton;
