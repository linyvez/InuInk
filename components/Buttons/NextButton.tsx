"use client";

interface Props {
  type: "prev" | "next";
  onClick: () => void;
}

const NextButton = ({ type, onClick }: Props) => {
  return (
    <button
      type="button"
      key={type}
      className={`absolute ${
        type === "prev"
          ? "left-7 animate-halfSlideLeft"
          : "right-7 animate-halfSlideRight"
      } z-10 top-[50vh] flex bg-white/35 rounded-full aspect-square w-12 md:w-15 p-3 md:p-4 hover:bg-white`}
      onClick={onClick}
    >
      <img
        src={"/images/arrow_next.png"}
        alt="Next slide"
        className={type === "prev" ? "rotate-180" : ""}
      />
    </button>
  );
};

export default NextButton;
