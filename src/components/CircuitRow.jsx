import React from "react";
import HadamardColumn from "./HadamardColumn";
import IteratorContainer from "./IteratorContainer";

function CircuitRow() {
    
    return(
        <div className="Circuit-row">
            <HadamardColumn/>
            <IteratorContainer/>
        </div>
    );
};

export default CircuitRow;