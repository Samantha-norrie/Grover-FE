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
                <XYPlot 
                    animation 
                    height={200} 
                    width={900} 
                    yDomain={[-1.0, 1.0]}
                >
                    <XAxis title="Values" style={{
                        line: {stroke: '#ADDDE1'},
                        ticks: {stroke: '#ADDDE1'},
                        text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                        }}
                    />
                    <YAxis title="Amplitudes" style={{
                        line: {stroke: '#ADDDE1'},
                        ticks: {stroke: '#ADDDE1'},
                        text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                        }}
                    />
                    <VerticalBarSeries data={data.length !== 0? data[currentStep]: data} />
                </XYPlot>:
                <div className="Loading-container">
                    <BallTriangle stroke="#FFFFFF"/>
                </div>
            }
        </div>
    );
};

export default GraphRow;