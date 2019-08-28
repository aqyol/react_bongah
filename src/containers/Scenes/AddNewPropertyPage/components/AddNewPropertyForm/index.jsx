import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import SelectComponent from '../../../../../shared/components/SelectComponent';
import CheckBox from '../../../../../shared/components/CheckBox';
import InputMap from '../../../../../shared/components/InputMap';
import RadioButton from '../RadioButton';


const types = [
  'فروش',
  'رهن و اجاره',
];

const AddNewPropertyForm = () => (
  <div className="newPropertyForm">
    <div className="row form-group">
      <div className="title col-xs-12 col-sm-6 col-md-6">
        <h4>عنوان</h4>
        <input type="text" name="" id="" className="form-control" />
      </div>
      <div className="Price col-xs-12 col-sm-6 col-md-6">
        <h4>قیمت</h4>
        <div className="input-group">
          <span className="input-group-addon">تومان</span>
          <input type="text" name="" id="" className="form-control" />
        </div>
      </div>
    </div>
    <div className="row form-group">
      <div className="discription col-xs-12 col-sm-12 col-md-12">
        <h4>توضیحات</h4>
        <textarea className="description form-control" />
      </div>
    </div>
    <div className="row form-group">
      <div className="address col-xs-12 col-sm-12 col-md-12">
        <h4>آدرس</h4>
        <InputMap />
      </div>
    </div>
    <div className="row form-group">
      <div className="bedrooms col-xs-12 col-sm-6 col-md-3">
        <h4>اتاق خواب</h4>
        <input type="text" name="" id="" className="form-control" />
      </div>
      <div className="bathrooms col-xs-12 col-sm-6 col-md-3">
        <h4>حمام</h4>
        <input type="text" name="" id="" className="form-control" />
      </div>
      <div className="area col-xs-12 col-sm-6 col-md-3">
        <h4>متراژ</h4>
        <div className="input-group">
          <input type="text" name="" id="" className="form-control" />
          <span className="input-group-addon">متر مربع</span>
        </div>
      </div>
      <div className="type col-xs-12 col-sm-6 col-md-3">
        <h4>نوع</h4>
        <SelectComponent switchTop={false} listItem={types} />
      </div>
    </div>
    <div className="row form-group">
      <div className="imageGallery col-xs-12 col-sm-12 col-md-12">
        <h4>آلبوم عکس</h4>
        <div className="file-input file-input-new">
          <input type="hidden" value="" />
          <div className="file-preview">
            <div className="file-preview-status text-center text-success" />
            <div className="close fileinput-remove text-right">×</div>
            <div className="file-preview-thumbnails" />
            <div className="clearfix" />
          </div>
          <div className="btn btn-o btn-default btn-file">
            <FaFolderOpen />
            &nbsp;بارگذاری عکس
            <input type="file" className="file" multiple />
          </div>
        </div>
      </div>
    </div>
    <div className="row form-group">
      <div className="amenities col-xs-12 col-sm-12 col-md-12">
        <h4>امکانات</h4>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>پارکینگ</CheckBox>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>استخر روباز</CheckBox>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>باغچه</CheckBox>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>سیستم امنیتی</CheckBox>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>اینترنت</CheckBox>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>تلفن</CheckBox>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>تهویه هوا</CheckBox>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <CheckBox>سیستم گرمایش</CheckBox>
        </div>
      </div>
    </div>
    <div className="row form-group">
      <div className="agent col-xs-12 col-sm-12 col-md-12">
        <h4>بنگاه</h4>
        <div className="agentItems col-xs-6 col-sm-6 col-md-6">
          <RadioButton>بدون بنگاه</RadioButton>
        </div>
        <div className="agentItems col-xs-6 col-sm-6 col-md-6">
          <RadioButton>یافتن بنگاه</RadioButton>
        </div>
      </div>
    </div>
    <div className="row form-group rowBtn">
      <input type="submit" className="btn btn-green btn-lg" value="افزودن آگهی" />
    </div>
  </div>
);

export default AddNewPropertyForm;
