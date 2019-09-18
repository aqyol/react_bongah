import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Collapse,
  CustomInput,
} from 'reactstrap';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import ImageUploader from 'react-images-upload';
import renderSelectField from '../../../../../shared/components/form/Select';


const applicationTypes = [
  {
    value: '0',
    label: 'مسکونی',
  }, {
    value: '1',
    label: 'اداری',
  }, {
    value: '2',
    label: 'موقعیت اداری',
  }, {
    value: '3',
    label: 'اقامتی،تفریحی',
  },
  {
    value: '3',
    label: 'انبار کالا',
  },
  {
    value: '3',
    label: 'تفریحی',
  },
  {
    value: '3',
    label: 'ورزشی',
  },
  {
    value: '3',
    label: 'مطب',
  },
  {
    value: '3',
    label: 'آموزشی',
  },
];

const types = [
  {
    value: '0',
    label: 'فروش',
  },
  {
    value: '1',
    label: 'رهن و اجاره',
  },
  {
    value: '2',
    label: 'سوئیت',
  },
  {
    value: '3',
    label: 'پیش فروش',
  },
  {
    value: '4',
    label: 'مشارکت',
  },
];

const ownerTypes = [
  {
    value: '0',
    label: 'عنوان آورنده',
  },
  {
    value: '1',
    label: 'مالک',
  }, {
    value: '2',
    label: 'سازنده',
  },
];

const nums = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  }, {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
];

const checkboxItems = [
  {
    name: 'warehouse',
    label: 'انباری',
  },
  {
    name: 'balcony',
    label: 'بالکن',
  },
  {
    name: 'lobby',
    label: 'لابی',
  },
  {
    name: 'simpleIPhone',
    label: 'آیفون ساده',
  },
  {
    name: 'advancedIPhone',
    label: 'آیفون تصویری',
  },
  {
    name: 'cellar',
    label: 'زیرزمین',
  },
  {
    name: 'tree',
    label: 'درخت',
  },
  {
    name: 'store',
    label: 'مغازه',
  },
  {
    name: 'evacuation',
    label: 'تخلیه',
  },
  {
    name: 'powerThreePhase',
    label: 'کنتور برق سه فاز',
  },
  {
    name: 'separatePowerCounter',
    label: 'کنتور برق اختصاصی',
  },
  {
    name: 'separateWaterCounter',
    label: 'کنتور آب اختصاصی',
  },
  {
    name: 'separateGasCounter',
    label: 'کنتور گاز اختصاصی',
  },
];

const selectNumItems = [
  {
    name: 'rooms',
    label: 'تعداد اتاق',
  },
  {
    name: 'floors',
    label: 'طبقات',
  },
  {
    name: 'units',
    label: 'تعداد واحدها',
  },
  {
    name: 'floorUnits',
    label: 'واحد در طبقه',
  },
  {
    name: 'floor',
    label: 'طبقه',
  },
  {
    name: 'parking',
    label: 'پارکینگ',
  },
  {
    name: 'age',
    label: 'سن بنا',
  },
  {
    name: 'baths',
    label: 'حمام',
  },
  {
    name: 'masterRooms',
    label: 'مستر روم',
  },
  {
    name: 'elevators',
    label: 'آسانسور',
  },
  {
    name: 'owners',
    label: 'مالکین',
  },
  {
    name: 'phones',
    label: 'خط تلفن',
  },
  {
    name: 'entering',
    label: 'ورودی',
  },
  {
    name: 'irWC',
    label: 'سرویس ایرانی',
  },
  {
    name: 'engWC',
    label: 'سرویس خارجی',
  },
];

const selectToolsItems = [
  {
    name: 'floorCover',
    label: 'نوع کفپوش',
    values: [
      {
        value: '0',
        label: 'سرامیک',
      },
      {
        value: '1',
        label: 'سنگ',
      }, {
        value: '2',
        label: 'لمینت',
      },
      {
        value: '3',
        label: 'موکت',
      },
      {
        value: '4',
        label: 'چوب',
      },
      {
        value: '5',
        label: 'پارکت',
      },
      {
        value: '6',
        label: 'گرانیت',
      },
      {
        value: '7',
        label: 'موزاییک',
      },
      {
        value: '8',
        label: 'سیمان/آسفالت',
      },
      {
        value: '9',
        label: 'کفپوش صنعتی',
      },
    ],
  },
  {
    name: 'wallCover',
    label: 'دیوارپوش',
    values: [
      {
        value: '0',
        label: 'کاغذ دیواری',
      },
      {
        value: '1',
        label: 'رنگ شده',
      },
    ],
  },
  {
    name: 'cabinet',
    label: 'کابینت',
    values: [
      {
        value: '0',
        label: 'ام دی اف',
      },
      {
        value: '1',
        label: 'اچ دی اف',
      }, {
        value: '2',
        label: 'اچ دی ال',
      },
      {
        value: '3',
        label: 'چوب',
      },
      {
        value: '4',
        label: 'های گلاس',
      },
      {
        value: '5',
        label: 'اچ پی ال',
      },
      {
        value: '6',
        label: 'لترون',
      },
      {
        value: '7',
        label: 'ممبران',
      },
      {
        value: '8',
        label: 'فلزی',
      },
      {
        value: '9',
        label: 'روکش',
      },
      {
        value: '10',
        label: 'آکریلیک',
      },
    ],
  },
  {
    name: 'heatCoolSystem',
    label: 'سرمایش و گرمایش',
    values: [
      {
        value: '0',
        label: 'موتورخانه مرکزی',
      },
      {
        value: '1',
        label: 'پکیج',
      }, {
        value: '2',
        label: 'چیلر',
      },
      {
        value: '3',
        label: 'کولر آبی',
      },
      {
        value: '4',
        label: 'بخاری',
      },
      {
        value: '5',
        label: 'هوا ساز',
      },
      {
        value: '6',
        label: 'فن کویل',
      },
      {
        value: '7',
        label: 'کولر گازی',
      },
    ],
  },
  {
    name: 'shiralat',
    label: 'شیرآلات',
    values: [
      {
        value: '0',
        label: 'ایرانی',
      },
      {
        value: '1',
        label: 'خارجی',
      }, {
        value: '2',
        label: 'برند',
      },
      {
        value: '3',
        label: 'درجه ۱',
      },
      {
        value: '4',
        label: 'درجه ۲',
      },
      {
        value: '5',
        label: 'درجه ۳',
      },
      {
        value: '6',
        label: 'درجه ۴',
      },
    ],
  },
  {
    name: 'moble',
    label: 'امکانات مبله',
    values: [
      {
        value: '0',
        label: 'اجاق گاز',
      },
      {
        value: '1',
        label: 'یخچال',
      }, {
        value: '2',
        label: 'مبلمان',
      },
      {
        value: '3',
        label: 'مایکروویو',
      },
      {
        value: '4',
        label: 'تلویزیون',
      },
      {
        value: '5',
        label: 'فرش',
      },
      {
        value: '6',
        label: 'پرده',
      },
      {
        value: '7',
        label: 'لوستر',
      },
      {
        value: '8',
        label: 'اتو',
      },
      {
        value: '9',
        label: 'ماشین لباسشویی',
      },
      {
        value: '10',
        label: 'ماشین ظرفشویی',
      },
      {
        value: '11',
        label: 'جاروبرقی',
      },
      {
        value: '12',
        label: 'ظروف',
      },
      {
        value: '13',
        label: 'تخت',
      },
      {
        value: '14',
        label: 'چای ساز',
      },
    ],
  },
  {
    name: 'window',
    label: 'نوع پنجره',
    values: [
      {
        value: '0',
        label: 'چوبی',
      },
      {
        value: '1',
        label: 'قدی',
      }, {
        value: '2',
        label: 'دوجداره(پی وی سی)',
      },
      {
        value: '3',
        label: 'فلزی',
      },
      {
        value: '4',
        label: 'ام دی اف',
      },
      {
        value: '5',
        label: 'اچ دی اف',
      },
    ],
  },
  {
    name: 'entranceDoor',
    label: 'درب ورودی',
    values: [
      {
        value: '0',
        label: 'ساده',
      },
      {
        value: '1',
        label: 'ضد سرقت',
      },
    ],
  },
  {
    name: 'view',
    label: 'نمای ساختمان',
    values: [
      {
        value: '0',
        label: 'سنگ',
      },
      {
        value: '1',
        label: 'سرامیک',
      }, {
        value: '2',
        label: 'آلومینیوم',
      },
      {
        value: '3',
        label: 'شیشه',
      },
      {
        value: '4',
        label: 'آجری',
      },
      {
        value: '5',
        label: 'کامپوزیت',
      },
      {
        value: '6',
        label: 'سیمان',
      },
      {
        value: '7',
        label: 'چوب',
      },
      {
        value: '8',
        label: 'رومی',
      },
    ],
  },
  {
    name: 'structureType',
    label: 'نوع سازه',
    values: [
      {
        value: '0',
        label: 'فلزی',
      },
      {
        value: '1',
        label: 'بتن و میلگرد',
      }, {
        value: '2',
        label: 'پیچ و مهره',
      },
    ],
  },
  {
    name: 'VIPfacilities',
    label: 'امکانات ویژه',
    values: [
      {
        value: '0',
        label: 'استخر',
      },
      {
        value: '1',
        label: 'سونا',
      }, {
        value: '2',
        label: 'جکوزی',
      },
      {
        value: '3',
        label: 'وان حمام',
      },
      {
        value: '4',
        label: 'استخر کودکان',
      },
      {
        value: '5',
        label: 'باربیکیو',
      },
      {
        value: '6',
        label: 'یارد گاردن',
      },
      {
        value: '7',
        label: 'روف گاردن',
      },
      {
        value: '8',
        label: 'لابی',
      },
      {
        value: '9',
        label: 'فضای بازی کودکان',
      },
      {
        value: '10',
        label: 'اطفا حریق',
      },
      {
        value: '11',
        label: 'سیستم امنیتی',
      },
      {
        value: '12',
        label: 'شومینه',
      },
      {
        value: '13',
        label: 'اعلام حریق',
      },
      {
        value: '14',
        label: 'تصفیه کننده آب',
      },
      {
        value: '15',
        label: 'منبع ذخیره آب',
      },
      {
        value: '16',
        label: 'ریموت پارکینگ',
      },
      {
        value: '17',
        label: 'هود',
      },
      {
        value: '18',
        label: 'تهویه',
      },
      {
        value: '19',
        label: 'جاروبرقی مرکزی',
      },
      {
        value: '20',
        label: 'اجاق گاز',
      },
      {
        value: '21',
        label: 'لوستر',
      },
      {
        value: '22',
        label: 'شوتینگ زباله',
      },
      {
        value: '23',
        label: 'آلاچیق',
      },
      {
        value: '24',
        label: 'گاوصندوق',
      },
      {
        value: '25',
        label: 'آمفی تاتر',
      },
      {
        value: '26',
        label: 'سالن اجتماعات',
      },
      {
        value: '27',
        label: 'اسمارت هوم',
      },
      {
        value: '28',
        label: 'باتری خورشیدی',
      },
      {
        value: '29',
        label: 'برق اضطراری',
      },
      {
        value: '30',
        label: 'امکانات رفاهی معلولین',
      },
      {
        value: '31',
        label: 'اتاق سرایداری',
      },
      {
        value: '32',
        label: 'آب نما',
      },
      {
        value: '33',
        label: 'اتاق مدیریت',
      },
      {
        value: '34',
        label: 'درب ضد سرقت',
      },
      {
        value: '35',
        label: 'باشگاه جیم',
      },
      {
        value: '36',
        label: 'پارکینگ مهمان',
      },
      {
        value: '37',
        label: 'میز بیلیارد',
      },
      {
        value: '38',
        label: 'زمین تنیس',
      },
    ],
  },
];

const selectOtherItems = [
  {
    name: 'geoLocation',
    label: 'موقعیت جغرافیایی',
    values: [
      {
        value: '0',
        label: 'شمال',
      },
      {
        value: '1',
        label: 'جنوب',
      }, {
        value: '2',
        label: 'شرق',
      },
      {
        value: '3',
        label: 'غرب',
      },
      {
        value: '4',
        label: 'دو نبش',
      },
      {
        value: '5',
        label: 'سه نبش',
      },
    ],
    isMulti: true,
  },
  {
    name: 'outlook',
    label: 'چشم انداز',
    values: [
      {
        value: '0',
        label: 'کوهستان',
      },
      {
        value: '1',
        label: 'دریا',
      }, {
        value: '2',
        label: 'دریاچه',
      },
      {
        value: '3',
        label: 'رودخانه',
      },
      {
        value: '4',
        label: 'جنگل',
      },
      {
        value: '5',
        label: 'شهر',
      },
      {
        value: '6',
        label: 'آسمان',
      },
      {
        value: '7',
        label: 'پانوراما',
      },
      {
        value: '8',
        label: 'پارک',
      },
    ],
    isMulti: true,
  },
  {
    name: 'direction',
    label: 'جهت واحد',
    values: [
      {
        value: '0',
        label: 'شمال',
      },
      {
        value: '1',
        label: 'جنوب',
      }, {
        value: '2',
        label: 'شرق',
      },
      {
        value: '3',
        label: 'غرب',
      },
      {
        value: '4',
        label: 'دو نبش',
      },
      {
        value: '5',
        label: 'سه نبش',
      },
    ],
    isMulti: true,
  },
  {
    name: 'skylightDirection',
    label: 'جهت نورگیر',
    values: [
      {
        value: '0',
        label: 'شمال',
      },
      {
        value: '1',
        label: 'جنوب',
      }, {
        value: '2',
        label: 'شرق',
      },
      {
        value: '3',
        label: 'غرب',
      },
      {
        value: '4',
        label: 'دو نبش',
      },
      {
        value: '5',
        label: 'سه نبش',
      },
    ],
    isMulti: true,
  },
  {
    name: 'unitType',
    label: 'نوع واحد',
    values: [
      {
        value: '0',
        label: 'فلت',
      },
      {
        value: '1',
        label: 'دوبلکس',
      }, {
        value: '2',
        label: 'تریپلکس',
      },
    ],
    isMulti: false,
  },
  {
    name: 'sanadType',
    label: 'نوع سند',
    values: [
      {
        value: '0',
        label: 'تعاونی',
      },
      {
        value: '1',
        label: 'شخصی',
      }, {
        value: '2',
        label: 'وکالتی',
      },
      {
        value: '3',
        label: 'اوقافی',
      },
      {
        value: '4',
        label: 'مبایعه نامه',
      },
      {
        value: '5',
        label: 'تجاری',
      },
      {
        value: '6',
        label: 'مشاع',
      },
      {
        value: '7',
        label: 'حاکم شرعی',
      },
      {
        value: '8',
        label: 'مسکونی',
      },
      {
        value: '9',
        label: 'سازمانی',
      },
      {
        value: '10',
        label: 'صنعتی',
      },
      {
        value: '11',
        label: 'اداری',
      },
    ],
    isMulti: false,
  },
];

const {
  Marker,
  ZoomControl,
  ScaleControl,
} = CedarMaps.getReactMapboxGl();

class AddNewPropertyForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      type: 0,
      applicationType: 0,
      ownerType: 0,
      area: 0,
      price: 0,
      unitPrice: 0,
      deposit: 0,
      rent: 0,
      dailyRent: 0,
      images: '',
      imagesData: '',
      toggleMoreInfo: false,
      toggleTools: false,
      toggleOthers: false,
      toggleMap: false,
      isLoading: false,
      moreInfo: {
        rooms: '',
        floors: '',
        units: '',
        floorUnits: '',
        floor: '',
        parking: '',
        age: '',
        baths: '',
        masterRooms: '',
        elevators: '',
        owners: '',
        phones: '',
        entering: '',
        irWC: '',
        engWC: '',
        warehouse: false,
        balcony: false,
        lobby: false,
        simpleIPhone: false,
        advancedIPhone: false,
        cellar: false,
        tree: false,
        store: false,
        evacuation: false,
        powerThreePhase: false,
        separatePowerCounter: false,
        separateWaterCounter: false,
        separateGasCounter: false,
        floorCover: '',
      },
      tools: {
        floorCover: '',
        wallCover: '',
        cabinet: '',
        heatCoolSystem: '',
        shiralat: '',
        moble: '',
        window: '',
        view: '',
        entranceDoor: '',
        structureType: '',
        VIPfacilities: '',
      },
      otherSelection: {
        geoLocation: '',
        outlook: '',
        direction: '',
        skylightDirection: '',
        unitType: '',
        sanadType: '',
      },
      location: {
        lat: 51.34379364705882,
        lng: 35.74109568627451,
      },
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.handleInputMoreInfoChange = this.handleInputMoreInfoChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleSelectType = this.handleSelectType.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(images, imagesData) {
    this.setState({ images, imagesData });
  }


  handleTypeSelect(index, name) {
    this.setState({ [name]: index });
    console.log(index);
    console.log(name);
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if ((name === 'area') && (value > 0)) {
      const { price } = this.state;
      this.setState({
        area: value,
        unitPrice: Math.floor(price / value),
      });
      return;
    }
    if ((name === 'price') && (value > 0)) {
      const { area } = this.state;
      this.setState({
        price: value,
        unitPrice: Math.floor(value / area),
      });
      return;
    }
    this.setState({
      [name]: value,
    });
    console.log(e.target.value);
  }

  toggleCollapse(e, name) {
    e.preventDefault();
    this.setState((prevState) => {
      const { [name]: prevValue } = prevState;
      return {
        [name]: !prevValue,
      };
    });
  }

  handleInputMoreInfoChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      moreInfo: { [name]: value },
    });
    console.log(e.target.value);
    setTimeout(() => {
      const { [name]: value1 } = this.state.moreInfo;
      console.log(name);
      console.log(value1);
    }, 2000);
  }


  handleToggleChange(e) {
    const { name } = e.target;
    this.setState((prevState) => {
      const { [name]: prevValue, ...other } = prevState.moreInfo;
      const newInfo = { ...other, [name]: !prevValue };
      return {
        moreInfo: newInfo,
      };
    });
  }

  handleSelectType(selectedScopes, name) {
    if (selectedScopes === null) {
      this.setState((prevState) => {
        const { [name]: values, ...other } = prevState.tools;
        const newInfo = { ...other, [name]: [] };
        return {
          tools: newInfo,
        };
      });
      return;
    }
    this.setState((prevState) => {
      const { [name]: prevValue, ...other } = prevState.tools;
      const newInfo = { ...other, [name]: selectedScopes };
      return {
        tools: newInfo,
      };
    });
  }

  handleMapClick(map, data) {
    this.setState({
      location: {
        lat: data.lngLat.lng,
        lng: data.lngLat.lat,
      },
    });
  }

  handleSave(e) {
    e.preventDefault();
    console.group('save click');
    console.log(this.state);
    console.groupEnd();
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const checkItems = checkboxItems.map(item => (
      <Col md={2} sm={3} xs={4}>
        <FormGroup>
          <CustomInput
            type="checkbox"
            id={item.name}
            name={item.name}
            label={item.label}
            value={() => {
              const { [item.name]: value } = this.state.moreInfo;
              return {
                value,
              };
            }}
            onChange={this.handleToggleChange}
          />
        </FormGroup>
      </Col>
    ));

    const selectItems = selectNumItems.map(item => (
      <Col md={2} sm={3} xs={6}>
        <FormGroup>
          {renderSelectField({
            input: {
              onChange: (e) => { this.handleTypeSelect(Number(e.value), item.name); },
              isMulti: false,
              name: item.name,
              value: nums[() => {
                const { [item.name]: value } = this.state.moreInfo;
                return {
                  value,
                };
              }],
            },
            placeholder: item.label,
            options: nums,
            name: 'select',
            type: 'text',
          })}
        </FormGroup>
      </Col>
    ));

    const selectTools = selectToolsItems.map(item => (
      <Col md={3} sm={4} xs={6}>
        <FormGroup>
          {renderSelectField({
            input: {
              onChange: (e) => {
                this.handleSelectType(e, item.name);
              },
              isMulti: true,
              name: item.name,
              value: item.values[() => {
                const { [item.name]: value } = this.state.tools;
                return {
                  value,
                };
              }],
            },
            placeholder: item.label,
            options: item.values,
            name: 'select',
            type: 'text',
          })}
        </FormGroup>
      </Col>
    ));

    const otherSelect = selectOtherItems.map(item => (
      <Col md={3} sm={4} xs={6}>
        <FormGroup>
          {renderSelectField({
            input: {
              onChange: (e) => {
                this.handleSelectType(e, item.name);
              },
              isMulti: item.isMulti,
              name: item.name,
              value: item.values[() => {
                const { [item.name]: value } = this.state.otherSelection;
                return {
                  value,
                };
              }],
            },
            placeholder: item.label,
            options: item.values,
            name: 'select',
            type: 'text',
          })}
        </FormGroup>
      </Col>
    ));

    return (
      <div className="newPropertyForm">
        {this.state.isLoading
        && (
          <div className={`load${this.state.isLoading ? '' : ' loaded'}`}>
            <div className="load__icon-wrap">
              <svg className="load__icon">
                <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
              </svg>
            </div>
          </div>
        )
        }
        <Form>
          <Row form>
            <Col md={4} sm={6} xs={12}>
              <FormGroup>
                {renderSelectField({
                  input: {
                    onChange: (e) => { this.handleTypeSelect(Number(e.value), 'type'); },
                    isMulti: false,
                    name: 'type',
                    value: types[this.state.type],
                  },
                  placeholder: 'نوع ملک',
                  options: types,
                  name: 'select',
                  type: 'text',
                })}
              </FormGroup>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <FormGroup>
                {renderSelectField({
                  input: {
                    onChange: (e) => { this.handleTypeSelect(Number(e.value), 'applicationType'); },
                    isMulti: false,
                    name: 'applicationType',
                    value: applicationTypes[this.state.applicationType],
                  },
                  placeholder: 'نوع کاربری ملک',
                  options: applicationTypes,
                  name: 'select',
                  type: 'text',
                })}
              </FormGroup>
            </Col>
            {this.state.type === 4
            && (
              <Col md={4} sm={6} xs={12}>
                <FormGroup>
                  {renderSelectField({
                    input: {
                      onChange: (e) => { this.handleTypeSelect(Number(e.value), 'ownerType'); },
                      isMulti: false,
                      name: 'ownerType',
                      value: ownerTypes[this.state.ownerType],
                    },
                    placeholder: 'عنوان آورنده',
                    options: ownerTypes,
                    name: 'select',
                    type: 'text',
                  })}
                </FormGroup>
              </Col>
            )}
            {(this.state.type !== 1 && this.state.type !== 2)
            && (
              <Col md={4} sm={6} xs={12}>
                <FormGroup>
                  <Label for="price">قیمت کل(تومان)</Label>
                  <Input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="قیمت"
                    value={this.state.price}
                    onChange={(e) => { this.handleInputChange(e); }}
                  />
                </FormGroup>
              </Col>
            )}
            {this.state.type === 1
            && (
              <>
                <Col md={4} sm={6} xs={12}>
                  <FormGroup>
                    <Label for="deposit">ودیعه(تومان)</Label>
                    <Input
                      type="number"
                      name="deposit"
                      id="deposit"
                      placeholder="ودیعه"
                      value={this.state.deposit}
                      onChange={(e) => { this.handleInputChange(e); }}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <FormGroup>
                    <Label for="rent">اجاره(تومان)</Label>
                    <Input
                      type="number"
                      name="rent"
                      id="rent"
                      placeholder="اجاره"
                      value={this.state.rent}
                      onChange={(e) => { this.handleInputChange(e); }}
                    />
                  </FormGroup>
                </Col>
              </>
            )}
            {this.state.type === 2
            && (
              <>
                <Col md={4} sm={6} xs={12}>
                  <FormGroup>
                    <Label for="deposit">اجاره روزانه(تومان)</Label>
                    <Input
                      type="number"
                      name="dailyRent"
                      id="dailyRent"
                      placeholder="اجاره روزانه"
                      value={this.state.dailyRent}
                      onChange={(e) => { this.handleInputChange(e); }}
                    />
                  </FormGroup>
                </Col>
              </>
            )}
            <Col md={4} sm={6} xs={12}>
              <FormGroup>
                <Label for="area">متراژ</Label>
                <Input
                  type="number"
                  name="area"
                  id="area"
                  placeholder="متراژ"
                  value={this.state.area}
                  onChange={(e) => { this.handleInputChange(e); }}
                />
              </FormGroup>
            </Col>
            {(this.state.type !== 1 && this.state.type !== 2)
            && (
              <Col md={4} sm={6} xs={12}>
                <FormGroup>
                  <Label for="unitPrice">قیمت هر مترمربع</Label>
                  <Input
                    type="number"
                    name="unitPrice"
                    id="unitPrice"
                    placeholder="قیمت هر مترمربع"
                    disabled
                    value={this.state.unitPrice}
                    onChange={(e) => { this.handleInputChange(e); }}
                  />
                </FormGroup>
              </Col>
            )}
          </Row>
          <Row>
            <Col xs={12} md={4} sm={6}>
              <Button
                outline
                color="primary"
                onClick={(e) => { this.toggleCollapse(e, 'toggleMoreInfo'); }}
                style={{ marginBottom: '1rem', width: '100%' }}
              >
                وارد کردن اطلاعات بیشتر(اختیاری)
              </Button>
            </Col>
          </Row>
          <Collapse
            isOpen={this.state.toggleMoreInfo}
          >
            <Row form>
              {selectItems}
              {checkItems}
            </Row>
          </Collapse>
          <Row>
            <Col xs={12} md={4} sm={6}>
              <Button
                outline
                color="primary"
                onClick={(e) => { this.toggleCollapse(e, 'toggleTools'); }}
                style={{ marginBottom: '1rem', width: '100%' }}
              >
                اطلاعات ابزار بکار رفته(اختیاری)
              </Button>
            </Col>
          </Row>
          <Collapse
            isOpen={this.state.toggleTools}
          >
            <Row form>
              {selectTools}
            </Row>
          </Collapse>
          <Row>
            <Col xs={12} md={4} sm={6}>
              <Button
                outline
                color="primary"
                onClick={(e) => { this.toggleCollapse(e, 'toggleOthers'); }}
                style={{ marginBottom: '1rem', width: '100%' }}
              >
                سایر اطلاعات
              </Button>
            </Col>
          </Row>
          <Collapse
            isOpen={this.state.toggleOthers}
          >
            <Row form>
              {otherSelect}
            </Row>
          </Collapse>
          <Row form>
            <Col sm={12} md={12} lg={12}>
              <ImageUploader
                withIcon
                buttonText="انتخاب عکس"
                onChange={(images, pictures) => { this.onDrop(images, pictures); }}
                imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview
                fileSizeError="حجم فایل انتخاب شده بیشتر از حد مجاز است"
                fileTypeError="فایل انتخاب شده قابل پشتیبانی نیست"
                label="حد مجاز برای حجم عکس ها ۵ مگابایت می باشد"
              />
            </Col>
          </Row>
          <Row form>
            <Col md={6} sm={12} xs={12} lg={6}>
              <FormGroup>
                <Label for="address">آدرس</Label>
                <Input type="textarea" name="address" id="address" />
              </FormGroup>
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
              <FormGroup>
                <Label for="description">توضیحات</Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} sm={6}>
              <Button
                outline
                color="primary"
                onClick={(e) => { this.toggleCollapse(e, 'toggleMap'); }}
                style={{ marginBottom: '1rem', width: '100%' }}
              >
                انتخاب محل روی نقشه
              </Button>
            </Col>
          </Row>
          {this.state.toggleMap
          && (
            <div>
              <CedarMaps
                containerStyle={{
                  height: '80vh',
                  width: '100%',
                }}
                token="8d8be29d01ea833ea7bacdd1836567d67c678a70"
                center={[this.state.location.lat, this.state.location.lng]}
                preserveDrawingBuffer={false}
                onClick={(map, data) => { this.handleMapClick(map, data); }}
              >
                <ZoomControl />
                <ScaleControl />
                <Marker
                  coordinates={[this.state.location.lat, this.state.location.lng]}
                >
                  <img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="marker" />
                </Marker>
              </CedarMaps>
            </div>
          )}
          <Row>
            <Col lg={4} md={4} sm={4} />
            <Col lg={4} md={4} sm={4}>
              <Button onClick={this.handleSave} className="btn-success btn-save">ذخیره</Button>
            </Col>
            <Col lg={4} md={4} sm={4} />
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddNewPropertyForm;
