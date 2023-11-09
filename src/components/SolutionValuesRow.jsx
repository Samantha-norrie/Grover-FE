import React from "react";
import { useSelector } from "react-redux";

function SolutionValuesRow() {
    
    return(
        <div className="Solutions-values-row">
            { 
                useSelector((state) => state.selectedValues.value).map((item, index) => (
                    <div className="solution-value">{item}</div>
                  ))
            }
        </div>
    );
};

export default SolutionValuesRow;