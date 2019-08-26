import React from 'react';
import PropTypes from 'prop-types';

class NumberField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  onChange(event) {
    this.props.onChange(event);
  }

  toCurrency(number) {
    console.log(this.props.name);
    const formatter = new Intl.NumberFormat();

    return formatter.format(number);
  }

  toggleEditing() {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }));
  }

  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <input
            type="number"
            id={this.props.name}
            name={this.props.name}
            value={this.props.value}
            onChange={this.onChange.bind(this)}
            onBlur={this.toggleEditing.bind(this)}
          />
        ) : (
          <input
            type="text"
            name={this.props.name}
            id={this.props.name}
            value={this.toCurrency(this.props.value)}
            onFocus={this.toggleEditing.bind(this)}
            readOnly
          />
        )}
      </div>
    );
  }
}

NumberField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;
