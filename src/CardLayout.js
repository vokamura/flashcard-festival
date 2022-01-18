import React, { Component } from 'react';
import AllCardBuild from './CardBuild.js';
import data from './data.json';

class CardLayout extends Component {
  constructor(props){
      super(props);
      this.state = {
          isClicked: false,
          cardData: [],
          showBoard: true
      }
      this.showCards = this.showCards.bind(this);
      this.resetCards = this.resetCards.bind(this);
  }

  showCards(){
    this.setState({ 
        isClicked: true, 
        cardData: data,
        showBoard: true
    });
  }


  resetCards(){
      console.log("Card reset");
      this.setState({ showBoard: false });
    }

    render(){
        let { isClicked, cardData } = this.state;
        return(
            <div id="board"> 
                <button onClick={this.showCards}>Show All Cards</button>
                <button onClick={this.resetCards}>Reset Cards</button>
                {this.state.showBoard ? <AllCardBuild cardData={cardData} isClicked={isClicked}/> : null}
            </div>
        );
    }
}

export default CardLayout;
