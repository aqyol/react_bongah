import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MainWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="globalContainer">
        {children}
      </div>
    );
  }
}

export default MainWrapper;
