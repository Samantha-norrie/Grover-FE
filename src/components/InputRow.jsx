import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import "../App.css";
import { updateQubitsList } from "../slices/QubitsListSlice";
import { updateGroverData } from "../slices/GroverDataSlice";
import axios from "axios";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { updateSelectedValues } from "../slices/SelectedValuesSlice";
import Slider from '@mui/material/Slider';
import MultipleSelectChip from "./MultipleSelectChip";
import { generateRandomValues } from "../Utils";
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function InputRow() {
    const dispatch = useDispatch();

    const numQubits = useSelector((state) => state.numQubits.value);
    const numIterations = useSelector((state) => state.numIterations.value);
    const numSolutions = useSelector((state) => state.numSolutions.value);

    const [useIdealIterations, setUseIdealIterations] = useState(false);
    const [numQubitsError, setNumQubitsError] = useState(false);
    const [numSolutionsError, setNumSolutionsError] = useState(false);
    const [numIterationsError, setNumIterationsError] = useState(false);

    const [newNumQubits, setNewNumQubits] = useState(numQubits);
    const [newNumIterations, setNewNumIterations] = useState(numIterations);
    const [newNumSolutions, setNewNumSolutions] = useState(numSolutions);

    const [groverLevel, setGroverLevel] = useState(1);

    const [solutionValue, setSolutionValue] = React.useState([]);

    const onCheckChange = () => {
        setUseIdealIterations(!useIdealIterations);
    }


    const getGroverInfo = async () => {
        console.log("solution value", solutionValue);
        dispatch(updateGroverData([]));
        axios.post("http://127.0.0.1:8001/get_grover_data", {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
            "qubits": newNumQubits,
            "solutions": groverLevel === 1? generateRandomValues(newNumSolutions, Math.pow(newNumQubits, 2)):solutionValue,
            "iterations": useIdealIterations? null: newNumIterations
            }
          })
          .then(function (response) {
            dispatch(updateGroverData(response.data.grover_data));
            dispatch(updateSelectedValues(response.data.solutions));
            dispatch(updateQubitsList([...Array(newNumQubits).keys()]));
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <div className="Vert-container">
            <div className="Level-slider-container">
                <div className="Level-slider">
                    <Slider
                        min={1}
                        step={1}
                        max={3}
                        size="small"
                        defaultValue={1}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => {setGroverLevel(e.target.value)}}
                    />
                </div>
            </div>
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
                    onChange={(e) => {
                        if (e.target.value < 1) {
                            setNumQubitsError(true);
                        } else {
                            setNumQubitsError(false);
                            setNewNumQubits(parseInt(e.target.value));
                        }
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
                        onChange={(e) => {
                            if (e.target.value < 1) {
                                setNumIterationsError(true);
                            } else {
                                setNumIterationsError(false);
                            setNewNumIterations(parseInt(e.target.value));
                        }}}
                    /> 
                    <FormControlLabel 
                        control={<Checkbox  />} 
                        label="Use ideal iterations" 
                        onChange={() =>onCheckChange()}    
                    />
                </div>
                <div>
                    { groverLevel === 1?
                    <TextField
                        required
                        error={numSolutionsError}
                        type="number"
                        label="Number of Solutions"
                        helperText={numSolutionsError? `Please enter a value between 1 and ${Math.pow(2,numQubits)}`: ""}
                        defaultValue={numSolutions}
                        onChange={(e) => {
                            if (e.target.value < 1 || e.target.value > Math.pow(2,numQubits)) {
                                setNumSolutionsError(true);
                            } else {
                                setNumSolutionsError(false); 
                            setNewNumSolutions(parseInt(e.target.value));
                        }}}
                    />:
                    <MultipleSelectChip 
                        totalValues={[...Array(Math.pow(newNumQubits,2)).keys()]} 
                        level={groverLevel}
                        solutionValue={solutionValue}
                        setSolutionValue={setSolutionValue}
                    />
                    }
                </div>
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