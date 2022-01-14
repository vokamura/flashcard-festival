import React from 'react';


const CardBuildFront = (props) => {

    let addFrontCards = [];

    addFrontCards = props.cardData.map((e) => {
        //console.log(e);
        return Object.assign(e);
    });

    //console.log(addCards);

    // function cardClick(e){
    //     console.log(e.target);
    //     console.log("A card was clicked");
    // }


    const showClass = props.isClicked ? "showElement" : "hideElement";
    const flipClass = props.cardClicked ? "hideElement" : "showElement";

    const listCards = addFrontCards.map((e, index) =>
        <div 
            className={`${flipClass} card`}
            key={index}
            id={index}
            onClick={props.activeCard}
        >
            <p>{e.front}</p>
        </div>
    );

    return( 
        <div className={`${showClass} cardContainer cardFront`}>
            {listCards}
        </div>
    );
}

export default CardBuildFront;
