import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Select, SIZE } from "baseui/select";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { connect } from "react-redux";
import { updateGrid } from "../../redux/plotterConfig/plotter.action";
import { updatePixel, clearGrid } from "../../redux/pixelData/pixelData.action";

const PlotterConfig = (props) => {
  const { updateGrid, plotterConfig, updatePixel, clearGrid } = props;
  // console.log(plotterConfig);
  const [gridSize, setGridSize] = React.useState();
  const [duration, setDuration] = React.useState();
  const [color, setColor] = React.useState(plotterConfig.color);
  const isValidColor = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(color);
  return (
    <FlexGrid
      flexGridColumnCount={4}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      <FlexGridItem>
        <FormControl label="Grid Size">
          <Select
            id="gridSize"
            value={gridSize}
            searchable={false}
            placeholder={`${plotterConfig.gridSize} x ${plotterConfig.gridSize}`}
            onChange={({ value }) => {
              setGridSize(value);
              console.log(value[0].value);
              updateGrid({
                gridSize: value[0].value,
                duration: plotterConfig.duration,
                color: plotterConfig.color,
              });
            }}
            options={[
              { id: "8", gridSize: "8 x 8", value: 8 },
              { id: "16", gridSize: "16 x 16", value: 16 },
              { id: "32", gridSize: "32 x 32", value: 32 },
              { id: "64", gridSize: "64 x 64", value: 64 },
              { id: "128", gridSize: "128 x 128", value: 128 },
            ]}
            labelKey="gridSize"
            valueKey="gridSize"
            size={SIZE.compact}
            required
          />
        </FormControl>
      </FlexGridItem>
      <FlexGridItem>
        <FormControl label="Duration">
          <Select
            id="duration"
            searchable={false}
            placeholder={`${plotterConfig.duration / 1000}s`}
            value={duration}
            onChange={({ value }) => {
              setDuration(value);
              updateGrid({
                duration: value[0].value,
                gridSize: plotterConfig.gridSize,
                color: plotterConfig.color,
              });
            }}
            options={[
              { id: "500", duration: "0.5s", value: 500 },
              { id: "1000", duration: "1s", value: 1000 },
              { id: "2000", duration: "2s", value: 2000 },
              { id: "4000", duration: "4s", value: 4000 },
              { id: "8000", duration: "8s", value: 8000 },
            ]}
            labelKey="duration"
            valueKey="duration"
            size={SIZE.compact}
          />
        </FormControl>
      </FlexGridItem>
      <FlexGridItem>
        <Block margin="scale900"></Block>
        <Button size={SIZE.compact} kind="primary" onClick={() => clearGrid()}>
          Clear
        </Button>
      </FlexGridItem>
      <FlexGridItem>
        <FormControl label="Pixel Color">
          <Input
            type="text"
            size={SIZE.compact}
            max={7}
            min={7}
            value={color}
            error={!isValidColor}
            onChange={(e) => {
              setColor(e.target.value);
              updateGrid({
                duration: plotterConfig.duration,
                gridSize: plotterConfig.gridSize,
                color: e.target.value,
              });
            }}
          />
        </FormControl>
      </FlexGridItem>
    </FlexGrid>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updateGrid: (payload) => dispatch(updateGrid(payload)),
  updatePixel: (payload) => dispatch(updatePixel(payload)),
  clearGrid: () => dispatch(clearGrid()),
});
const mapStateToProps = (state) => ({
  plotterConfig: state.plotter.plotterConfig,
});

export default connect(mapStateToProps, mapDispatchToProps)(PlotterConfig);
