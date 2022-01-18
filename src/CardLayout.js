import React, { Component } from 'react';
import CardBuildFront from './CardBuildFront.js';
import CardBuildBack from './CardBuildBack.js';
import CardBuild from './CardBuild.js';
import data from './data.json';

class CardLayout extends Component {
  constructor(props){
      super(props);
      this.state = {
          isClicked: false,
          cardData: [],
          cardClicked: false
      }
      this.showCards = this.showCards.bind(this);
  }

  showCards(){
    this.setState({ isClicked: true });
    this.setState({ cardData: data });
    //console.log(this.state.cardData);
  }

  activeCard(){
      console.log("Front card clicked");
      this.setState({ cardClicked: true }, () => {
        if(this.state.cardClicked === true){
            console.log("This is clicked");
          } 

      });
  }

    render(){
        let { isClicked, cardData, cardClicked } = this.state;
        return(
            <div className="board"> 
                <button onClick={this.showCards}>Show Deck</button>

            </div>
        );
    }
}

export default CardLayout;

{/* <CardBuildFront cardData={cardData} isClicked={isClicked} cardClicked={cardClicked} activeCard={() => {this.activeCard()}}/>
<CardBuildBack cardData={cardData} isClicked={isClicked} /> */}