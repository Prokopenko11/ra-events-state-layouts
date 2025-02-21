import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isList: true
    }
  }

  switchIcon = () => {
    this.setState((prevState) => ({
      isList: !prevState.isList,
    }));
  };

  render() {
    const { products } = this.props;
    const { isList } = this.state;
    const icon = isList ? 'list' : 'module';

    return (
      <div>
        <IconSwitch icon={icon} onSwitch={this.switchIcon} />
        {icon === 'list' ? <CardsView cards={products} /> : <ListView items={products} />}
      </div>
    )
  }
}

export default Store;