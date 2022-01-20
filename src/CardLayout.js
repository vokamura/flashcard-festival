import React, { Component } from 'react';
import AllCardBuild from './CardBuild.js';
import data from './data.json';

class CardLayout extends Component {
  constructor(props){
      super(props);
      this.state = {
          isClicked: false,
          cardData: [],
          showBoard: false
      }
      this.showCards = this.showCards.bind(this);
      this.resetCards = this.resetCards.bind(this);
  }

  showCards(){
    let randomData = [];
    let setData = data;
    
    if(data.length === 0){
        setData = this.state.cardData;
    }

    //shows board if it's not showing
    if(this.state.showBoard === false) {
        //randomize cards
        while(setData.length){
            let randomCard = Math.floor(Math.random() * setData.length);
            randomData.push(setData[randomCard]);
            setData.splice(randomCard, 1);
        }
    
        this.setState({ 
            isClicked: true, 
            cardData: randomData,
            showBoard: true
        });
    };
  }

  showDeck(){
      console.log("Show cards in a deck");
  }

  resetCards(){
      this.setState({ showBoard: false});
    }

    render(){
        let { isClicked, cardData } = this.state;
        return(
            <div id="board"> 
                <button onClick={this.showCards}>Show All Cards</button>
                <button onClick={this.showDeck}>Show Deck</button>
                <button onClick={this.resetCards}>Reset Cards</button>
                {this.state.showBoard ? <AllCardBuild cardData={cardData} isClicked={isClicked}/> : null}
            </div>
        );
    }
}

export default CardLayout;
