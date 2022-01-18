import React from 'react';

const AllCardBuild = (props) => {

    let addCards = props.cardData.map((e) => {
        return Object.assign(e);
    });

    function cardClick(e){
        //e.stopPropagation();
        //console.log(e.target.childNodes[0]);
        console.log("ID card clicked is: ", e.currentTarget);
        if(e.target.childNodes[0].classList.contains("front")) {
            e.target.childNodes[0].classList.remove("showElement");
            e.target.childNodes[0].classList.add("hideElement");
            e.target.classList.add("flip");
            e.target.childNodes[1].classList.add("showElement");
            e.target.childNodes[1].classList.remove("hideElement");
        }
    }

    const showCards = addCards.map((e, index) => 
        <div 
            className="card" key={index}
            onClick={(e) => cardClick(e)}
            id={index}
        >
            <div
                className="front showElement"
                onClick={(e) => e.stopPropagation()}
                >
                <p>{e.front}</p>
            </div>
            <div
                className="back hideElement"
                >
                <p>{e.back}</p>
            </div>
        </div>
    );

    return( 
        <div className="cardContainer">
            {showCards}
        </div>
    );
}

export default AllCardBuild;
