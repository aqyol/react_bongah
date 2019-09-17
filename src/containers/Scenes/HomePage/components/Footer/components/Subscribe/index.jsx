import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';

class Subscribe extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubscribe() {
    console.log(this.state.email);
  }

  render() {
    return (
      <div className="subComp col-xs-12 col-sm-6 col-md-3 col-lg-3">
        <div className="subCompTitle osLight">{this.props.children}</div>
        <form>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control englishText"
              placeholder="آدرس ایمیل"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <Button
            onClick={this.handleSubscribe}
            style={{ width: '100%' }}
          >
            اطلاع بده
          </Button>
        </form>
      </div>
    );
  }
}


export default Subscribe;
