import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';


const CheckBox = props => (
  <div className="checkbox custom-checkbox">
    <label htmlFor={props.children}>
      <input
        name={props.name}
        value={props.value}
        id={props.children}
        type="checkbox"
        onChange={(e) => { props.onChange(e); }}
      />
      <span className="fa fa-check"><FaCheck /></span>
      {props.children}
    </label>
  </div>
);

CheckBox.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
