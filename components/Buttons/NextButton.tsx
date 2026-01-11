"use client";

interface Props {
  type: "prev" | "next";
  onClick: () => void;
}

const NextButton = ({ type, onClick }: Props) => {
  return (
    <button
      type="button"
      className="absolute z-10 top-[50vh] flex bg-white/35 rounded-full aspect-square w-15 p-2 lg:p-4 hover:bg-white animate-bounce hover:animate-none"
      style={type === "prev" ? { left: 40 } : { right: 40 }}
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
