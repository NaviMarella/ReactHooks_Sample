import React from "react";

const CardList = ({cards}) => {
	return(
        <div className="card-list">
            {cards.map(card => <Card {...card} />)}
        </div>
    )
}

export default CardList