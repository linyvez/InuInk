interface Props {
  active: number;
}

const SliderDots = ({ active }: Props) => {
  function check(key: number): string {
    return active === key ? "bg-main-red" : "bg-gray-400";
  }
  return (
    <div className="absolute justify-center bottom-0 w-full h-fit flex z-30 p-3 gap-3">
      <div className={`rounded-full ${check(0)} w-3 h-3`} />
      <div className={`rounded-full ${check(1)} w-3 h-3`} />
      <div className={`rounded-full ${check(2)} w-3 h-3`} />
    </div>
  );
};

export default SliderDots;
