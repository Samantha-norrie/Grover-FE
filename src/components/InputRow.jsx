import React from "react";
import TextField from '@mui/material/TextField';
import { Checkbox } from "@mui/material";
import "../App.css";

function InputRow({numQubits, numIterations, numSolutions}) {

    return (
        <div className="Input-container">
            <TextField
                required
                type="number"
                label="Number of Qubits"
                defaultValue={numQubits}
            />
            <TextField
                required
                type="number"
                label="Number of Iterations"
                defaultValue={numIterations}
            />
            <TextField
                required
                type="number"
                label="Number of Solutions"
                defaultValue={numSolutions}
            />
            <Checkbox />
        </div>
    );
}

export default InputRow;