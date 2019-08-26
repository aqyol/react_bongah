import React, { PureComponent } from 'react';
import {
  TabProvider,
  Tab,
  TabPanel,
  TabList,
} from 'react-web-tabs';
import Dashboard from '../../../shared/components/DashboardLayout';
import CheckBox from '../../../shared/components/CheckBox';

class Commission extends PureComponent {
  constructor() {
    super();
    this.state = {
      type: 'sell',
      price: '',
      deposit: '',
      rent: '',
      normalCommission: 0,
      ourCommission: 0,
      haveCode: false,
      a: 0,
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleTabChange(tabId) {
    this.setState({
      type: tabId,
      normalCommission: 0,
      ourCommission: 0,
    });
    console.log(this.state.a);
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  calculate() {
    let { price, deposit, rent } = this.state;
    let myCom = 0;
    let union = 0;
    let totalRent = 0;
    if (price === '' || price === undefined) {
      price = 0;
    }
    if (rent === '' || rent === undefined) {
      rent = 0;
    }
    if (deposit === '' || deposit === undefined) {
      deposit = 0;
    }
    if (this.state.type === 'sell') {
      // totalRent = this.sellToRent(0, Number(convertToNum(this.price)));
      if (price > 500000000) {
        union = Math.floor((500000000 * 0.005) + (Number(price) - 500000000) * 0.0025);
        myCom = Math.floor(union / 4);
      } else {
        union = Math.floor((Number(price) * 0.005));
        myCom = Math.floor(union / 4);
      }
    } else {
      // totalRent = this.sellToRent(Number(rent), Number(deposit));
      totalRent = (30000 * Number(deposit)) / 1000000 + Number(rent);
      myCom = Math.floor(totalRent * 0.05);
      union = Math.floor(totalRent * 0.25);
    }

    if (this.state.haveCode) {
      myCom = Math.floor(union * 0.09) + Math.floor(myCom);
      union = Math.floor(union * 1.09);
    }

    const formatter = new Intl.NumberFormat();

    union = formatter.format(union);
    myCom = formatter.format(myCom);

    this.setState({
      normalCommission: union,
      ourCommission: myCom,
    });
  }

  handleCheckChange(e) {
    console.log(e.target);
    console.log(this.state);
    this.setState(prevState => ({
      haveCode: !prevState.haveCode,
    }));
  }

  render() {
    return (
      <div>
        <Dashboard>
          <div className="commission">
            <TabProvider
              defaultTab={this.state.type}
              onChange={(tabId) => { this.handleTabChange(tabId); }}
            >
              <section className="my-tabs">
                <TabList className="my-tablist">
                  <Tab tabFor="sell">خرید و فروش</Tab>
                  <span className="divider">•</span>
                  <Tab tabFor="rent">رهن و اجاره</Tab>
                </TabList>
                <div className="wrapper">
                  <TabPanel tabId="sell">
                    <div className="row form-group">
                      <div className="Price col-xs-12 col-sm-12 col-md-12 tab-panel">
                        <div className="input-group">
                          <span className="input-group-addon">قیمت</span>
                          <input
                            type="text"
                            name="price"
                            id=""
                            value={this.state.price}
                            className="form-control"
                            onChange={this.handleInputChange}
                            placeholder="قیمت به تومان"
                          />
                          <span className="input-group-addon">تومان</span>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel tabId="rent">
                    <div className="row form-group">
                      <div className="title col-xs-12 col-sm-6 col-md-6 tab-panel">
                        <div className="input-group">
                          <span className="input-group-addon">ودیعه</span>
                          <input
                            type="text"
                            name="deposit"
                            id=""
                            value={this.state.deposit}
                            className="form-control"
                            onChange={this.handleInputChange}
                            placeholder="ودیعه به تومان"
                          />
                          <span className="input-group-addon">تومان</span>
                        </div>
                      </div>
                      <div className="Price col-xs-12 col-sm-6 col-md-6 tab-panel">
                        <div className="input-group">
                          <span className="input-group-addon">اجاره</span>
                          <input
                            type="text"
                            name="rent"
                            id=""
                            value={this.state.rent}
                            className="form-control"
                            onChange={this.handleInputChange}
                            placeholder="اجاره به تومان"
                          />
                          <span className="input-group-addon">تومان</span>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <div className="row text-center have-code">
                    <CheckBox
                      name="haveCode"
                      value={this.state.haveCode}
                      onChange={this.handleCheckChange}
                    >
                      نیاز به کدرهگیری
                    </CheckBox>
                  </div>
                  <button
                    type="button"
                    className="btn submit-btn"
                    onClick={this.calculate}
                  >
                    محاسبه
                  </button>
                </div>
              </section>
            </TabProvider>
            <div>
              <h3 className="text-center red-text">کمیسیون محاسبه شده</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="card card-commission other-comm">
                    <div className="card__title"><h4>تعرفه رایج بنگاه ها (تومان)</h4></div>
                    <div className="card-body card-content"><span>{this.state.normalCommission}</span></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="card card-commission">
                    <div className="card__title"><h4>تعرفه املاکیست (تومان)</h4></div>
                    <div className="card-body card-content"><span>{this.state.ourCommission}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default Commission;
