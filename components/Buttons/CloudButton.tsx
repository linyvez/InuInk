"use client";
interface Props {
  heading: string;
}

const CloudButton = ({ heading }: Props) => {
  return (
    <button
      type="button"
      onClick={() => console.log("Clicked practice now.")}
      className="w-2/12 absolute bottom-30 z-20 flex flex-col justify-center text-center text-white text-[1rem] lg:text-[2rem] hover:[text-shadow:0_0_15px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.4)]"
    >
      <img
        src={"/images/practice_button.png"}
        alt="Practice now button"
        className="absolute -z-10 object-contain"
      />
      {heading}
    </button>
  );
};

export default CloudButton;
