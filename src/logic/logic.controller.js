import dda from "./algorithm/dda.line";

export const logicController = (algoFor, algo, data) => {
  const { x1, y1, x2, y2, radius } = data;
  let pointData = [];
  // console.log("from logic controller", dda);
  if (algoFor === "line") {
    switch (algo) {
      case "dda":
        pointData.length = 0;
        // console.log("pointData", pointData);
        pointData = dda(x1, y1, x2, y2);
        // console.log("pointData", pointData);
        return pointData;

      default:
        break;
    }
  }
};
