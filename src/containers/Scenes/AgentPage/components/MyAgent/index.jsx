import React, { PureComponent } from 'react';
import { FaThList, FaMap } from 'react-icons/fa';
import AgentInfo from '../AgentInfo';

class MyAgent extends PureComponent {
  agentList = [
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-3.png',
      name: 'رضا رضایی',
      title: 'مدیر بنگاه',
      address: 'تهران - شریعتی',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-4.png',
      name: 'حسین حسینی',
      title: 'مدیر بنگاه',
      address: 'تهران - ونک',
    },
    {
      avatar: 'http://mariusn.com/themes/reales/images/avatar-2.png',
      name: 'محمد محمدی',
      title: 'مدیر بنگاه',
      address: 'تهران - اما خمینی',
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
    <h2>بنگاه ها</h2>
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
          <h3>بنگاه های من</h3>
          <h5>
            در این قسمت می توانید بنگاه های مورد علاقه خود را مشاهده کنید
          </h5>
        </div>
        <div className="searchAgentForm">
          <div className="resultTab">
            <ul>
              <li
                className={this.state.resultTab === 'agents' ? 'active' : ''}
              >
                <a href="#1" onClick={() => this.changeResultTab('agents')}><FaMap /> ایجنت ها</a>
              </li>
              <li
                className={this.state.resultTab === 'agencies' ? 'active' : ''}
              >
                <a href="#1" onClick={() => this.changeResultTab('agencies')}><FaThList /> بنگاه ها</a>
              </li>
            </ul>
          </div>
          <div className="resultBody">
            {this.state.resultTab === 'agents' ? this.resultAgents() : this.resultAgencies()}
          </div>
        </div>
      </div>
    );
  }
}

export default MyAgent;
