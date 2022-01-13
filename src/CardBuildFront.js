import React from 'react';

const CardBuildFront = (props) => {

    let addFrontCards = [];

    addFrontCards = props.cardData.map((e) => {
        //console.log(e);
        return Object.assign(e);
    });

    //console.log(addCards);

    const listCards = addFrontCards.map((e, index) =>
        <div 
            className="card"
            key={index}
            id={index}
        >
            <p>{e.front}</p>
        </div>
    );

    const showClass = props.isClicked ? "showElement" : "hideElement";

    return( 
        <div className={`${showClass} cardContainer`}>
            {listCards}
        </div>
    );
}

export default CardBuildFront;