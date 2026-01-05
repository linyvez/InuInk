const DropDownMenu = () => {
  return (
    <div className="absolute right-[1%] top-[11%] text-center text-sm bg-white rounded-xl p-3 leading-7">
      <a>Sign Up</a>
      <p className="leading-none">
        Already part of the school?
        <br />
        <a>Log in</a>
      </p>
    </div>
  );
};

export default DropDownMenu;
