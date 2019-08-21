import React from 'react';
import PropTypes from 'prop-types';

const BigItem = props => (
  <div className="bigItemContainer">
    <img
      src={props.linkImage}
    />
  </div>
);

BigItem.propTypes = {
  linkImage: PropTypes.string.isRequired,
};

export default BigItem;
