import React from "react";
import "./label.css";

const Label = ({name, labelStyle, children}) => {
    return(
        <div className={["default",`${labelStyle}`].join(" ")}>
            {children}
            <span className="label_text">{name}</span>
        </div>
    )
}

export default Label