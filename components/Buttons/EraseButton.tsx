"use client";

import Image from "next/image";

interface Props {
  onErase: () => void;
}

const EraseButton = ({ onErase }: Props) => {
  return (
    <button
      type="button"
      className="absolute bottom-[10vh] left-[10vh] p-5 flex flex-col justify-center items-center"
      onClick={onErase}
    >
      <Image
        src={"/images/erase_icon.png"}
        alt="Erase"
        width={72}
        height={72}
      />
      <span className="text-[1rem] lg:text-[1.5rem]">Clear</span>
    </button>
  );
};

export default EraseButton;
