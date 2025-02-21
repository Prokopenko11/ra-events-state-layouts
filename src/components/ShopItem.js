import React from 'react';

class ShopItem extends React.Component {
  render() {
    const { item, index } = this.props;

    return (
      <li className="item" key={index}>
        <div
          className="item-img"
          style={{
          backgroundImage: `url(${item.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>
        <h2 className="item-name">{item.name}</h2>
        <span className="item-color">{item.color}</span>
        <span className="item-price">{item.price}</span>
        <button className="item-button">Add to cart</button>
      </li>
    )
  }
}

export default ShopItem;