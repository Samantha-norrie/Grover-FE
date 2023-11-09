import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import "../App.css";
import { updateNumQubits } from "../slices/NumQubitsSlice";
import { updateNumIterations } from "../slices/NumIterationsSlice";
import { updateNumSolutions } from "../slices/NumSolutionsSlice";
import { updateQubitsList } from "../slices/QubitsListSlice";
import { updateGroverData } from "../slices/GroverDataSlice";
import axios from "axios";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { updateSelectedValues } from "../slices/SelectedValuesSlice";
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function InputRow() {
    const dispatch = useDispatch();
    const [useIdealIterations, setUseIdealIterations] = useState(false);
    const [numQubitsError, setNumQubitsError] = useState(false);
    const [numSolutionsError, setNumSolutionsError] = useState(false);
    const [numIterationsError, setNumiterationsError] = useState(false);
    const numQubits = useSelector((state) => state.numQubits.value);
    const numIterations = useSelector((state) => state.numIterations.value);
    const numSolutions = useSelector((state) => state.numSolutions.value);

    const onNumQubitsChange = (newVal) => {

        if (newVal < 1 || newVal > 30) {
            setNumQubitsError(true);
        } else {
            setNumQubitsError(false);
            dispatch(updateNumQubits(newVal));
            dispatch(updateQubitsList([...Array(newVal).keys()]));
        }
    }

    const onNumSolutionsChange = (newVal) => {

        if (newVal < 1 || newVal >= numSolutions) {
            setNumSolutionsError(true);
        } else {
            setNumSolutionsError(false);
            dispatch(updateNumSolutions(newVal));
        }
    }

    const onNumIterationsChange = (newVal) => {

        if (newVal < 1) {
            setNumiterationsError(true);
        } else {
            setNumiterationsError(false);
            dispatch(updateNumIterations(newVal));
        }
    }

    const onCheckChange = () => {
        setUseIdealIterations(!useIdealIterations);
    }

    const getGroverInfo = async () => {
        console.log("num qubits", numQubits);
        dispatch(updateGroverData([]));
        axios.post("http://127.0.0.1:8001/get_grover_data", {
            num_qubits: numQubits,
            num_solutions: numSolutions,
            num_iterations: useIdealIterations? null: numIterations
          })
          .then(function (response) {
            dispatch(updateGroverData(response.data.grover_data));
            dispatch(updateSelectedValues(response.data.solutions));
            console.log(response.data.grover_data);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <div className="Vert-container">
            <div className="Input-container">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <TextField
                    required
                    error={numQubitsError}
                    type="number"
                    label="Number of Qubits"
                    helperText={numQubitsError? `Please enter a value between 1 and ?`: ""}
                    defaultValue={useSelector((state) => state.numQubits.value)}
                    onBlur={(e) => {
                        onNumQubitsChange(parseInt(e.target.value));
                    }}
                />
                <div className="Vert-container">
                    <TextField
                        required
                        error={numIterationsError}
                        type="number"
                        label="Number of Iterations"
                        helperText={numIterationsError? `Please enter a value between 1 and ?`: ""}
                        disabled={useIdealIterations}
                        defaultValue={useSelector((state) => state.numIterations.value)}
                        onBlur={(e) => {
                            onNumIterationsChange(parseInt(e.target.value));
                        }}
                    />  
                    <FormControlLabel 
                        control={<Checkbox  />} 
                        label="Use ideal iterations" 
                        onChange={() =>onCheckChange()}    
                    />
                </div>
                <TextField
                    required
                    error={numSolutionsError}
                    type="number"
                    label="Number of Solutions"
                    helperText={numSolutionsError? `Please enter a value between 1 and ${Math.pow(2,numQubits)}`: ""}
                    defaultValue={useSelector((state) => state.numSolutions.value)}
                    onBlur={(e) => {
                        onNumSolutionsChange(parseInt(e.target.value));
                    }}
                />
            </ThemeProvider>
            </div>
            <div className="Button-container">
                <Button 
                    className="Button"
                    onClick={() => getGroverInfo()} 
                    variant="contained"
                    disabled={numQubitsError || numIterationsError || numSolutionsError}
                >
                    Load Grover
                </Button>
            </div>
        </div>      
    );
}

export default InputRow;