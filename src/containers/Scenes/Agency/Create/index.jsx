import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Card,
  CardBody,
} from 'reactstrap';
import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import Dashboard from '../../../../shared/components/DashboardLayout';
import renderRadioButtonField from '../../../../shared/components/form/RadioButton';
import CreateAdvisor from './components/CreateAdvisor';
import CreateAgency from './components/CreateAgency';


class Cooperation extends PureComponent {
  constructor() {
    super();
    this.state = {
      type: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
  }

  componentDidMount() {
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleTypeSelect(name, num) {
    console.group('select type');
    console.log(name, num);
    console.groupEnd();
    this.setState({ [name]: num });
  }

  render() {
    const formItem = (this.state.type === 2) ? <CreateAgency /> : <CreateAdvisor />;

    return (
      <div className="rtl-direction">
        <Dashboard>
          <Card>
            <CardBody>
              <div className="text-right card-title font-weight-bolder">
                <span>فرم درخواست همکاری</span>
              </div>
              <Row>
                <Col>
                  <FormGroup style={{ fontSize: '16px', height: '100%' }}>
                    <Label>نوع همکاری</Label>
                    {renderRadioButtonField({
                      input: {
                        onChange: () => { this.handleTypeSelect('type', 1); },
                        name: 'type',
                        value: this.state.type,
                      },
                      radioValue: 1,
                      label: 'مشاور',
                      type: 'text',
                    })}
                    {renderRadioButtonField({
                      input: {
                        onChange: () => { this.handleTypeSelect('type', 2); },
                        name: 'type',
                        value: this.state.type,
                      },
                      radioValue: 2,
                      label: 'املاک',
                      type: 'text',
                    })}
                  </FormGroup>
                </Col>
              </Row>
              {formItem}
            </CardBody>
          </Card>
        </Dashboard>
      </div>
    );
  }
}

export default Cooperation;
