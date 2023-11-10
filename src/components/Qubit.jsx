import React from "react";

function Qubit(props) {
    return (
        <div className="Qubit">
            <p>|{props.q}</p>
        </div>
    );
};

export default Qubit;