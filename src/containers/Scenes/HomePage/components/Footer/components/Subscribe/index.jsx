import React from 'react';
import PropTypes from 'prop-types';


const Subscribe = props => (
  <div className="subComp col-xs-12 col-sm-6 col-md-3 col-lg-3">
    <div className="subCompTitle osLight">{props.children}</div>
    <form>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="آدرس ایمیل" />
      </div>
      <div className="form-group">
        <a href="#1" className="btn btn-green btn-block isThemeBtn">اطلاع بده</a>
      </div>
    </form>
  </div>
);

Subscribe.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Subscribe;
