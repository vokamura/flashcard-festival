import React from 'react';

const CardBuildBack = (props) => {

    let addBackCards = [];

    addBackCards = props.cardData.map((e) => {
        //console.log(e);
        return Object.assign(e);
    });

    //console.log(addCards);

    const listCards = addBackCards.map((e, index) =>
        <div 
            className="card"
            key={index}
            id={index}
        >
            <p>{e.back}</p>
        </div>
    );

    const showClass = props.isClicked ? "showElement" : "hideElement";


    return( 
        <div className={`${showClass} cardContainer cardBack`}>
            {listCards}
        </div>
    );
}

export default CardBuildBack;