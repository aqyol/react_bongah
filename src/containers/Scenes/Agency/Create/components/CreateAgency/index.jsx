import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { NumberInput } from 'react-hichestan-numberinput';
import Dropzone from 'react-dropzone-uploader';
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
import PropTypes from 'prop-types';
import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import DatePicker from 'react-persian-calendar-date-picker';


const Layout = ({
  input, previews, submitButton, dropzoneProps, files, extra: { maxFiles },
}) => (
  <div className="dzu-frame">
    {previews}
    <div {...dropzoneProps}>
      {files.length < maxFiles && input}
    </div>
    {files.length > 0 && submitButton}
  </div>
);


Layout.propTypes = {
  input: PropTypes.func.isRequired,
  previews: PropTypes.func.isRequired,
  submitButton: PropTypes.func.isRequired,
  dropzoneProps: PropTypes.func.isRequired,
  files: PropTypes.shape().isRequired,
  extra: PropTypes.shape({
    maxFiles: PropTypes.number.isRequired,
  }).isRequired,
};
const DropZoneInput = ({
  accept, onFiles, getFilesFromEvent,
}) => (
  <label htmlFor="dropName">
    <svg className="addIcon" viewBox="0 0 24 24">
      <path
        fill="#3cf500"
        d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10
         0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,
         12A10,10 0 0,0 12,2Z"
      />
    </svg>
    <input
      style={{
        position: 'absolute',
        zIndex: 2,
        height: '100%',
        width: '100%',
        opacity: 0,
        maxWidth: '150px',
      }}
      type="file"
      name="dropName"
      accept={accept}
      multiple
      onChange={(e) => {
        getFilesFromEvent(e).then((chosenFiles) => {
          onFiles(chosenFiles);
        });
      }}
    />
  </label>
);

DropZoneInput.propTypes = {
  accept: PropTypes.func.isRequired,
  onFiles: PropTypes.func.isRequired,
  getFilesFromEvent: PropTypes.func.isRequired,
};


class CreateAgency extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      address: '',
      website: '',
      attachments: [],
      type: 2,
      startDate: '',
      description: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
  }

  componentDidMount() {
  }

  setStartDate(startDate) {
    console.group('start date');
    console.log(startDate);
    console.groupEnd();
    this.setState({ startDate });
  }

  // specify upload params and url for your files
  getUploadParams = () => ({ url: 'https://httpbin.org/post' });

  // called every time a file's `status` changes
  handleChangeStatus = ({ meta, xhr }, status) => {
    if (status === 'done' && xhr !== undefined) {
      console.group('done upload');
      console.log(meta);
      console.groupEnd();
      this.setState((prevState) => {
        const { attachments: attachValues, ...other } = prevState;
        return {
          attachments: (attachValues.length < 1) ? [xhr.response] : [...attachValues, xhr.response],
          ...other,
        };
      });
    } else if (status === 'removed' && xhr !== undefined) {
      console.group('done remove');
      console.log(meta);
      console.groupEnd();
    }
  };

  getFilesFromEvent = e => (
    new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map(f => f.fileObject));
      });
    }));

  promiseOptions = (inputValue, callback, option) => (
    new Promise((resolve) => {
      switch (option) {
        case 'region':
          resolve(this.searchRegion(inputValue, callback));
          break;
        case 'parish':
          resolve(this.searchRegion(inputValue, callback));
          break;
        case 'city':
          resolve(this.searchRegion(inputValue, callback));
          break;
        default:
          break;
      }
    }));

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmitRequest(e) {
    e.preventDefault();
    console.group('submit request');
    console.log(this.state);
    console.groupEnd();
  }

  isFormValid() {
    const {
      name,
      phone,
      address,
      startDate,
    } = this.state;
    return (
      name.trim().length < 5
      || phone.trim().length < 11
      || address.trim().length < 10
      || startDate.length < 4
    );
  }

  handleTypeSelect(name, num) {
    console.group('select type');
    console.log(name, num);
    console.groupEnd();
    this.setState({ [name]: num });
  }

  render() {
    return (
      <div>
        <form className="form form--horizontal">
          <Row>
            <Col xs={12} sm={4} md={3} lg={3} xl={2}>
              <FormGroup>
                <Label>نام آژانس املاک</Label>
                <Input
                  value={this.state.name}
                  autoComplete="off"
                  name="name"
                  onChange={(e) => { this.handleInputChange(e); }}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={3} lg={3} xl={2}>
              <FormGroup>
                <Label>تلفن ثابت</Label>
                <NumberInput
                  maxLength={11}
                  value={this.state.phone}
                  autoComplete="off"
                  name="phone"
                  className="form-control"
                  onChange={(e) => { this.handleInputChange(e); }}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={3} lg={3} xl={2}>
              <FormGroup>
                <Label>تاریخ شروع فعالیت</Label>
                <DatePicker
                  selectedDay={this.state.startDate}
                  onChange={(date) => { this.setStartDate(date); }}
                  inputPlaceholder="انتخاب روز"
                  wrapperClassName="date-picker"
                  calendarClassName="date-picker"
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={3} lg={3} xl={2}>
              <FormGroup>
                <Label>آدرس وبسایت (اختیاری)</Label>
                <Input
                  value={this.state.website}
                  autoComplete="off"
                  name="website"
                  className="englishText"
                  onChange={(e) => { this.handleInputChange(e); }}
                />
              </FormGroup>
            </Col>
          </Row>
          <div>
            <Label>آپلود مدارک</Label>
          </div>
          <div className="form-catalog">
            <div className="form__form-group div-catalog">
              <div className="form__form-group-field">
                <Dropzone
                  getUploadParams={this.getUploadParams}
                  onChangeStatus={this.handleChangeStatus}
                  accept="image/*, .pdf"
                  LayoutComponent={Layout}
                  InputComponent={DropZoneInput}
                  getFilesFromEvent={this.getFilesFromEvent}
                  classNames={{ inputLabelWithFiles: Dropzone.inputLabel }}
                />
              </div>
            </div>
          </div>
          <Row style={{ width: '100%' }}>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <FormGroup>
                <Label>آدرس</Label>
                <Input
                  type="textarea"
                  value={this.state.address}
                  autoComplete="off"
                  name="address"
                  onChange={(e) => { this.handleInputChange(e); }}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <FormGroup>
                <Label>درباره بنگاه</Label>
                <Input
                  type="textarea"
                  value={this.state.description}
                  autoComplete="off"
                  name="description"
                  onChange={(e) => { this.handleInputChange(e); }}
                />
              </FormGroup>
            </Col>
          </Row>
        </form>
        <Row>
          <Col
            xs={{ size: 6, offset: 3 }}
            sm={{ size: 4, offset: 4 }}
            md={{ size: 4, offset: 4 }}
            lg={{ size: 2, offset: 5 }}
          >
            <Button
              color="success"
              className="form-control"
              onClick={this.handleSubmitRequest}
              disabled={this.isFormValid()}
            >
              ثبت درخواست
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateAgency;
