"use client";

const NextButton = () => {
  return (
    <button
      type="button"
      className="absolute right-10 top-[50vh] flex bg-white/35 rounded-full aspect-square w-15 p-2 lg:p-4 hover:bg-white"
    >
      <img src={"/images/arrow_next.png"} alt="Next slide" />
    </button>
  );
};

export default NextButton;
