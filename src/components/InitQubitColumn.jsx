import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import { updateCurrentStep } from "../slices/CurrentStepSlice";
import Qubit from "./Qubit";

//TODO Necessary? Very similar to HadamardColumn
function InitQubitColumn(props) {
    const dispatch = useDispatch();

    return(
        <div className="Hadamard-column" onClick={(e) => {
            dispatch(updateCurrentStep(props.id));
        }}>
            {
                useSelector((state) => state.qubitsList.value).map((item, index) => (
                    <Qubit key={item}/>
                  ))
            }
        </div>
    );
};

export default InitQubitColumn;