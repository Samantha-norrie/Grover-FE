import React from "react";
import InputRow from "./InputRow";
import GraphRow from "./GraphRow";
import CircuitRow from "./CircuitRow";

function PageContainer() {
    return (
        <div>
            <InputRow/>
            <CircuitRow/>
            <GraphRow/>
        </div>
    );
};

export default PageContainer;