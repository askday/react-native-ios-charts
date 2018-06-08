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
const RNBarChartManager = NativeModules.RNBarChartSwift;
const RNBarChart = requireNativeComponent('RNBarChartSwift', BarChart);

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.setVisibleXRangeMaximum = this.setVisibleXRangeMaximum.bind(this);
  }
  setVisibleXRangeMaximum(value) {
    RNBarChartManager.setVisibleXRangeMaximum(findNodeHandle(this), value);
  }
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNBarChart config={config} {...otherProps} />;
  }
}

BarChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...barLineCommonProps,
    dataSets: PropTypes.arrayOf(PropTypes.shape({
      ...commonDataSetProps,
      barShadowColor: PropTypes.string,
      barSpace: PropTypes.number,
      highlightAlpha: PropTypes.number,
      highlightColor: PropTypes.string,
      highlightLineDashLengths: PropTypes.arrayOf(PropTypes.number),
      highlightLineDashPhase: PropTypes.number,
      highlightLineWidth: PropTypes.number,
      stackLabels: PropTypes.arrayOf(PropTypes.string)
    })),
    drawValueAboveBar: PropTypes.bool,
    drawHighlightArrow: PropTypes.bool,
    drawBarShadow: PropTypes.bool
  })
};

export default BarChart;
