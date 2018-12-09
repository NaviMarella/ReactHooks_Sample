import React from "react";
import Card from './../card/card';
import FollowCard from './../follow-card/follow-card';

const CardList = ({cards, cardType}) => {
	return (cardType === 'user')? (
        <div className="card-list">
         {cards.map((card, index) => {
            return (
                <FollowCard card={card} key={index}/>
            )
        })}
        </div>
    ) :(
        <div className="card-list">
            {cards.map((card, index) => {
                return card ? <Card card={card} key={index} /> : null
            })}
        </div>
    )
}

export default CardList