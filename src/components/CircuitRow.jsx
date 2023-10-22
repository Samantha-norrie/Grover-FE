import React from "react";
import HadamardColumn from "./HadamardColumn";
import IteratorContainer from "./IteratorContainer";

function CircuitRow() {
    
    return(
        <div className="Circuit-row">
            <HadamardColumn id={0}/>
            <IteratorContainer oracle_id={1} diffuser_id={2}/>
        </div>
    );
};

export default CircuitRow;