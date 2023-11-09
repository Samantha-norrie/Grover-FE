import React from "react";

function Qubit(props) {
    return (
        <div className="Qubit" onCLick={() => console.log( "!", props)}>
            <p>|{props.q}</p>
        </div>
    );
};

export default Qubit;