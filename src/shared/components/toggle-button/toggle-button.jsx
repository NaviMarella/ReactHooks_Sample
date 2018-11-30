import React, {useState} from "react";
import "./toggle-button.css";
const ToggleButton = ({toggleValues, children, defaultOn = true }) => {
    const [on, setOn] = useState(defaultOn);
    return (
        <button onClick={() => setOn(!on)} class="toggle_button">
            { children }
            {on ? toggleValues[0] : toggleValues[1]}
        </button>
    )
}

export default ToggleButton


/* ToggleButton Usage
    <ToggleButton toggleValues={['Unstar', 'Star']}>
        <EmojiIcon symbol="⭐" label="star"/>
    </ToggleButton>
*/