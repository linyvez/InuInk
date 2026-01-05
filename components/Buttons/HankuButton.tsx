"use client";

import Image from "next/image";

interface Props {
  heading: string;
  color: "red" | "black";
  onHankuButton: () => void;
}

const HankuButton = ({ heading, color, onHankuButton }: Props) => {
  const buttonSrc =
    color === "red" ? "/images/red-stamp.png" : "/images/black-stamp.png";

  return (
    <button
      type="button"
      className="relative flex w-24 lg:w-36 aspect-square justify-center items-center"
      onClick={onHankuButton}
    >
      <Image
        src={buttonSrc}
        alt="Hanku button"
        fill
        className="object-contain -z-10"
      />
      <span className="text-white text-[1rem] lg:text-[1.5rem] w-min">
        {heading}
      </span>
    </button>
  );
};

export default HankuButton;
