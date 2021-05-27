import React, { Component } from 'react';
import CardBuild from './CardBuild.js';
import data from './data.json';

class CardLayout extends Component {
  constructor(props){
      super(props);
      this.state = {
          cardCount: 0,
          isClicked: false,
          cardData: []
      }
      this.showCards = this.showCards.bind(this);
  }

  showCards(e){
    // console.log(e);
    // console.log(data);
    // console.log(Object.keys(data).length);
    this.setState({ isClicked: true });
    this.setState({ cardCount: Object.keys(data).length });
    this.setState({ cardData: data });
  }

    render(){
        let { cardCount, isClicked,cardData } = this.state;
        return(
            <div>
                <button onClick={this.showCards}>Show Deck</button>
                <CardBuild cardCount={cardCount} cardData={cardData} isClicked={isClicked}/>
            </div>
        );
    }
}

export default CardLayout;