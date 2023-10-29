import React from "react";
import HadamardColumn from "./HadamardColumn";
import IteratorContainer from "./IteratorContainer";
import { useSelector } from "react-redux";
import {Bars} from "react-loading-icons";

function CircuitRow() {
    
    return(
        <div>
            {useSelector((state) => state.groverData.value).length === 0?
                <div className="Loading-container">
                    <Bars/>
                </div>:
                <div className="Circuit-row">
                    <HadamardColumn id={0}/>
                    <IteratorContainer oracle_id={1} diffuser_id={2}/>
                </div>
            }
        </div>
    );
};

export default CircuitRow;