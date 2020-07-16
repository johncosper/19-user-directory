import React from "react";
import "./SortButton";

function SortButton(props) {
    return <div>
        <button onClick={() => props.sortEmployeeAlphabetical(props.id)}> Alphabetical Sort </button>
    </div>
}

export default SortButton;