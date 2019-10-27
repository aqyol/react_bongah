import React, { PureComponent } from 'react';
import {
  Slider, Rail, Handles, Tracks,
} from 'react-compound-slider';
import PropTypes from 'prop-types';
import {
  SliderRail, Handle, Track,
} from './components'; // example render components - source below

const sliderStyle = {
  position: 'relative',
  width: '100%',
};

// const domain = [0, 100];
// const defaultValues = [0, 100];
const initialValues = [125, 150, 175, 250];

class RangeSlider extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  static defaultProps = {
    minValue: 0,
    maxValue: 100,
  };

  constructor(props) {
    super(props);
    this.state = {
      reversed: true,
      values: [...initialValues],
      update: [...initialValues],
    };
    console.log('ppppppp');
    console.log(props);
  }

  onUpdate = (update) => {
    this.setState({ update });
  }

  onChange = (values) => {
    this.setState({ values });
    const { onChange } = this.props;
    console.log(this.state.update);
    console.log(this.state.values);
    onChange(values);
  }

  toggleReverse = () => {
    this.setState(prev => ({ reversed: !prev.reversed }));
    console.log(this.state.reversed);
  }

  render() {
    return (
      <div style={{
        margin: '2% 10%', padding: '3% 0', height: '100%', width: '80%',
      }}
      >
        {this.props.values !== undefined
        && (
          <Slider
            reversed
            mode={2}
            step={1}
            domain={[this.props.minValue, this.props.maxValue]}
            rootStyle={sliderStyle}
            onUpdate={this.onUpdate}
            onChange={this.onChange}
            values={this.props.values.slice()}
          >
            <Rail>
              {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={[this.props.minValue, this.props.maxValue]}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks left={false} right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
          </Slider>
        )}
      </div>
    );
  }
}

export default RangeSlider;
