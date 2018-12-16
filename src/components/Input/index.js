import React, { useState } from "react";
import './index.css';

const Input = ({changeHandler}) => {
    const [value, setValue] = useState('');

    const handleChange = ({target: {value}}) => {
        setValue(value);
        changeHandler(value);
    }
    return(
        <input 
            className="Input__Container"
            value={value} 
            onChange={(e) => handleChange(e)} />
    );
    
}

export default Input;