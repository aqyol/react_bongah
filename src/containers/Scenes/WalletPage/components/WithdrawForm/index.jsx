import React from 'react';
import SelectComponent from '../../../../../shared/components/SelectComponent';

const types = [
  'Bitcoin',
  'USD',
];
const methods = [
  'Bank',
  'COD',
];

const WithDrawForm = () => (
  <div>
    <div className="dashboardTitle">
      <h3>Withdraw Form</h3>
    </div>
    <div className="depositForm panel panel-default">
      <form>
        <div className="input-group form-group">
          <span className="input-group-addon">Amount</span>
          <input type="text" className="form-control" placeholder="Amount" />
        </div>
        <div className="input-group form-group">
          <span className="input-group-addon">Type</span>
          <SelectComponent switchTop listItem={types} />
        </div>
        <div className="input-group form-group">
          <span className="input-group-addon">Method</span>
          <SelectComponent switchTop listItem={methods} />
        </div>
        <div className="button-group form-group">
          <button type="button" className="btn btn-green">Submit</button>
        </div>
      </form>
    </div>
  </div>
);

export default WithDrawForm;
