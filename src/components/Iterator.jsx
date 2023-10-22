import React from "react";
import Oracle from "./Oracle";
import Diffuser from "./Diffuser";

function Iterator(props) {

    return (
        <div className="Iterator">
            <Oracle id={props.oracle_id}/>
            <Diffuser id={props.diffuser_id}/>
        </div>
    );
}

export default Iterator;