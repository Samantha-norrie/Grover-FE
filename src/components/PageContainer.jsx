import React from "react";
import InputRow from "./InputRow";
import GraphRow from "./GraphRow";
import CircuitRow from "./CircuitRow";
import Button from '@mui/material/Button';
import "../App.css";
import InstructionsModal from "./InstructionsModal";


function PageContainer() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
    }

    return (
        <div className="Page-container">
            <div className="Info-button-container">
                <Button onClick={() =>setOpen(true)}>Help!</Button>
            </div>
            <InstructionsModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
            <div className="Grover-container">
                <InputRow/>
                <CircuitRow/>
                <GraphRow/>
            </div>
        </div>
    );
};

export default PageContainer;