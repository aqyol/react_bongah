import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';


const CheckBox = props => (
  <div className="checkbox custom-checkbox">
    <label htmlFor={props.children}>
      <input id={props.children} type="checkbox" value="on" />
      <span className="fa fa-check"><FaCheck /></span>
      {props.children}
    </label>
  </div>
);

CheckBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CheckBox;
