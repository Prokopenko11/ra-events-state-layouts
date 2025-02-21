import React from 'react';
import ShopCard from './ShopCard';

class CardsView extends React.Component {
  render() {
    const { cards } = this.props;

    return (
      <ul className="cards-list">
        {cards.map((card, index) => (
          <ShopCard card={card} key={index} />
        ))}
      </ul>
    )
  }
}

export default CardsView;