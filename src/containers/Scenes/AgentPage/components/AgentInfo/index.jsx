import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaEnvelope } from 'react-icons/fa';


const AgentInfo = props => (
  <div className="agentInfoContainer">
    <div className="avatar">
      <img src={props.avatar} alt="avatar" />
    </div>
    <div className="info">
      <div className="name">{props.name}</div>
      <div className="title">{props.title}</div>
      <div className="address">{props.address}</div>
    </div>
    <div className="ops">
      <a href="#1" className="btn btn-icon btn-round btn-o btn-magenta btn-sm">
        <span className="fa fa-envelope-o"><FaEnvelope /></span>
      </a>
      <a href="#1" className="btn btn-icon btn-round btn-o btn-red btn-sm">
        <span className="fa fa-heart-o"><FaHeart /></span>
      </a>
    </div>
  </div>
);

AgentInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default AgentInfo;
