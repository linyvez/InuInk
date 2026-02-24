import Link from "next/link";

interface Props {
  children: string;
}

const HeaderButton = ({ children }: Props) => {
  return (
    <Link
      href={"/practice"}
      className="group relative items-center justify-center-safe inline-flex isolate overflow-hidden text-[0.5rem] md:text-[1rem] shrink-0 border-main-red border-3 lg:border-5 rounded-full p-2 md:p-3 tracking-[0.26em] hover:scale-110 transition"
    >
      <span className="absolute inset-0 bg-main-red transform rounded-full duration-500 ease-in-out scale-0 group-hover:scale-150"></span>
      <span className="relative transition-all duration-500 group-hover:text-white group-hover:[text-shadow:0_0_15px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.4)]">
        {children}
      </span>
    </Link>
  );
};

export default HeaderButton;
