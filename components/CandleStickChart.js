import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  requireNativeComponent,
  NativeModules,
  findNodeHandle
 } from 'react-native';

import {
  globalCommonProps,
  barLineCommonProps,
  commonDataSetProps
} from '../utils/commonProps';

import { processColors } from '../utils/commonColorProps';
const RNCandleStickChartManager = NativeModules.RNCandleStickChartSwift;
const RNCandleStickChart = requireNativeComponent('RNCandleStickChartSwift', CandleStickChart);

class CandleStickChart extends Component {
  constructor(props) {
    super(props);
    this.setVisibleXRangeMaximum = this.setVisibleXRangeMaximum.bind(this);
  }
  setVisibleXRangeMaximum(value) {
    RNCandleStickChartManager.setVisibleXRangeMaximum(findNodeHandle(this), value);
  }
  render() {
    let { config, ...otherProps } = this.props;
    config = processColors(config);
    return <RNCandleStickChart config={JSON.stringify(config)} {...otherProps} />;
  }
}
CandleStickChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...barLineCommonProps,
    dataSets: PropTypes.arrayOf(PropTypes.shape({
      ...commonDataSetProps,
      values: PropTypes.arrayOf(PropTypes.shape({
        shadowH: PropTypes.number.isRequired,
        shadowL: PropTypes.number.isRequired,
        open: PropTypes.number.isRequired,
        close: PropTypes.number.isRequired
      })).isRequired,
      barSpace: PropTypes.number,
      showCandleBar: PropTypes.bool,
      shadowWidth: PropTypes.number,
      shadowColor: PropTypes.string,
      shadowColorSameAsCandle: PropTypes.bool,
      neutralColor: PropTypes.string,
      increasingColor: PropTypes.string,
      decreasingColor: PropTypes.string,
      increasingFilled: PropTypes.bool,
      decreasingFilled: PropTypes.bool
    }))
  })
};

export default CandleStickChart;
