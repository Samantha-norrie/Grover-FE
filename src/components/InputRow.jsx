import React from "react";
import TextField from '@mui/material/TextField';
import { Checkbox } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import "../App.css";
import { updateNumQubits } from "../slices/NumQubitsSlice";
import { updateNumIterations } from "../slices/NumIterationsSlice";
import { updateNumSolutions } from "../slices/NumSolutionsSlice";
import { updateQubitsList } from "../slices/QubitsListSlice";

function InputRow() {
    const dispatch = useDispatch();

    const onNumQubitsChange = (newVal) => {
        console.log(newVal);
        dispatch(updateNumQubits(newVal));
        dispatch(updateQubitsList([...Array(newVal).keys()]));
        console.log([...Array(newVal).keys()]);
    }


    return (
        <div className="Input-container">
            <TextField
                required
                type="number"
                label="Number of Qubits"
                defaultValue={useSelector((state) => state.numQubits.value)}
                onBlur={(e) => {
                    onNumQubitsChange(parseInt(e.target.value));
                }}
            />
            <TextField
                required
                type="number"
                label="Number of Iterations"
                defaultValue={useSelector((state) => state.numIterations.value)}
                onChange={(e) => {
                    dispatch(updateNumIterations(e.target.value));
                }}
            />
            <TextField
                required
                type="number"
                label="Number of Solutions"
                defaultValue={useSelector((state) => state.numSolutions.value)}
                onChange={(e) => {
                    dispatch(updateNumSolutions(e.target.value));
                }}
            />
            <Checkbox />
        </div>
    );
}

export default InputRow;