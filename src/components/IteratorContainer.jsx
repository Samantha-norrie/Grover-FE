import React from "react";
import Iterator from "./Iterator";

function IteratorContainer(props) {

    return (
        <div>
            <Iterator oracle_id={props.oracle_id} diffuser_id={props.diffuser_id}/>
        </div>
    );
}

export default IteratorContainer;