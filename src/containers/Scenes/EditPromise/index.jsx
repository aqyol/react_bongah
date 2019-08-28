import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import NewPromise from './components/NewPromise';


class EditPromise extends PureComponent {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      isLoading: true,
    };
    this.getPromiseInfo = this.getPromiseInfo.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    if (id !== undefined) {
      this.getPromiseInfo();
      this.setState({ id });
    }
    this.getPromiseInfo();
  }

  getPromiseInfo() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <Dashboard>
        <div>
          {this.state.isLoading
          && (
            <div className={`load${this.state.isLoading ? '' : ' loaded'}`}>
              <div className="load__icon-wrap">
                <svg className="load__icon">
                  <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
              </div>
            </div>
          )
          }
          {this.state.id === null
            && (
              <NewPromise />
            )
          }
        </div>
      </Dashboard>
    );
  }
}

export default EditPromise;
