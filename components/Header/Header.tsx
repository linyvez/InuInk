import Image from "next/image";
import HeaderButton from "../Buttons/HeaderButton";
import Link from "next/link";
import ProfileButton from "../Buttons/ProfileButton";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-fit bg-white/35 px-5 lg:px-10 py-5 lg:py-10 mx-5 lg:mx-10 rounded-2xl gap-4">
      <Link
        href="/"
        className="relative w-8 lg:w-16 aspect-square justify-start"
      >
        <Image
          src="/images/logo.png"
          alt="InuInk logo"
          fill
          className="object-contain"
        />
      </Link>

      <h1 className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center content-center text-center leading-none">
        <span className="text-[2rem] lg:text-[4rem] tracking-[0.26em] mr-[-0.26em]">
          INU
        </span>
        <span className="text-[1rem] lg:text-[2rem] tracking-[0.26em] mr-[-0.26em]">
          -INK-
        </span>
      </h1>

      <nav className="flex items-center-safe justify-end text-center leading-none gap-3 lg:gap-5">
        <Link
          href="/library"
          className="text-[0.5rem] lg:text-[1rem] tracking-[0.26em]"
        >
          Library
        </Link>
        <HeaderButton>PRACTICE</HeaderButton>
        <ProfileButton />
      </nav>
    </header>
  );
};

export default Header;
