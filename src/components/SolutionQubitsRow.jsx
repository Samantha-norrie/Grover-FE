import React from "react";
import { useSelector } from "react-redux";
import Qubit from "./Qubit";

function SolutionQubitsRow() {
    
    return(
        <div className="Solutions-qubits-row">
            { 
                useSelector((state) => state.selectedQubits.value).map((item, index) => (
                    <Qubit key={item}/>
                  ))
            }
        </div>
    );
};

export default SolutionQubitsRow;