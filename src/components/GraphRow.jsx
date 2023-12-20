import React from "react";
import { XYPlot,VerticalBarSeries, XAxis, YAxis} from "react-vis";
import { useSelector, useDispatch } from 'react-redux';
import SolutionValuesRow from "./SolutionValuesRow";
import rd3 from 'react-d3-library'
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from './xy-axis.js';
import Grid from './grid.js';
import Bar from './bar.js';
import { transition } from 'd3-transition';

const RD3Component = rd3.Component;
var BarChart = rd3.createBarChart;
 
function GraphRow(props) {

    var v_data = useSelector((state) => state.groverData.value);
    var currentStep = useSelector((state) => state.currentStep.value);
    const width = 200;
    const height = 200;
    const ticks = 6;
    const t = transition().duration(1000);

    const xScale = scaleBand()
    .domain(v_data.map(d => d.name))
    .range([0, width])
    .padding(0.26);

  const yScale = scaleLinear()
    .domain([0, Math.max(...v_data.map(d => d.value))])
    .range([height, 0])
    .nice();
    return (
        <div>
            <SolutionValuesRow/>
            <div className="Graph-row">
                {v_data.length !== 0?
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
                    :<div className="Loading-container">
                        {/* <BallTriangle stroke="#FFFFFF"/> */}
                    </div>
                }
            </div>
        </div>
    );
};

export default GraphRow;