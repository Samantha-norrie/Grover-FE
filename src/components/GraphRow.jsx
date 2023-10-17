import React from "react";
import { XYPlot,VerticalBarSeries, XAxis, YAxis, LineSeries, HorizontalGridLines } from "react-vis";
import HadamardGate from "./HadamardGate";

const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

function GraphRow(props) {
    return (
        <div>
            <XYPlot height={200} width={600}>
                <VerticalBarSeries data={data} />
                <XAxis title="Values" />
                <YAxis title="Amplitudes" />
            </XYPlot>
        </div>
    );
};

export default GraphRow;