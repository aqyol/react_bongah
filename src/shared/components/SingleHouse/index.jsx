import React from 'react';
import PropTypes from 'prop-types';

const SingleHouse = ({ data }) => (
  <div className="singleHouse">
    <a href="#1" className="card">
      <div className="figure">
        <img src={data.img} alt="image1" />
        <div className="figCaption">
          <div>$1,550,000</div>
          <span className="icon-eye"> 200</span>
          <span className="icon-heart"> 54</span>
          <span className="icon-bubble"> 13</span>
        </div>
        <div className="figView"><span className="icon-eye" /></div>
        <div className="figType">FOR SALE</div>
      </div>
      <h2>{data.name}</h2>
      <div className="cardAddress"><span className="icon-pointer" />
        {data.address}
      </div>
      <ul className="cardFeat">
        <li><span className="fa fa-moon-o" /> {data.beds}</li>
        <li><span className="icon-drop" /> {data.toilets}</li>
        <li><span className="icon-frame" /> {data.square} Sq Ft</li>
      </ul>
    </a>
    <a className="btn btn-green buttonBuy" href="/order/buy/undefined">Buy</a>
  </div>
);

SingleHouse.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SingleHouse;
