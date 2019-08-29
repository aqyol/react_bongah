import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends PureComponent {
  static propTypes = {
    listItem: PropTypes.objectOf(PropTypes.object).isRequired,
    switchTop: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      showList: false,
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
    const { onChange } = this.props;
    onChange(index);
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
          <span className="dropdown-label">{this.props.listItem[this.props.value]}</span>
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
