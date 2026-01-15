import Link from "next/link";

interface Props {
  heading: string;
}

const CloudButton = ({ heading }: Props) => {
  return (
    <Link
      href={"/practice"}
      className="w-[40%] xl:w-2/12 absolute bottom-30 z-20 flex flex-col justify-center items-center text-center text-white text-[1.5rem] lg:text-[2rem] hover:[text-shadow:0_0_15px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.4)] hover:scale-110 transition animate-bounceSlow"
    >
      <img
        src={"/images/practice_button.png"}
        alt="Practice now button"
        className="absolute -z-10 object-contain"
      />
      {heading}
    </Link>
  );
};

export default CloudButton;
