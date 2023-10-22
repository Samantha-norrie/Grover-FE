import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../slices/CurrentStepSlice";

function Oracle(props) {
    
    const dispatch = useDispatch();
    return (
        <div className="Oracle" onClick={(e) => {
            dispatch(updateCurrentStep(props.id));
        }}>
            <p>Oracle</p>
        </div>
    );
}

export default Oracle;