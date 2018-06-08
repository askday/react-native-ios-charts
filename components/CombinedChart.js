import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native';

import {
  globalCommonProps,
  barLineCommonProps,
  commonDataSetProps
} from '../utils/commonProps';

import { processColors } from '../utils/commonColorProps';
const RNCombinedChart = requireNativeComponent('RNCombinedChartSwift', CombinedChart);

class CombinedChart extends Component {
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNCombinedChart config={config} {...otherProps} />;
  }
}

CombinedChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...barLineCommonProps,
    lineData: PropTypes.shape({
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
    }),
    barData: PropTypes.shape({
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
      }))
    }),
    bubbleData: PropTypes.shape({
      dataSets: PropTypes.arrayOf(PropTypes.shape({
        ...commonDataSetProps,
        values: PropTypes.arrayOf(PropTypes.shape({
          value: PropTypes.number,
          size: PropTypes.number
        })).isRequired,
        highlightCircleWidth: PropTypes.number
      }))
    }),
    candleData: PropTypes.shape({
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
    }),
    scatterData: PropTypes.shape({
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
    }),
    drawValueAboveBar: PropTypes.bool,
    drawHighlightArrow: PropTypes.bool,
    drawBarShadow: PropTypes.bool,
  })
};

export default CombinedChart;
