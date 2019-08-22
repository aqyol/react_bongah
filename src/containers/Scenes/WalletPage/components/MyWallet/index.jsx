import React from 'react';
import BalanceHeader from './components/BalanceHeader';
import Details from './components/Details';


const MyWallet = () => (
  <div className="myWallet slimScroll">
    <div className="balanceHeaderWrapper">
      <BalanceHeader />
    </div>
    <div className="DetailsWrapper">
      <Details />
    </div>
  </div>
);

export default MyWallet;
