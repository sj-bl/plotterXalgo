import React, { useState } from "react";
import { Button, SIZE } from "baseui/button";
import { Input } from "baseui/input";
import { connect } from "react-redux";
import { updatePixel, clearGrid } from "../../redux/pixelData/pixelData.action";
// import data from "../../data";
import { Block } from "baseui/block";
import { Radio, RadioGroup } from "baseui/radio";
import { logicController } from "../../logic/logic.controller";
import { FormControl } from "baseui/form-control";

const UserInput = ({ updatePixel, pixels }) => {
  const [algorithmFor, setAlgorithmFor] = useState("line");
  const [algorithm, setAlgorithm] = useState("dda");
  const [x1, setx1] = useState(Number);
  const [y1, sety1] = useState(Number);
  const [x2, setx2] = useState(Number);
  const [y2, sety2] = useState(Number);
  const [radius, setRadius] = useState(Number);

  let data = [...pixels];
  return (
    <div className="main-input-container">
      <form>
        {/* <label htmlFor="algoFor" style>Algo For</label> */}
        <Block marginTop="5rem">
          <FormControl label="Algorithm For">
            <RadioGroup
              align="horizontal"
              name="horizontal"
              onChange={(e) => setAlgorithmFor(e.target.value)}
              value={algorithmFor}
              id="algoFor"
              label="Algo for"
              labelPlacement="right"
            >
              <Radio value="line">Line</Radio>
              <Radio value="circle">Circle</Radio>
            </RadioGroup>
          </FormControl>
          <FormControl label="Choose Algorithm">
            <RadioGroup
              align="horizontal"
              name="horizontal"
              onChange={(e) => setAlgorithm(e.target.value)}
              value={algorithm}
              id="algorithm"
              label="Algo for"
              labelPlacement="right"
            >
              <Radio value="dda">
                DDA {algorithmFor === "circle" ? "Circle" : "Line"} Generation
                Algorithm
              </Radio>
              <Radio value="bresenham">
                Bresenham’s {algorithmFor === "circle" ? "Circle " : "Line "}
                Generation Algorithm
              </Radio>

              <Radio value="mpa">
                Mid-Point {algorithmFor === "circle" ? "Circle" : "Line"}{" "}
                Drawing Algorithm
              </Radio>
            </RadioGroup>
          </FormControl>
        </Block>
        <Block margin="2rem 0">
          <b style={{ fontSize: "1.5rem", fontWeight: 400 }}>Co-ordinates :</b>
        </Block>
        <Block display="flex" justifyContent="space-evenly" width="50%">
          <FormControl label="X1 ">
            <Input
              type="number"
              autoFocus={true}
              min={0}
              max={128}
              required
              id="x1"
              value={x1}
              onChange={(e) => setx1(parseInt(e.target.value || "0"))}
              size={SIZE.compact}
            />
          </FormControl>
        </Block>

        <Block display="flex" width="50%">
          <FormControl label="Y1">
            <Input
              type="number"
              min={0}
              max={128}
              required
              id="y1"
              value={y1}
              onChange={(e) => sety1(parseInt(e.target.value || "0"))}
              size={SIZE.compact}
            />
          </FormControl>
        </Block>

        <Block
          display={algorithmFor === "circle" ? "none" : "flex"}
          width="50%"
        >
          <FormControl label="x2">
            <Input
              type="number"
              min={0}
              max={128}
              required
              id="x2"
              value={x2}
              onChange={(e) => setx2(parseInt(e.target.value || "0"))}
              size={SIZE.compact}
            />
          </FormControl>
        </Block>

        <Block
          display={algorithmFor === "circle" ? "none" : "flex"}
          width="50%"
        >
          <FormControl label="Y2 ">
            <Input
              type={"number"}
              min={0}
              max={128}
              required
              id="y2"
              value={y2}
              onChange={(e) => {
                sety2(parseInt(e.target.value || "0"));
              }}
              size={SIZE.compact}
            />
          </FormControl>
        </Block>
        <Block
          display={algorithmFor === "circle" ? "flex" : "none"}
          width="50%"
        >
          <FormControl label="Radius ">
            <Input
              type="number"
              min={0}
              required
              id="radius"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value || "0"))}
              size={SIZE.compact}
            />
          </FormControl>
        </Block>

        <Block width="1rem"></Block>
        <Button
          type="submit"
          kind="primary"
          value="Plot"
          onClick={(e) => {
            e.preventDefault();
            // console.log(x1, y1, x2, y2, radius);

            data = [
              ...data,
              ...logicController(algorithmFor, algorithm, {
                x1,
                y1,
                x2,
                y2,
                radius,
              }),
            ];
            // console.log("data", data);
            updatePixel(data);
          }}
        >
          Plot
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => {
  return {
    updatePixel: (payload) => dispatch(updatePixel(payload)),
    clearGrid: () => dispatch(clearGrid()),
  };
};

const mapStateToProps = (state) => {
  return {
    pixels: state.pixelData.pixels,
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(UserInput);
