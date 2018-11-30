import React from 'react';
const EmojiIcon = ({label, symbol}) =>{
    const iconstyle = {
        padding: '2px'
    };
    return (
        <span
            className="emoji"
            role="img"
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
            style={iconstyle}
        >
            {symbol}
        </span>
    )
};
export default EmojiIcon;