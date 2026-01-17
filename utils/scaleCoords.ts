const DATA_GRID_SIZE = 1024;

export const scaleCoords = (
  { x, y }: { x: number; y: number },
  canvasWidth: number,
  canvasHeight: number
) => {
  const scale = Math.min(
    canvasWidth / DATA_GRID_SIZE,
    canvasHeight / DATA_GRID_SIZE
  );

  const offsetX = (canvasWidth - DATA_GRID_SIZE * scale) / 2;
  const offsetY = (canvasHeight - DATA_GRID_SIZE * scale) / 2;

  return {
    x: x * scale + offsetX,
    y: y * scale + offsetY,
  };
};
