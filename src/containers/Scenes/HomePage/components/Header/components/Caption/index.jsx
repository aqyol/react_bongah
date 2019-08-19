import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Caption = props => (
  <div>
    {props.isPresist
    && (
      <div className="homeCaption">
        <div className="homeTitle">Now its easy to find your future home</div>
        <div className="homeSubtitle">
          With Famireales - Real Estate HTML Template
        </div>
        <Link className="btn btn-black" to="/search">Learn More</Link>
      </div>
    )
    }
  </div>
);

Caption.propTypes = {
  isPresist: PropTypes.bool.isRequired,
};

export default Caption;
