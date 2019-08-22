import React from 'react';
import PropTypes from 'prop-types';


const SocialButtons = (props) => (
  <div className="socialButtons">
    <div className="or"><span>or</span></div>
    <button type="button" className="socialButton buttonFacebook">
      {props.type} with Facebook
    </button>
    <button type="button" className="socialButton buttonGoogle">
      {props.type} with Google
    </button>
  </div>
);

SocialButtons.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SocialButtons;
