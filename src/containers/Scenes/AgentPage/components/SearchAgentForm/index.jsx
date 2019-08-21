import React, { PureComponent } from 'react';
import { FaThList, FaMap, FaSearch } from 'react-icons/fa';
import AgentInfo from '../AgentInfo';

class SearchAgentForm extends PureComponent {
  agentList = [
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-3.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-4.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      name: 'Rust Cohle',
      title: 'Administrator',
      address: 'Los Angeles, CA, USA',
    },
  ];

  constructor() {
    super();
    this.state = {
      resultTab: 'agents',
    };
  }

  changeResultTab = (tab) => {
    if (tab === 'agencies' || tab === 'agents') {
      if (tab !== this.state.resultTab) {
        this.setState({
          resultTab: tab,
        });
      }
    }
  }

  resultAgencies = () => (
    <h2>Agencies</h2>
  );

  resultAgents = () => (
    <ul className="agentsResult">
      {this.agentList.map((item, index) => (
        <li key={index.toString()}>
          <AgentInfo avatar={item.avatar} name={item.name} title={item.title} address={item.address} />
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div>
        <div className="dashboardTitle">
          <h3>Find Agent</h3>
          <h5>
            Wed love to find out more about you. Itll help us make
            sure our website and apps tick the right boxes.
          </h5>
        </div>
        <div className="searchAgentForm">
          <div className="input-group searchForm">
            <input type="text" name="" id="" className="form-control" />
            <span className="input-group-btn">
              <button type="button" className="btn btn-green"><FaSearch /></button>
            </span>
          </div>
          <div className="resultTab">
            <ul>
              <li
                className={this.state.resultTab === 'agents' ? 'active' : ''}
              >
                <a href="#1" onClick={() => this.changeResultTab('agents')}><FaMap /> Agents</a>
              </li>
              <li
                className={this.state.resultTab === 'agencies' ? 'active' : ''}
              >
                <a href="#1" onClick={() => this.changeResultTab('agencies')}><FaThList /> Agencies</a>
              </li>
            </ul>
          </div>
          <div className="resultBody">
            <h3>Result:</h3>
            {this.state.resultTab === 'agents' ? this.resultAgents() : this.resultAgencies()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAgentForm;
