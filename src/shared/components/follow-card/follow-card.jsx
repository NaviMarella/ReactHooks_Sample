import React from "react";
import Divider from './../divider/divider';
import Label from './../label/label';
import ToggleButton from './../toggle-button/toggle-button';
import "./follow-card.css";
import Avatar from './../avatar/avatar';

const FollowCard = ({card = {}}) => {
    let {toggleValues = []} = card;
	return(
        <div className="follow-card_container">
            <div className="follow-card_body">
                <div className="follow-header_container">
                  <Avatar url={card.avatar_url} />
                  <Label name={card.loginName} className="follow-header_title"/>
                </div>
                <ToggleButton toggleValues={toggleValues}>
                </ToggleButton>
            </div>
            <Divider />
        </div>
    )
}

export default FollowCard