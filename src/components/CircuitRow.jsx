import React from "react";
import HadamardColumn from "./HadamardColumn";

function CircuitRow(props) {
    
    return(
        <div>
            <HadamardColumn
                qubitList={[0,1,2,3,4]}
            />
        </div>
    );
};

export default CircuitRow;