import React from "react";
import HadamardColumn from "./HadamardColumn";
import IteratorContainer from "./IteratorContainer";
import { useSelector } from "react-redux";
import {Bars} from "react-loading-icons";
import InitQubitColumn from "./InitQubitColumn";

function CircuitRow() {

    const num_iterations = useSelector((state) => state.numIterations.value);
    
    return(
        <div>
            {useSelector((state) => state.groverData.value).length === 0?
                <div className="Loading-container">
                    <Bars/>
                </div>:
                <div className="Circuit-row">
                    {[...Array(2*num_iterations+2).keys()].map((item, index) => (
                        <div>
                            {index === 0 &&
                                <InitQubitColumn id={index}/>
                            }
                            {index === 1 &&
                                <HadamardColumn id={index}/>
                            }
                            {index !== 0 && index !== 1 && index%2 === 0 &&
                                <IteratorContainer oracle_id={index} diffuser_id={index+1}/>
                            }            
                        </div>
                  ))

                    }
                </div>
            }
        </div>
    );
};

export default CircuitRow;