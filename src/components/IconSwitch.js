import React from 'react';
import imgModule from '../img/view_module_24dp_E8EAED.png';
import imgList from '../img/view_list_24dp_E8EAED.png';

class IconSwitch extends React.Component {
  render() {
    const { icon, onSwitch } = this.props;

    let iconSrc = '';
    if (icon === 'module') {
      iconSrc = imgModule;
    } else {
      iconSrc = imgList;
    }

    return (
      <div className="icon-switch">
        <button
          className="icon-button"
          onClick={() => onSwitch(icon)}
          style={{
            backgroundImage: `url(${iconSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </button>
      </div>
    )
  }
}

export default IconSwitch;