import React from "react";
import TextField from '@mui/material/TextField';
import { Checkbox } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import "../App.css";
import { updateNumQubits } from "../slices/NumQubitsSlice";
import { updateNumIterations } from "../slices/NumIterationsSlice";
import { updateNumSolutions } from "../slices/NumSolutionsSlice";
import { updateQubitsList } from "../slices/QubitsListSlice";
import { updateGroverData } from "../slices/GroverDataSlice";

function InputRow() {
    const dispatch = useDispatch();
    var numQubits = useSelector((state) => state.numQubits.value);
    var numIterations = useSelector((state) => state.numIterations.value);
    var numSolutions = useSelector((state) => state.numSolutions.value);

    const onNumQubitsChange = (newVal) => {
        console.log(newVal);
        dispatch(updateNumQubits(newVal));
        dispatch(updateQubitsList([...Array(newVal).keys()]));
        console.log([...Array(newVal).keys()]);
        getGroverInfo();
    }

    const getGroverInfo = async () => {

        fetch("http://127.0.0.1:8001/get_grover_data").then((res) =>
            res.json().then((data) => {

                dispatch(updateGroverData(data.grover_data));
                console.log("data", data);
            })
        );
    };


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