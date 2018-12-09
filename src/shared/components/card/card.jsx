import React from "react";
import ToggleButton from './../toggle-button/toggle-button';
import Label from './../label/label';
import "./card.css";
import Divider from './../divider/divider';
import EmojiIcon from './../emoji/emoji-icon';
import "./card.css";
import RelativeDate from './../relative-date/relative-date';

const Card = ({card = {}}) => {
    let {toggleValues = []} = card;
	return(
        <div className="card_container">
            <div className="card_body">
                <div className="card_header-title">
                    <Label name={card.headerName} labelStyle="label_blue_header"/>
                    <div className="card_button">
                        <ToggleButton toggleValues={toggleValues}>
                            <EmojiIcon symbol="★" label="star"/>
                        </ToggleButton>
                    </div>
                </div>
                { card.description && (
                        <div className="card_body-description">
                        <Label name={card.description} />
                    </div>
                )}
                 <div className="card_footer">
                    { card.language && (
                        <Label name={card.language} >
                            <span className="repo_language_color"></span>
                        </Label>
                    )}
                    { card.starCount && (
                        <Label name={card.starCount} >
                            <EmojiIcon symbol="★" label="star" />
                        </Label>
                    )}
                    { card.license && (
                        <Label name={card.license} >
                            <EmojiIcon symbol="©" label="star" />
                        </Label>
                    )}
                    <Label name={card.forkCount} >
                        <EmojiIcon symbol="🚩" label="star" />
                    </Label>
                    <RelativeDate relTime={card.updatedTime}/>
                </div>
            </div>

            <Divider />
        </div>
    )
}

export default Card