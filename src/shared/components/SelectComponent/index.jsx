import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends PureComponent {
  static propTypes = {
    listItem: PropTypes.objectOf(PropTypes.object).isRequired,
    switchTop: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      itemSelected: 0,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (
      this.wrapperRef
      && !this.wrapperRef.contains(e.target)
      && this.state.showList
    ) {
      this.showToggle();
    }
  };

  showToggle = () => {
    if (this.state.showList) {
      document.removeEventListener('mousedown', this.handleClickOutside);
    } else {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
    this.setState(prevState => ({
      showList: !prevState.showList,
    }));
  };

  doSelect = (index) => {
    this.setState({
      itemSelected: index,
    });
    this.showToggle();
  };

  wrapperRef;

  render() {
    return (
      <div
        ref={(div) => { this.wrapperRef = div; }}
        className={`selectComponent${(this.state.showList ? ' active' : '')}`}
        role="presentation"
      >
        <div
          className="form-control dropdown-toggle"
          onClick={this.showToggle}
          role="presentation"
        >
          <span className="dropdown-label">{this.props.listItem[this.state.itemSelected]}</span>
          <span className="caret" />
        </div>
        <ul className={`dropdown-menu dropdown-select${this.props.switchTop ? ' switchTop' : ''}`}>
          {this.props.listItem.map((item, index) => (
            <li
              key={index.toString()}
            >
              <a
                href="#1"
                onClick={() => { this.doSelect(index); }}
                onKeyDown={() => { this.doSelect(index); }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SelectComponent;
