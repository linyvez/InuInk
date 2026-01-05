import { drawLine } from "@/utils/drawingUtils";
import { useEffect, useRef } from "react";

export const useDrawing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);

  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.style.touchAction = "none";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const getCanvasCoordinates = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const drawing = (e: PointerEvent) => {
      const startPos = lastPos.current;
      if (!startPos || !isDrawingRef.current) return;

      const newPos = getCanvasCoordinates(e);
      console.log("Hello");

      drawLine(ctx, startPos, newPos, "black", 10);

      lastPos.current = newPos;
    };

    const endDrawing = (e: PointerEvent) => {
      isDrawingRef.current = false;
      console.log(isDrawingRef.current);
      lastPos.current = null;

      canvas.releasePointerCapture(e.pointerId);
    };

    const startDrawing = (e: PointerEvent) => {
      e.preventDefault();

      isDrawingRef.current = true;
      console.log(isDrawingRef.current);
      lastPos.current = getCanvasCoordinates(e);

      canvas.setPointerCapture(e.pointerId);
    };

    canvas.addEventListener("pointerdown", startDrawing);
    canvas.addEventListener("pointermove", drawing);
    canvas.addEventListener("pointerup", endDrawing);
    canvas.addEventListener("pointerleave", endDrawing);

    return () => {
      canvas.removeEventListener("pointerdown", startDrawing);
      canvas.removeEventListener("pointermove", drawing);
      canvas.removeEventListener("pointerup", endDrawing);
      canvas.removeEventListener("pointerleave", endDrawing);
    };
  }, []);

  return canvasRef;
};
