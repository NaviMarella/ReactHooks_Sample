import React from "react";
import ToggleButton from './../toggle-button/toggle-button';
import Label from './../label/label';
import "./card.css";
import Divider from './../divider/divider';

const Card = ({card = {}}) => {
    let {toggleValues} = card;
	return(
        <div className="card_container">
            <div className="card_body">
                <div className="card_header-title">
                    <Label name={card.headerName} className="label_blue_header"/>
                </div>
                 <div className="card_body-description">
                    <Label name={card.description} />
                </div>
                 <div className="card_footer">
                    <Label name={card.language} >
                        <span className="repo_language_color"></span>
                    </Label>
                    <Label name={card.starCount} >
                        <EmojiIcon symbol="★" label="star" />
                    </Label>
                    <Label name={card.forkCount} >
                        <EmojiIcon symbol="🚩" label="star" />
                    </Label>
                     <Label name={card.updatedTime} />
                </div>
            </div>
            <div className="card_button">
               <ToggleButton toggleValues={toggleValues}>
                    <EmojiIcon symbol="★" label="star"/>
                </ToggleButton>
            </div>
            <Divider />
        </div>
    )
}

export default Card