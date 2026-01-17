import { Ref } from "react";

interface Props {
  canvasRef: Ref<HTMLCanvasElement> | undefined;
}

const Canvas = ({ canvasRef }: Props) => {
  return (
    <canvas ref={canvasRef} className="h-full w-full border-2 z-50"></canvas>
  );
};

export default Canvas;
