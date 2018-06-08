import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  requireNativeComponent
} from 'react-native';

import {
  globalCommonProps,
  pieRadarCommonProps,
  commonDataSetProps
} from '../utils/commonProps';

import { processColors } from '../utils/commonColorProps';
const RNRadarChart = requireNativeComponent('RNRadarChartSwift', RadarChart);

class RadarChart extends Component {
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNRadarChart config={config} {...otherProps} />;
  }
}

RadarChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...pieRadarCommonProps,
    dataSets: PropTypes.arrayOf(PropTypes.shape({
      ...commonDataSetProps,
      fillColor: PropTypes.string,
      fillAlpha: PropTypes.number,
      lineWidth: PropTypes.number,
      drawFilledEnabled: PropTypes.bool
    })),
    webLineWidth: PropTypes.number,
    innerWebLineWidth: PropTypes.number,
    webColor: PropTypes.string,
    innerWebColor: PropTypes.string,
    webAlpha: PropTypes.number,
    drawWeb: PropTypes.bool,
    skipWebLineCount: PropTypes.number
  })
};

export default RadarChart;
