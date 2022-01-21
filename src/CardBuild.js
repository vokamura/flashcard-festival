import React from 'react';
import thumbsUp from './assets/thumbs-up.png';
import thumbsDown from './assets/thumbs-down.png';

const AllCardBuild = (props) => {

    let addCards = props.cardData.map((e) => {
        return Object.assign(e);
    });

    function cardClick(e){

        //if the card is clicked...
        if(e.target.childNodes[0].classList.contains("front")) {
            e.target.childNodes[0].classList.remove("showElement");
            e.target.childNodes[0].classList.add("hideElement");
            e.target.classList.add("flip");
            e.target.childNodes[1].classList.add("showElement");
            e.target.childNodes[1].classList.remove("hideElement");
        //if the text is clicked...
        } else if (e.target.classList.contains("front")){
            e.target.classList.remove("showElement");
            e.target.classList.add("hideElement");
            e.target.parentNode.classList.add("flip");
            e.target.parentNode.childNodes[1].classList.add("showElement");
            e.target.parentNode.childNodes[1].classList.remove("hideElement");
        }
    }

    function clickUp(e){
        console.log("do something", e.target);
        e.target.parentNode.parentNode.classList.add("hideElement");
    }

    function clickDown(){
        console.log("do something else");
    }

    const showCards = addCards.map((e, index) => 
        <div 
            className="card" key={index}
            onClick={(e) => cardClick(e)}
            id={index}
        >
            <div
                className="front showElement"
            >
                <p className="text"
                    onClick={(e) => e.stopPropagation()}
                >{e.front}</p>
            </div>
            <div
                className="back hideElement"
                onClick={(e) => e.stopPropagation()}
            >
                <p className="text">{e.back}</p>
                <img src={thumbsUp} className="thumbsUp" onClick={(e) => clickUp(e)}></img>
                <img src={thumbsDown} className="thumbsDown" onClick={(e) => clickDown()}></img>
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
