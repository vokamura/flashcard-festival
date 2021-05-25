import React from 'react';

const CardBuild = (props) => {
    const listCards = props.cardCount.map((cardNum) =>
        <div className="card">{cardNum}</div>
    );

    return(
        <div className="cardContainer" className={props.isClicked ? "showElement" : "hideElement"}>{listCards}</div>
    );
}

export default CardBuild;