import React from 'react';
import PropTypes from 'prop-types';

const Caption = props => (
  <div>
    {props.isPresist
    && (
      <div className="homeCaption">
        <div className="homeTitle">خرید و اجاره خانه، آسانتر از همیشه</div>
        <div className="homeSubtitle">
          اولین سایت بنگاهی با قابلیت قول نامه در کشور
        </div>
      </div>
    )
    }
  </div>
);

Caption.propTypes = {
  isPresist: PropTypes.bool.isRequired,
};

export default Caption;
