import React from 'react';

const CardBuild = (props) => {

    const addCards = [];

    for (let i=0; i < props.cardCount; i++) {
        // console.log(i);
        addCards.push(i);
        // console.log(addCards);
    }

    const listCards = addCards.map((cardNum, index) =>
        <div 
            className="card"
            id={index}
            key={index}
        >
    </div>
    );

    return( 
        <div className="cardContainer" className={props.isClicked ? "showElement" : "hideElement"}>
            {listCards}
        </div>
    );
}

export default CardBuild;