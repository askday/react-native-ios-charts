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
const RNLineChartManager = NativeModules.RNLineChartSwift;
const RNLineChart = requireNativeComponent('RNLineChartSwift', LineChart);

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.setVisibleXRangeMaximum = this.setVisibleXRangeMaximum.bind(this);
  }
  setVisibleXRangeMaximum(value) {
    RNLineChartManager.setVisibleXRangeMaximum(findNodeHandle(this), value);
  }
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNLineChart config={config} {...otherProps} />;
  }
}

LineChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...barLineCommonProps,
    dataSets: PropTypes.arrayOf(PropTypes.shape({
      ...commonDataSetProps,
      drawCircles: PropTypes.bool,
      circleColors: PropTypes.arrayOf(PropTypes.string),
      circleHoleColor: PropTypes.string,
      circleRadius: PropTypes.number,
      cubicIntensity: PropTypes.number,
      drawCircleHole: PropTypes.bool,
      drawCubic: PropTypes.bool,
      drawFilled: PropTypes.bool,
      drawHorizontalHighlightIndicator: PropTypes.bool,
      drawVerticalHighlightIndicator: PropTypes.bool,
      fillAlpha: PropTypes.number,
      fillColor: PropTypes.string,
      highlightColor: PropTypes.string,
      highlightLineDashLengths: PropTypes.number,
      highlightLineDashPhase: PropTypes.number,
      highlightLineWidth: PropTypes.number,
      lineDashLengths: PropTypes.number,
      lineDashPhase: PropTypes.number,
      lineWidth: PropTypes.number
    }))
  })
};

export default LineChart;
