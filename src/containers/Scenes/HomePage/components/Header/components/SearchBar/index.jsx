import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SelectComponent from '../../../../../../../shared/components/SelectComponent';


class SearchBar extends PureComponent {
  static propTypes = {
    isPersist: PropTypes.bool,
  };

  static defaultProps = {
    isPersist: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isAdvance: false,
    };
  }

  toggleAdvSearch = () => {
    this.setState(prevState => ({
      isAdvance: !prevState.isAdvance,
    }));
  }

  render() {
    if (!this.props.isPersist) {
      return (null);
    }
    const listBed = [
      'اتاق خواب',
      '1',
      '2',
      '3',
      '4',
    ];
    const listBath = [
      'حمام',
      '1',
      '2',
      '3',
      '4',
    ];
    return (
      <div className="search-panel">
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="شهر مورد نظر را وارد کنید"
            />
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <SelectComponent switchTop listItem={listBed}>
              اتاق خواب
            </SelectComponent>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <SelectComponent switchTop listItem={listBath}>
              حمام
            </SelectComponent>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="input-group">
              <div className="input-group-addon">قیمت</div>
              <input
                className="form-control price"
                type="number"
                placeholder="از"
              />
            </div>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="input-group">
              <input className="form-control price" type="number" placeholder="تا" />
            </div>
          </div>
          <div className={`form-group${this.state.isAdvance ? ' adv' : ' hidden-xs'}`}>
            <div className="checkbox custom-checkbox">
              <label htmlFor="forRent">
                <input id="forRent" name="forRent" type="checkbox" />
                <span><FaCheck /></span>
                رهن و اجاره
              </label>
            </div>
          </div>
          <div className={`form-group${!this.state.isAdvance ? ' hidden-xs' : ''}`}>
            <div className="checkbox custom-checkbox">
              <label htmlFor="forSale">
                <input id="forSale" name="forSale" type="checkbox" />
                <span><FaCheck /></span>
                فروش
              </label>
            </div>
          </div>
          <div className="form-group">
            <Link to="/search" className="btn btn-green isThemeBtn">جستجو</Link>
            <a
              href="#1"
              className={`btn btn-o btn-white pull-right visible-xs${this.state.isAdvance ? ' advBtnActive' : ''}`}
              onClick={this.toggleAdvSearch}
            >
              جستجوی پسشرفته
              {this.state.isAdvance
                && <FaAngleDown />
              }
              {!this.state.isAdvance
              && <FaAngleUp />
              }
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
