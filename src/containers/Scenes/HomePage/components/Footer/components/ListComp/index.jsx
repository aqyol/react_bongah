import React from 'react';
import PropTypes from 'prop-types';


const ListComp = props => (
  <div className="listComp col-xs-6 col-sm-6 col-md-3 col-lg-3">
    <div className="listCompTitle osLight">
      {props.children}
    </div>
    <ul className="listMain">
      {props.list.map((item, index) => <li key={index.toString()}><a href="#1">{item}</a></li>)}
    </ul>
  </div>
);

ListComp.propTypes = {
  list: PropTypes.objectOf(PropTypes.object).isRequired,
  children: PropTypes.string.isRequired,
};

export default ListComp;
