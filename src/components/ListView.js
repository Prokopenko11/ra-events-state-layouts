import React from 'react';
import ShopItem from './ShopItem';

class ListView extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="items-list">
        {items.map((item, index) => (
          <ShopItem item={item} key={index} />
        ))}
      </ul>
    )
  }
}

export default ListView;