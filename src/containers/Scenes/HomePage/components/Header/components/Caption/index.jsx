import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="btn btn-warning" to="/search">اطلاعات بیشتر</Link>
      </div>
    )
    }
  </div>
);

Caption.propTypes = {
  isPresist: PropTypes.bool.isRequired,
};

export default Caption;
