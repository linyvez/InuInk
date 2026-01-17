import { scaleCoords } from "./scaleCoords";

const TOLERANCE = 30;

type Point = {
  x: number;
  y: number;
};

function getDistance(userPoint: Point, trueA: Point, trueB: Point) {
  // Source - https://stackoverflow.com/questions/849211/shortest-distance-between-a-point-and-a-line-segment
  var A = userPoint.x - trueA.x;
  var B = userPoint.y - trueA.y;
  var C = trueB.x - trueA.x;
  var D = trueB.y - trueA.y;

  var dot = A * C + B * D;
  var len_sq = C * C + D * D;
  var param = -1;
  if (len_sq != 0) param = dot / len_sq;

  var xx, yy;

  if (param < 0) {
    xx = trueA.x;
    yy = trueA.y;
  } else if (param > 1) {
    xx = trueB.x;
    yy = trueB.y;
  } else {
    xx = trueA.x + param * C;
    yy = trueA.y + param * D;
  }

  var dx = userPoint.x - xx;
  var dy = userPoint.y - yy;
  return Math.sqrt(dx * dx + dy * dy);
}

export const checkAnswer = (
  userInput: number[][][],
  groundTruth: Character,
  canvasWidth: number,
  canvasHeight: number
): boolean => {
  if (userInput.length !== groundTruth.numStrokes) return false;

  const trueStrokes = groundTruth.medians;

  for (let strokeId = 0; strokeId < userInput.length; strokeId++) {
    const userStroke = userInput[strokeId];
    const trueStroke = trueStrokes[strokeId].value as number[][];

    let totalDistance = 0;
    for (const point of userStroke) {
      const userPoint = { x: point[0], y: point[1] };

      let minDistance = Infinity;

      for (let i = 0; i < trueStroke.length - 1; i++) {
        const start = { x: trueStroke[i][0], y: trueStroke[i][1] };
        const end = { x: trueStroke[i + 1][0], y: trueStroke[i + 1][1] };

        const startScaled = scaleCoords(start, canvasWidth, canvasHeight);
        const endScaled = scaleCoords(end, canvasWidth, canvasHeight);

        const dist = getDistance(userPoint, startScaled, endScaled);

        minDistance = dist < minDistance ? dist : minDistance;
      }
      totalDistance += minDistance;
    }

    const averageDist = totalDistance / userStroke.length;
    if (averageDist > TOLERANCE) return false;
  }

  return true;
};
