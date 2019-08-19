import React from 'react';

const CheckBox = () => (
  <div className="checkbox custom-checkbox">
    <label>
      <input type="checkbox" value="on" />
      <span className="fa fa-check" />
      {this.props.children}
    </label>
  </div>
);

export default CheckBox;
