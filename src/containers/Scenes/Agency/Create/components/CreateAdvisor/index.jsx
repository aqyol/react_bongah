import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
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

const zones = [
  {
    value: 0,
    label: 'تهران',
  },
  {
    value: 1,
    label: 'شیراز',
  },
  {
    value: 2,
    label: 'مشهد',
  },
  {
    value: 3,
    label: 'تبریز',
  },
  {
    value: 4,
    label: 'اصفهان',
  },
  {
    value: 5,
    label: 'بندرعباس',
  },
  {
    value: 6,
    label: 'قم',
  },
  {
    value: 7,
    label: 'کرج',
  },
  {
    value: 8,
    label: 'یزد',
  },
  {
    value: 9,
    label: 'گنبد',
  },
  {
    value: 10,
    label: 'بندرترکمن',
  },
];

// const styleFn = provided => ({ ...provided, width: '100%' });

const customStyles = {
  option: provided => ({
    ...provided,
  }),
  container: () => ({
    width: '100%',
  }),
  menu: provided => ({
    ...provided,
    zIndex: 5,
  }),
  menuList: () => ({
    width: '100%',
  }),
};

const selectTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#98EAD3',
    primary: '#54E1B9',
    primary50: '#B4EEDD',
  },
});

class CreateAdvisor extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      address: '',
      website: '',
      attachments: [],
      type: 2,
      city: '',
      parish: '',
      region: '',
      zone: '',
      startDate: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleSelectRegion = this.handleSelectRegion.bind(this);
    this.searchRegion = this.searchRegion.bind(this);
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

  isValidNewOption = () => ((this.state.parish.length > 0 && this.state.parish.length < 3));

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
      || startDate.trim().length < 4
    );
  }

  searchRegion(name, callback) {
    console.log(this.state.region);
    setTimeout(() => {
      callback(zones);
    }, 1000);

    //   searchGoods(name, this.props.businessId)
    //     .then((response) => {
    //       this.setState({ totalGoods: response.totalScopes });
    //       callback(response.totalScopes);
    //     })
    //     .catch(() => (null));
  }

  handleSelectRegion(selected, name) {
    if (selected === null || selected === undefined) {
      this.setState({ [name]: [] });
      return;
    }
    if (name === 'parish' && selected.length > 3) {
      return;
    }
    this.setState({ [name]: selected });
  }

  handleTypeSelect(name, num) {
    console.group('select type');
    console.log(name, num);
    console.groupEnd();
    this.setState({ [name]: num });
  }

  handleMultiSelect(name, selected) {
    this.setState({ [name]: (selected !== null) ? selected : [] });
  }

  render() {
    return (
      <div>
        <form className="form form--horizontal">
          <Row style={{ width: '100%' }}>
            <Col xs={12} sm={4} md={4} lg={3} xl={2}>
              <FormGroup>
                <AsyncSelect
                  isMulti={false}
                  cache={false}
                  defaultOptions
                  loadOptions={(input, callback) => { this.promiseOptions(input, callback, 'city'); }}
                  onChange={(e) => { this.handleSelectRegion(e, 'city'); }}
                  placeholder="انتخاب شهر"
                  value={this.state.city}
                  options={zones}
                  loadingMessage={() => ('درحال بارگزاری...')}
                  theme={theme => selectTheme(theme)}
                  noOptionsMessage={() => ('شهری یافت نشد')}
                  styles={customStyles}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={4} lg={3} xl={2}>
              <FormGroup>
                <AsyncSelect
                  isMulti={false}
                  cache={false}
                  defaultOptions
                  loadOptions={(input, callback) => { this.promiseOptions(input, callback, 'region'); }}
                  onChange={(e) => { this.handleSelectRegion(e, 'region'); }}
                  placeholder="انتخاب منطقه"
                  value={this.state.region}
                  options={zones}
                  loadingMessage={() => ('درحال بارگزاری...')}
                  theme={theme => selectTheme(theme)}
                  noOptionsMessage={() => ('منطقه ای یافت نشد')}
                  styles={customStyles}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={4} lg={3} xl={2}>
              <FormGroup>
                <AsyncSelect
                  isMulti
                  cache={false}
                  defaultOptions
                  loadOptions={(input, callback) => { this.promiseOptions(input, callback, 'parish'); }}
                  onChange={(e) => { this.handleSelectRegion(e, 'parish'); }}
                  placeholder="انتخاب محله"
                  value={this.state.parish}
                  options={zones}
                  loadingMessage={() => ('درحال بارگزاری...')}
                  theme={theme => selectTheme(theme)}
                  noOptionsMessage={() => ('محله ای یافت نشد')}
                  styles={customStyles}
                />
              </FormGroup>
            </Col>
            <Col xs={12} sm={4} md={4} lg={3} xl={2}>
              <DatePicker
                selectedDay={this.state.startDate}
                onChange={(date) => { this.setStartDate(date); }}
                inputPlaceholder="تاریخ شروع فعالیت"
                wrapperClassName="date-picker"
                calendarClassName="date-picker"
              />
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

export default CreateAdvisor;
