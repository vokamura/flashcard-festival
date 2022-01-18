import React, { Component } from 'react';
import AllCardBuild from './CardBuild.js';
import data from './data.json';

class CardLayout extends Component {
  constructor(props){
      super(props);
      this.state = {
          isClicked: false,
          cardData: [],
      }
      this.showCards = this.showCards.bind(this);
  }

  showCards(){
    this.setState({ isClicked: true });
    this.setState({ cardData: data });
  }

    render(){
        let { isClicked, cardData } = this.state;
        return(
            <div className="board"> 
                <button onClick={this.showCards}>Show All Cards</button>
                <AllCardBuild cardData={cardData} isClicked={isClicked}/>
            </div>
        );
    }
}

export default CardLayout;
