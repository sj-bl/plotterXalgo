import React from "react";
import "./canvas.style.scss";
import { connect } from "react-redux";
import { GuideLines } from "../guidelines/guideline.component";
import Pixel from "../pixel/pixel.component";
class Canvas extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { gridSize, duration, color } = this.props.plotterConfig;
    const { pixelData } = this.props;

    // console.log(gridSize, duration);
    let pixelSize = 8;

    switch (gridSize) {
      case 128:
        pixelSize = 4;
        break;
      case 64:
        pixelSize = 8;
        break;
      case 32:
        pixelSize = 16;
        break;
      case 16:
        pixelSize = 32;
        break;
      case 8:
        pixelSize = 64;
        break;
      default:
        break;
    }

    // console.log(pixelSize);
    return (
      <div className="plotter-container" style={{ position: "relative" }}>
        <GuideLines properties={{ gridSize, pixelSize, zIndex: -1 }} />
        <div
          className="pixel-map"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize},${pixelSize}px)`,
            gridTemplateRows: `repeat(${gridSize},${pixelSize}px)`,
            position: "absolute",
            zIndex: -3,
          }}
        >
          {pixelData.map((pixel, index) => {
            const { x, y, bgcolor, opacity } = pixel;

            const isVisiblePixel = x < gridSize && y < gridSize;
            const time = duration / 1000 / pixelData.length;
            let animation = `show  ${time}s ${time * index}s forwards`;
            if (isVisiblePixel) {
              return (
                <Pixel
                  properties={{
                    pixelSize,
                    x: x + 1,
                    y: y + 1,

                    opacity,
                    animation,
                    color,
                  }}
                  key={`${index}_${pixel.x}_${pixel.y}`}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    plotterConfig: state.plotter.plotterConfig,
    pixelData: state.pixelData.pixels,
  };
};

export default connect(mapStateToProps)(Canvas);
