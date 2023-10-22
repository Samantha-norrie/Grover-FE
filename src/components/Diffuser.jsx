import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../slices/CurrentStepSlice";

function Diffuser(props) {

    const dispatch = useDispatch();
    return (
        <div className="Diffuser" onClick={(e) => {
            dispatch(updateCurrentStep(props.id));
        }}>
            <p>Diffuser</p>
        </div>
    );
}

export default Diffuser;