import React from "react";
import "./HumanButton.css";

function HumanButton(props) {
    return <div>
        <button onClick={() => props.HumanFilter(props.id)}> Humans Filter </button>
    </div>
}

export default HumanButton;