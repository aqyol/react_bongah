import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import LeftSide from './components/LeftSide';


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

  toggleLeftSide = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand,
    }));
  }

  clickOutsideLeftSide = () => {
    if (this.state.isExpand) {
      this.toggleLeftSide();
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="headerWrapper">
          <Header clickToggle={this.toggleLeftSide} />
        </div>
        <div className="bodyWrapper">
          <LeftSide isExpand={this.state.isExpand} />
          <div
            role="none"
            className={`contentWrapper${(this.state.isExpand ? ' smallSize' : '')}`}
            onClick={this.clickOutsideLeftSide}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
