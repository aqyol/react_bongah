import React, { PureComponent } from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import Dashboard from '../../../../shared/components/DashboardLayout';


class CreateAgency extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Dashboard>
          <Container>
            <Row>
              <Col>
                <FormGroup>
                  <Label>نام</Label>
                  <Input
                    value={this.state.name}
                    autoComplete="off"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </Dashboard>
      </div>
    );
  }
}

export default CreateAgency;
