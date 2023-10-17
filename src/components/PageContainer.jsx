import React from "react";
import InputRow from "./InputRow";
import GraphRow from "./GraphRow";
import CircuitRow from "./CircuitRow";
import "../App.css";

function PageContainer() {
    return (
        <div className="Page-container">
            <InputRow/>
            <CircuitRow/>
            <GraphRow/>
        </div>
    );
};

export default PageContainer;