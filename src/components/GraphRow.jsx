import React from "react";
import { XYPlot,VerticalBarSeries, XAxis, YAxis} from "react-vis";
import { useSelector, useDispatch } from 'react-redux';
import SolutionQubitsRow from "./SolutionQubitsRow";

function GraphRow(props) {

    var data = useSelector((state) => state.groverData.value);
    var currentStep = useSelector((state) => state.currentStep.value);
    return (
        <div>
            <SolutionQubitsRow/>
            <div className="Graph-row">
                {data.length !== 0?
                    <XYPlot 
                        animation 
                        height={200} 
                        width={900} 
                        yDomain={[-1.0, 1.0]}
                        y0={0.0}
                    >
                        <XAxis title="Values"
                            style={{
                                line: {stroke: '#ADDDE1'},
                                ticks: {stroke: '#ADDDE1'},
                                text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                            }}
                        />
                        <YAxis title="Amplitudes"
                        y0={0.0} style={{
                            line: {stroke: '#ADDDE1'},
                            ticks: {stroke: '#ADDDE1'},
                            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                            }}
                        />
                        <VerticalBarSeries y0={0.0} data={data.length !== 0? data[currentStep]: data} />
                    </XYPlot>:
                    <div className="Loading-container">
                        {/* <BallTriangle stroke="#FFFFFF"/> */}
                    </div>
                }
            </div>
        </div>
    );
};

export default GraphRow;