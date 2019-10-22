import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';


const customStyles = {
  option: provided => ({
    ...provided,
  }),
  container: () => ({
    width: '100%',
  }),
  menu: provided => ({
    ...provided,
    zIndex: 5,
    marginTop: 0,
  }),
  menuList: () => ({
    width: '100%',
  }),
};

const selectTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#98EAD3',
    primary: '#54E1B9',
    primary50: '#B4EEDD',
  },
});

class SelectField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isMulti: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
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
      value, name, placeholder, options, isMulti, isClearable, isDisabled,
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
        isDisabled={isDisabled}
        styles={customStyles}
        theme={theme => selectTheme(theme)}
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
