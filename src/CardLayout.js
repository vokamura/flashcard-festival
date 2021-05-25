import React, { Component } from 'react';
import CardBuild from './CardBuild.js';

class CardLayout extends Component {
  constructor(props){
      super(props);
      this.state = {
          cardCount: [1, 2, 3, 4, 5, 6],
          isClicked: false
      }
      this.showCards = this.showCards.bind(this);
  }

  showCards(e){
      console.log(e);
      this.setState({ isClicked: true });

  }

    render(){
        let { cardCount, isClicked } = this.state;
        
        return(
            <div>
                <div>Hello</div>
                <button onClick={this.showCards}>Click me to show cards</button>
                <CardBuild cardCount={cardCount} isClicked={isClicked}/>
            </div>
        );
    }
}

export default CardLayout;