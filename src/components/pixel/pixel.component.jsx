import * as React from "react";
import { StatefulPopover, TRIGGER_TYPE } from "baseui/popover";
import { Block } from "baseui/block";

const Pixel = ({ properties }) => {
  let { pixelSize, x, y, opacity, animation, color } = properties;
  opacity = opacity ? opacity : 0;
  let bgcolor = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(color) ? color : "red";
  return (
    <StatefulPopover
      content={() => (
        <Block
          padding={"5px 10px"}
          backgroundColor="#333333"
          color="white"
          border="1px white solid"
          $style={{ border: "1px white solid" }}
        >{`(${x - 1},${y - 1})`}</Block>
      )}
      triggerType={TRIGGER_TYPE.hover}
      returnFocus
      autoFocus
      showArrow={true}
    >
      <div
        id={`${x}_${y}`}
        style={{
          gridColumnStart: `${x}`,
          gridRowStart: `${y}`,
          width: pixelSize,
          height: pixelSize,
          opacity: opacity,
          backgroundColor: bgcolor,
          animation,
          zIndex: -2,
        }}
      />
    </StatefulPopover>
  );
};

export default Pixel;
