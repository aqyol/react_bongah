import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class SelectField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isMulti: PropTypes.bool.isRequired,
    isClearable: PropTypes.bool,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    })),
    value: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    })).isRequired,
  };

  static defaultProps = {
    placeholder: '',
    options: [],
    isClearable: false,
  };

  handleChange = (selectedOption) => {
    const { onChange } = this.props;
    onChange(selectedOption);
  };

  render() {
    const {
      value, name, placeholder, options, isMulti, isClearable,
    } = this.props;

    return (
      <Select
        isMulti={isMulti}
        name={name}
        value={value}
        onChange={this.handleChange}
        options={options}
        clearable={isClearable}
        className="react-select"
        placeholder={placeholder}
        classNamePrefix="react-select"
        pageSize={5}
        isRtl
      />
    );
  }
}

const renderSelectField = (props) => {
  const {
    input, meta, options, placeholder,
  } = props;
  return (
    <div className="form__form-group-input-wrap">
      <SelectField
        {...input}
        options={options}
        placeholder={placeholder}
      />
      {meta && meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
    </div>
  );
};

renderSelectField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })),
  placeholder: PropTypes.string,
};

renderSelectField.defaultProps = {
  meta: null,
  options: [],
  placeholder: '',
};

export default renderSelectField;
