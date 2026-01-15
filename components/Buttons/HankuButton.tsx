"use client";

import Image from "next/image";

interface Props {
  heading: string;
  color: "red" | "black";
  type: "button" | "submit";
  name?: string;
  value?: any;
  onHankuButton?: () => void;
}

const HankuButton = ({
  heading,
  color,
  type,
  name,
  value,
  onHankuButton,
}: Props) => {
  const buttonSrc =
    color === "red" ? "/images/red-stamp.png" : "/images/black-stamp.png";

  return (
    <button
      type={type}
      name={name}
      value={value}
      className="relative flex w-24 md:w-30 lg:w-36 aspect-square justify-center items-center z-10"
      onClick={onHankuButton}
    >
      <Image
        src={buttonSrc}
        alt="Hanku button"
        fill
        className="object-contain -z-10"
      />
      <span className="text-white text-[1rem] md:text-[1.5rem] w-min leading-tight">
        {heading}
      </span>
    </button>
  );
};

export default HankuButton;
