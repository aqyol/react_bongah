import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import HomePage from '../Scenes/HomePage';
import SearchPage from '../Scenes/SearchPage';
import NewPropertyPage from '../Scenes/AddNewPropertyPage';
import MyhousePage from '../Scenes/MyHouse';
import AgentPage from '../Scenes/AgentPage';
import NewsPage from '../Scenes/NewsPage';
import AdvicePage from '../Scenes/AdvicePage';
import PageInfo from '../Scenes/MyInfoPage';
import WalletPage from '../Scenes/WalletPage';
import Commission from '../Scenes/CommissionPage';
import Promise from '../Scenes/PromisePage';
import EditPromise from '../Scenes/EditPromise';
import AdsDetail from '../Scenes/AdsDetail';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/newproperty/:action" component={NewPropertyPage} />
        <Route exact path="/property/:id" component={MyhousePage} />
        <Route exact path="/agent/:action" component={AgentPage} />
        <Route exact path="/advice/:type" component={AdvicePage} />
        <Route exact path="/projects" component={NewsPage} />
        <Route exact path="/myprofile" component={PageInfo} />
        <Route exact path="/wallet/:action?" component={WalletPage} />
        <Route exact path="/commission" component={Commission} />
        <Route exact path="/promise" component={Promise} />
        <Route exact path="/promise/edit/:id" component={EditPromise} />
        <Route exact path="/promise/edit" component={EditPromise} />
        <Route exact path="/ads/detail/:id" component={AdsDetail} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
