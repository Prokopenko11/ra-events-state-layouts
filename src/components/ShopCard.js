import React from 'react';

class ShopCard extends React.Component {
  render() {
    const {card, index } = this.props;

    return (
      <li
        className="card"
        key={index}
        style={{
        backgroundImage: `url(${card.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="card-header">
          <h2 className="card-name">{card.name}</h2>
          <span className="card-item-color">{card.color}</span>
        </div>
        <div className="card-footer">
          <span className="card-item-price">{card.price}</span>
          <button className="card-button">Add to cart</button>
        </div>
      </li>
    )
  }
}

export default ShopCard;
