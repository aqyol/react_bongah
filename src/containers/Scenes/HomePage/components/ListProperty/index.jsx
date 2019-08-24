import React from 'react';
import SingleHouse from '../../../../../shared/components/SingleHouse';

const houseData = [{
  name: 'خانه آپارتمانی در نارمک',
  address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
  beds: 2,
  toilets: 1,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
}, {
  name: 'خانه آپارتمانی در نارمک',
  address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
}, {
  name: 'خانه آپارتمانی در نارمک',
  address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
}, {
  name: 'خانه آپارتمانی در نارمک',
  address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
}, {
  name: 'خانه آپارتمانی در نارمک',
  address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
}, {
  name: 'خانه آپارتمانی در نارمک',
  address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
}];

const arr = [0, 1, 2, 3, 4, 5];

const ListProperty = () => (
  <div className="listProperty">
    <div className="row listPropertyHeader">
      <h3>آخرین آگهی های افزوده شده</h3>
    </div>
    <div className="row listPropertyContent">
      {arr.map((value, index) => (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index.toString()}>
          <SingleHouse data={houseData[value]} />
        </div>
      ))}
    </div>
  </div>
);

export default ListProperty;
