"use client";

interface Props {
  children: string;
}

// const HeaderButton = ({ children }: Props) => {
//   return (
//     <button
//       type="button"
//       className="text-[0.625rem] lg:text-[1.25rem] border-main-red border-3 lg:border-5 rounded-full p-3 lg:p-5 tracking-[0.26em]"
//       onClick={() => console.log("Clicked")}
//     >
//       {children}
//     </button>
//   );
// };

// export default HeaderButton;

const HeaderButton = ({ children }: Props) => {
  return (
    <button
      type="button"
      className="group relative items-center justify-center-safe inline-flex isolate overflow-hidden text-[0.5rem] lg:text-[1rem] shrink-0 border-main-red border-3 lg:border-5 rounded-full p-2 lg:p-3 tracking-[0.26em]"
      onClick={() => console.log("Clicked")}
    >
      <span className="absolute inset-0 bg-main-red transform rounded-full duration-500 ease-in-out scale-0 group-hover:scale-150"></span>
      <span className="relative transition-all duration-500 group-hover:text-white group-hover:[text-shadow:0_0_15px_rgba(255,255,255,1),0_0_20px_rgba(255,255,255,0.4)]">
        {children}
      </span>
    </button>
  );
};

export default HeaderButton;
