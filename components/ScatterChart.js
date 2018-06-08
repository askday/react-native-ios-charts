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
const RNScatterChartManager = NativeModules.RNScatterChartSwift;
const RNScatterChart = requireNativeComponent('RNScatterChartSwift', ScatterChart);

class ScatterChart extends Component {
  constructor(props) {
    super(props);
    this.setVisibleXRangeMaximum = this.setVisibleXRangeMaximum.bind(this);
  }
  setVisibleXRangeMaximum(value) {
    RNScatterChartManager.setVisibleXRangeMaximum(findNodeHandle(this), value);
  }
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNScatterChart config={config} {...otherProps} />;
  }
}

ScatterChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...barLineCommonProps,
    dataSets: PropTypes.arrayOf(PropTypes.shape({
      ...commonDataSetProps,
      scatterShapeSize: PropTypes.number,
      scatterShapeHoleRadius: PropTypes.number,
      scatterShapeHoleColor: PropTypes.string,
      scatterShape: PropTypes.oneOf([
        'Square',
        'Circle',
        'Triangle',
        'Cross',
        'X'
      ])
    }))
  })
};

export default ScatterChart;
