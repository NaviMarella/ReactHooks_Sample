import React from 'react';
const EmojiIcon = ({label, symbol}) =>{
    const iconstyle = {
        paddingRight: '6px',
        textAlign: 'center'
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