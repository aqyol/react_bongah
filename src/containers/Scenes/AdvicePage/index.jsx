import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import NewItem from '../NewsPage/components/NewItem';


const listNew = [
  {
    linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/e9/61/d5/e961d52aa9a87bc47a365e6c593421db.jpg',
    title: 'آپارتمان اداری',
    address: 'تهران - ونک',
    date: '1398/03/12',
    content: 'یک واحد آپارتمان اداری با امکانات کامل',
  },
  {
    linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/e9/61/d5/e961d52aa9a87bc47a365e6c593421db.jpg',
    title: 'آپارتمان اداری',
    address: 'تهران - ونک',
    date: '1398/03/12',
    content: 'یک واحد آپارتمان اداری با امکانات کامل',
  },
  {
    linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/e9/61/d5/e961d52aa9a87bc47a365e6c593421db.jpg',
    title: 'آپارتمان اداری',
    address: 'تهران - ونک',
    date: '1398/03/12',
    content: 'یک واحد آپارتمان اداری با امکانات کامل',
  },
  {
    linkImage: 'https://s-media-cache-ak0.pinimg.com/originals/e9/61/d5/e961d52aa9a87bc47a365e6c593421db.jpg',
    title: 'آپارتمان اداری',
    address: 'تهران - ونک',
    date: '1398/03/12',
    content: 'یک واحد آپارتمان اداری با امکانات کامل',
  },
];

const AdvicePage = props => (
  <div className="advicePage">
    <Dashboard>
      <div className="dashboardTitle">
        <h3>({props.match.params.type})توصیه های  </h3>
      </div>
      <div className="dashboardBody row">
        <div className="newItemWrapper container">
          {listNew.map((item, index) => (
            <div className="col-xs-12 col-sm-12 col-md-6" key={index.toString()}>
              <NewItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </Dashboard>
  </div>
);

AdvicePage.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AdvicePage;
