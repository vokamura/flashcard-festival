import React, { Component } from 'react';
import CardBuildFront from './CardBuildFront.js';
import CardBuildBack from './CardBuildBack.js';
import data from './data.json';

class CardLayout extends Component {
  constructor(props){
      super(props);
      this.state = {
          isClicked: false,
          cardData: []
      }
      this.showCards = this.showCards.bind(this);
  }

  showCards(e){
    //console.log(Object.keys(data).length);
    this.setState({ isClicked: true });
    this.setState({ cardData: data });
  }

    render(){
        let { isClicked,cardData } = this.state;
        return(
            <div className="board">
                <button onClick={this.showCards}>Show Deck</button>
                <CardBuildFront cardData={cardData} isClicked={isClicked}/>
                <CardBuildBack cardData={cardData} isClicked={isClicked}/>
            </div>
        );
    }
}

export default CardLayout;