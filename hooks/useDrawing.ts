import { drawLine } from "@/utils/drawingUtils";
import { useCallback, useEffect, useRef, useState } from "react";

export const useDrawing = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);

  const canvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (node !== null) setCanvas(node);
  }, []);

  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const historyRef = useRef<number[][][]>([]);
  const isNewStroke = useRef(true);
  const currentStroke = useRef(-1);

  useEffect(() => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.style.touchAction = "none";

    const getCanvasCoordinates = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || !entries[0]) return;

      const { width, height } = entries[0].contentRect;

      const newWidth = Math.floor(width);
      const newHeight = Math.floor(height);

      if (newWidth > 0 && newHeight > 0) {
        if (canvas.width !== newWidth || canvas.height !== newHeight) {
          canvas.width = newWidth;
          canvas.height = newHeight;
        }
      }
    });

    resizeObserver.observe(canvas);

    const startDrawing = (e: PointerEvent) => {
      e.preventDefault();

      isDrawingRef.current = true;
      lastPos.current = getCanvasCoordinates(e);

      currentStroke.current++;

      if (historyRef.current) {
        if (historyRef.current[currentStroke.current]) {
          historyRef.current[currentStroke.current].push([
            lastPos.current.x,
            lastPos.current.y,
          ]);
        } else {
          historyRef.current[currentStroke.current] = [
            [lastPos.current.x, lastPos.current.y],
          ];
        }
      }

      isNewStroke.current = false;

      canvas.setPointerCapture(e.pointerId);
    };

    const drawing = (e: PointerEvent) => {
      const startPos = lastPos.current;
      if (!startPos || !isDrawingRef.current) return;

      const newPos = getCanvasCoordinates(e);

      drawLine(ctx, startPos, newPos, "black", 10);

      lastPos.current = newPos;
    };

    const endDrawing = (e: PointerEvent) => {
      isDrawingRef.current = false;
      lastPos.current = null;
      isNewStroke.current = true;

      canvas.releasePointerCapture(e.pointerId);
    };

    canvas.addEventListener("pointerdown", startDrawing);
    canvas.addEventListener("pointermove", drawing);
    canvas.addEventListener("pointerup", endDrawing);
    canvas.addEventListener("pointerleave", endDrawing);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerdown", startDrawing);
      canvas.removeEventListener("pointermove", drawing);
      canvas.removeEventListener("pointerup", endDrawing);
      canvas.removeEventListener("pointerleave", endDrawing);
    };
  }, [canvas]);

  const clearCanvas = () => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      historyRef.current = [];
      currentStroke.current = -1;
    }
  };

  return { canvasRef, historyRef, clearCanvas, canvas };
};
