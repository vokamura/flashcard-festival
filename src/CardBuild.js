import React from 'react';


const CardBuild = (props) => {

    //let addCards = [];

    let addCards = props.cardData.map((e) => {
        //console.log(e);
        return Object.assign(e);
    });

    //console.log(addCards);

    function cardClick(e){
        console.log(e.target);
        console.log("A card was clicked");
        e.preventDefault();
        //e.target.style.display = "none";
        e.target.innerHTML = "hello";
        e.target.classList.add("flip");
    }


    const showClass = props.isClicked ? "showElement" : "hideElement";
    //const flipClass = props.cardClicked ? "hideElement" : "showElement";

    const showFront = addCards.map((e, index) =>
        <div 
            //className={`${flipClass} card`}
            className={`showElement card front`}
            key={index}
            id={index}
            //onClick={props.activeCard}
            onClick={cardClick}
        >
            <p>{e.front}</p>
        </div>
    );

    const showBack = addCards.map((e, index) =>
    <div 
        className="card back"
        key={index}
        id={index}
        onClick={cardClick}
    >
        <p>{e.back}</p>
    </div>
);

    return( 
        <div className={`${showClass} cardFront`}>
            <div>
                {showFront}
                {showBack}
            </div>
        </div>
    );
}

export default CardBuild;
