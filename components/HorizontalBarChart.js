import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  requireNativeComponent
} from 'react-native';

import {
  globalCommonProps,
  barLineCommonProps,
  commonDataSetProps
} from '../utils/commonProps';

import { processColors } from '../utils/commonColorProps';
const RNHorizontalBarChart = requireNativeComponent('RNHorizontalBarChartSwift', HorizontalBarChart);

class HorizontalBarChart extends Component {
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNHorizontalBarChart config={config} {...otherProps} />;
  }
}

HorizontalBarChart.propTypes = {
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

export default HorizontalBarChart;
