import React from 'react';

const CardBuildBack = (props) => {

    let addBackCards = [];

    addBackCards = props.cardData.map((e) => {
        //console.log(e);
        return Object.assign(e);
    });

    //console.log(addCards);

    function cardClick(e){
        console.log(e.target);
        console.log("Back was clicked");
    }
    
    const listCards = addBackCards.map((e, index) =>
        <div 
            className="card"
            key={index}
            id={index}
            onClick={cardClick}
        >
            <p>{e.back}</p>
        </div>
    );

    const showClass = props.isClicked ? "showElement" : "hideElement";

    return( 
        <div className={`${showClass} cardContainer`}>
            {listCards}
        </div>
    );
}

export default CardBuildBack;

