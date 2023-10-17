import React from "react";
import HadamardGate from "./HadamardGate";
import { useSelector} from 'react-redux';

function HadamardColumn() {
    // const 

    return(
        <div className="Hadamard-column">
            {
                useSelector((state) => state.qubitsList.value).map((item, index) => (
                    <HadamardGate key={index}/>
                  ))
            }
        </div>
    );
};

export default HadamardColumn;