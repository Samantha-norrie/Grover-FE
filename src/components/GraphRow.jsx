import React from "react";
import { XYPlot,VerticalBarSeries, XAxis, YAxis} from "react-vis";
import { useSelector, useDispatch } from 'react-redux';
import SolutionValuesRow from "./SolutionValuesRow";
import rd3 from 'react-d3-library'
// TODO: Have this file use D3 for graph
const RD3Component = rd3.Component;
var BarChart = rd3.createBarChart;
 
function GraphRow(props) {

    var v_data = useSelector((state) => state.groverData.value);
    var currentStep = useSelector((state) => state.currentStep.value);

    const data = {}
    data.width = 500;
    data.height = 750;
    data.dataset = v_data;

    return (
        <div>
            <SolutionValuesRow/>
            <div className="Graph-row">
                {v_data.length !== 0 &&
                    <XYPlot 
                        animation 
                        height={200} 
                        width={900} 
                        yDomain={[-1.0, 1.0]}
                        // y0={0.0}
                    >
                        <XAxis title="Values"
                            style={{
                                line: {stroke: '#ADDDE1'},
                                ticks: {stroke: '#ADDDE1'},
                                text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                            }}
                        />
                        <YAxis title="Amplitudes"
                        // yDomain={[-1.0, 1.0]}
                        // y0={0.0} 
                        style={{
                            line: {stroke: '#ADDDE1'},
                            ticks: {stroke: '#ADDDE1'},
                            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                            }}
                        />
                        <VerticalBarSeries 
                            // y0={0.0} 
                            data={v_data.length !== 0? v_data[currentStep]: v_data} 
                        />
                    </XYPlot>
                    // :<div className="Loading-container">
                    //     {/* <BallTriangle stroke="#FFFFFF"/> */}
                    // </div>
                }
            </div>
        </div>
    );
};

export default GraphRow;