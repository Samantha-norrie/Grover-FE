import React from "react";
import HadamardGate from "./HadamardGate";

function HadamardColumn({qubitList}) {


    return(
        <div className="Hadamard-column">
            {
                qubitList.map((item, index) => (
                    <HadamardGate key={index}/>
                  ))
            }
        </div>
    );
};

export default HadamardColumn;