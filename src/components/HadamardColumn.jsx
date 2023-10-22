import React from "react";
import HadamardGate from "./HadamardGate";
import { useSelector, useDispatch} from 'react-redux';
import { updateCurrentStep } from "../slices/CurrentStepSlice";

function HadamardColumn(props) {
    const dispatch = useDispatch();
    
    const onColumnClick = () => {
        dispatch(updateCurrentStep(props.id));
    }

    return(
        <div className="Hadamard-column" onClick={(e) => {
            dispatch(updateCurrentStep(props.id));
        }}>
            {
                useSelector((state) => state.qubitsList.value).map((item, index) => (
                    <HadamardGate key={index}/>
                  ))
            }
        </div>
    );
};

export default HadamardColumn;