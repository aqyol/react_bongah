import React, { PureComponent } from 'react';
import Dashboard from '../../../shared/components/DashboardLayout';

class Commission extends PureComponent {
  constructor() {
    super();
    this.state = {
      type: 1,
      price: 0,
      deposit: 0,
      rent: 0,
      haveCode: false,
    };
  }

  render() {
    if (this.state.type === 1) {
      return (
        <div className="myhousePage">
          <div className="resultTab">
            <ul>
              <li
                className={this.state.resultTab === 'agents' ? 'active' : ''}
              >
                <a href="#1" onClick={() => this.changeResultTab('agents')}> ایجنت ها</a>
              </li>
              <li
                className={this.state.resultTab === 'agencies' ? 'active' : ''}
              >
                <a href="#1" onClick={() => this.changeResultTab('agencies')}> بنگاه ها</a>
              </li>
            </ul>
          </div>
          <Dashboard>
            <div>
              {this.state.price}
              {this.state.haveCode}
            </div>
          </Dashboard>
        </div>
      );
    }
    return (
      <Dashboard>
        <div>
          {this.state.deposit}
          {this.state.rent}
          {this.state.haveCode}
        </div>
      </Dashboard>
    );
  }
}

export default Commission;
