import React from "react";

export const GuideLines = ({ properties }) => {
  const { pixelSize, gridSize } = properties;
  const zIndex = properties.zIndex ? properties.zIndex : 0;
  // console.log(properties);
  return (
    <div
      className="guideline"
      style={{
        height: pixelSize * gridSize + 0.7,
        width: pixelSize * gridSize + 0.7,
        position: "absolute",
        zIndex,
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        pointerEvents="none"
      >
        <defs>
          <pattern
            id="smallGrid"
            width={pixelSize}
            height={pixelSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${pixelSize} 0 L 0 0 0 ${pixelSize}`}
              fill="none"
              stroke="gray"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="grid"
            width={pixelSize * 8}
            height={pixelSize * 8}
            patternUnits="userSpaceOnUse"
          >
            <rect
              width={pixelSize * 8}
              height={pixelSize * 8}
              fill="url(#smallGrid)"
              pointerEvents="none"
            />
            <path
              d={`M ${pixelSize * 8} 0 L 0 0 0 ${pixelSize * 8}`}
              fill="none"
              stroke="grey"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
};
