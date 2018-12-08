import React from "react";
import Card from './../card/card';

const CardList = ({cards}) => {
	return(
        <div className="card-list">
            {cards.map((card, index) => {
                return card ? <Card card={card} key={index} /> : null
            })}
        </div>
    )
}

export default CardList