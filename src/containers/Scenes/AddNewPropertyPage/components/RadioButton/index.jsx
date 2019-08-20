import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';


const RadioButton = props => (
  <div className="radio custom-radio">
    <label htmlFor={props.children}>
      <input id={props.children} type="radio" name="radio1" />
      <span><FaCheck /></span> {props.children}
    </label>
  </div>
);

RadioButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RadioButton;
