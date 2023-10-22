import React from "react";
import { XYPlot,VerticalBarSeries, XAxis, YAxis, LineSeries, HorizontalGridLines } from "react-vis";
import HadamardGate from "./HadamardGate";
import { useSelector, useDispatch } from 'react-redux';
import { Circles } from "react-loading-icons";
import BallTriangle from "react-loading-icons/dist/esm/components/ball-triangle";

function GraphRow(props) {

    var data = useSelector((state) => state.groverData.value);
    var currentStep = useSelector((state) => state.currentStep.value);
    return (
        <div>
            {data.length !== 0?
                <XYPlot height={200} width={600} yDomain={[0, 1.0]}>
                    <VerticalBarSeries data={data.length !== 0? data[currentStep]: data} />
                    <XAxis title="Values" />
                    <YAxis title="Amplitudes" />
                </XYPlot>:
                <BallTriangle stroke="#000000"/>
            }
        </div>
    );
};

export default GraphRow;