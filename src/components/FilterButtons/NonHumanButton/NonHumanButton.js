import React from "react";
import "./NonHumanButton.css";

function NonHumanButton(props) {
    return <div>
        <button onClick={() => props.NonHumanFilter(props.id)}> Non-Humans Filter </button>
    </div>
}

export default NonHumanButton;