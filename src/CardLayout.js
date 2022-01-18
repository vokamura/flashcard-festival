import React, { Component } from 'react';
import CardBuildFront from './CardBuildFront.js';
import CardBuildBack from './CardBuildBack.js';
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

//   activeCard(){
//       console.log("Front card clicked");
//       this.setState({ cardClicked: true }, () => {
//         if(this.state.cardClicked === true){
//             console.log("This is clicked");
//           } 

//       });
//   }

    render(){
        let { isClicked, cardData } = this.state;
        return(
            <div className="board"> 
                <button onClick={this.showCards}>Show Deck</button>
                <AllCardBuild cardData={cardData} isClicked={isClicked}/>
            </div>
        );
    }
}

export default CardLayout;
