import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import MyAgent from './components/MyAgent';
import SearchAgentForm from './components/SearchAgentForm';

class AgentPage extends PureComponent {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  constructor() {
    super();
    this.AgentPageAction = {
      findAgent: <SearchAgentForm />,
      myAgent: <MyAgent />,
      notFound: <h2>Agents action not found !</h2>,
    };
  }

  matchSection = () => {
    const section = this.props.match.params.action;
    switch (section) {
      case 'myagents':
        return this.AgentPageAction.myAgent;
      case 'list':
        return this.AgentPageAction.findAgent;
      default:
        return this.AgentPageAction.notFound;
    }
  }

  render() {
    return (
      <div className="AgentPage">
        <Dashboard>
          <div className="agentWrapper">
            {this.matchSection()}
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default AgentPage;
