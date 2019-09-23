import React, { PureComponent } from 'react';
import {
  TabProvider,
  Tab,
  TabPanel,
  TabList,
} from 'react-web-tabs';
import {
  Row,
  Col,
} from 'reactstrap';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import Dashboard from '../../../shared/components/DashboardLayout';
import CheckBox from '../../../shared/components/CheckBox';


const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
});

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
    const priceNum = (price === 0) ? 0 : parseFloat(price.replace(/,/g, ''));
    const depositNum = (deposit === 0) ? 0 : parseFloat(deposit.replace(/,/g, ''));
    const rentNum = (rent === 0) ? 0 : parseFloat(rent.replace(/,/g, ''));
    if (this.state.type === 'sell') {
      // totalRent = this.sellToRent(0, Number(convertToNum(this.price)));
      if (priceNum > 500000000) {
        union = Math.floor((500000000 * 0.005) + (Number(priceNum) - 500000000) * 0.0025);
        myCom = Math.floor(union / 4);
      } else {
        union = Math.floor((Number(priceNum) * 0.005));
        myCom = Math.floor(union / 4);
      }
    } else {
      // totalRent = this.sellToRent(Number(rent), Number(deposit));
      totalRent = (30000 * Number(depositNum)) / 1000000 + Number(rentNum);
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

  handleCheckChange() {
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
                      <Row className="commission-row">
                        <Col xs={3} sm={3} md={2} lg={2}>
                          <span className="input-group-addon">قیمت</span>
                        </Col>
                        <Col xs={6} sm={6} md={8} lg={8}>
                          <MaskedInput
                            mask={numberMask}
                            className="input-commission text-center"
                            placeholder="قیمت به تومان"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleInputChange}
                          />
                        </Col>
                        <Col xs={3} sm={3} md={2} lg={2}>
                          <span className="input-group-addon">تومان</span>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                  <TabPanel tabId="rent">
                    <Row className="commission-row">
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <span className="input-group-addon">ودیعه</span>
                      </Col>
                      <Col xs={6} sm={6} md={8} lg={8}>
                        <MaskedInput
                          mask={numberMask}
                          className="input-commission text-center"
                          placeholder="ودیعه به تومان"
                          name="deposit"
                          value={this.state.deposit}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <span className="input-group-addon">تومان</span>
                      </Col>
                    </Row>
                    <Row className="commission-row">
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <span className="input-group-addon">اجاره</span>
                      </Col>
                      <Col xs={6} sm={6} md={8} lg={8}>
                        <MaskedInput
                          mask={numberMask}
                          className="input-commission text-center"
                          placeholder="اجاره به تومان"
                          name="rent"
                          value={this.state.rent}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col xs={3} sm={3} md={2} lg={2}>
                        <span className="input-group-addon">تومان</span>
                      </Col>
                    </Row>
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
