import React from "react";
import HadamardColumn from "./HadamardColumn";
import IteratorContainer from "./IteratorContainer";
import { useSelector } from "react-redux";
import {Bars} from "react-loading-icons";
import InitQubitColumn from "./InitQubitColumn";

function CircuitRow() {
    
    return(
        <div>
            {useSelector((state) => state.groverData.value).length === 0?
                <div className="Loading-container">
                    <Bars/>
                </div>:
                <div className="Circuit-row">
                    <InitQubitColumn id={0}/>
                    <HadamardColumn id={1}/>
                    <IteratorContainer oracle_id={2} diffuser_id={3}/>
                    <IteratorContainer oracle_id={4} diffuser_id={5}/>
                </div>
            }
        </div>
    );
};

export default CircuitRow;