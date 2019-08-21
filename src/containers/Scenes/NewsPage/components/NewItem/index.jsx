import React from 'react';
import PropTypes from 'prop-types';

const BigItem = props => (
  <div className="newItemContainer ">
    <div className="itemImage">
      <img alt="img" src={props.data.linkImage} />
    </div>
    <div className="itemInfo">
      <div className="itemTitle">
        <h3>{props.data.title}</h3>
      </div>
      <div className="itemDetail">
        <div className="itemAddress">
          <p><strong>{props.data.address}</strong></p>
        </div>
        <div className="itemDate">
          <p><strong>{props.data.date}</strong></p>
        </div>
      </div>
      <div className="itemContent">
        {props.data.content}
      </div>
    </div>
  </div>
);

BigItem.propTypes = {
  linkImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BigItem;
