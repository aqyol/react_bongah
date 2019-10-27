import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';


class Dashboard extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isExpand: false,
    };
  }


  render() {
    return (
      <div className="dashboard">
        <div className="headerWrapper">
          <Header />
        </div>
        <div className="bodyWrapper">
          <div
            role="none"
            className={`contentWrapper${(this.state.isExpand ? ' smallSize' : '')}`}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
