import Image from "next/image";
import HeaderButton from "../Buttons/HeaderButton";
import Link from "next/link";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center landscape:h-[clamp(50px,15vh,150px)] portrait:h-[clamp(50px,10vh,150px)] bg-white/35 px-5 md:px-10 py-5 md:py-10 mx-5 md:mx-10 rounded-2xl gap-2 md:gap-4">
      <Link
        href="/"
        className="relative flex shrink-0 w-8 md:w-10 aspect-square justify-start"
      >
        <Image
          src="/images/logo.png"
          alt="InuInk logo"
          fill
          sizes="60px"
          className="w-full h-full object-contain"
        />
      </Link>

      <h1 className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center content-center text-center leading-none">
        <span className="text-[2rem] md:text-[clamp(2rem,8vh,4rem)] tracking-[0.26em] mr-[-0.26em]">
          INU
        </span>
        <span className="text-[1rem] md:text-[clamp(1rem,4vh,2rem)] tracking-[0.26em] mr-[-0.26em]">
          -INK-
        </span>
      </h1>

      <div className="flex-1">
        <Link
          href="/library"
          className="text-[0.7rem] md:text-[1rem] tracking-[0.26em] hover:scale-110 transition"
        >
          Library
        </Link>
      </div>

      <nav className="flex items-center-safe justify-end text-center leading-none gap-2 md:gap-5">
        <HeaderButton>PRACTICE</HeaderButton>
        <DropDownMenu />
      </nav>
    </header>
  );
};

export default Header;
