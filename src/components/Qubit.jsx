import React from "react";

function Qubit(props) {
    return (
        <div className="Qubit" onCLick={() => console.log( "!", props)}>
            <p>{props.key}</p>
        </div>
    );
};

export default Qubit;