import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MyWallet from './components/MyWallet';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import RequestForm from './components/RequestForm';
import Dashboard from '../../../shared/components/DashboardLayout';


class WalletPage extends PureComponent {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  constructor() {
    super();
    this.WalletPageSection = {
      myWallet: (<MyWallet />),
      deposit: (<DepositForm />),
      withdraw: (<WithdrawForm />),
      request: (<RequestForm />),
      notfound: (null),
    };
  }

  matchSection = () => {
    const walletAction = this.props.match.params.action;
    switch (walletAction) {
      case undefined:
        return this.WalletPageSection.myWallet;
      case 'deposit':
        return this.WalletPageSection.deposit;
      case 'withdraw':
        return this.WalletPageSection.withdraw;
      case 'request':
        return this.WalletPageSection.request;
      default:
        return this.WalletPageSection.notfound;
    }
  }

  render() {
    return (
      <div className="walletPage">
        <Dashboard>
          <div className="walletWrapper">
            {this.matchSection()}
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default WalletPage;
