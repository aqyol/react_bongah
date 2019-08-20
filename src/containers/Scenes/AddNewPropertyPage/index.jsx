import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import SellPage from './components/Sell';
import RenovationPage from './components/Renovation';
import RentPage from './components/Rent';
import AddNewPropertyForm from './components/AddNewPropertyForm';

class NewPropertyPage extends PureComponent {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  newPropertyAction = {
    sell: '',
    rent: '',
    renovation: '',
    default: '',
  };

  constructor() {
    super();
    this.newPropertyAction = {
      sell: <SellPage />,
      rent: <RentPage />,
      renovation: <RenovationPage />,
      default: <AddNewPropertyForm />,
    };
  }

  matchAction = () => {
    const section = this.props.match.params.action;
    switch (section) {
      case 'sell':
        return this.newPropertyAction.sell;
      case 'rent':
        return this.newPropertyAction.rent;
      case 'renovation':
        return this.newPropertyAction.renovation;
      default:
        return this.newPropertyAction.default;
    }
  }

  render() {
    return (
      <div className="infoPage">
        <Dashboard>
          <div className="infoWrapper">
            {this.matchAction()}
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default NewPropertyPage;
