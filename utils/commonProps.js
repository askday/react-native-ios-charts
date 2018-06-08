import React from 'react';
import PropTypes from 'prop-types';

export const commonDataSetProps = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  drawValues: PropTypes.bool,
  highlightEnabled: PropTypes.bool,
  valueTextFontName: PropTypes.string,
  valueTextFontSize: PropTypes.number,
  valueTextColor: PropTypes.string,
  axisDependency: PropTypes.oneOf(['left', 'right'])
};

export const globalCommonProps = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundColor: PropTypes.string,
  noDataText: PropTypes.string,
  descriptionText: PropTypes.string,
  descriptionTextColor: PropTypes.string,
  descriptionFontName: PropTypes.string,
  descriptionFontSize: PropTypes.number,
  descriptionTextPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  descriptionTextAlign: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justified'
  ]),
  infoTextFontName: PropTypes.string,
  infoTextFontSize: PropTypes.number,
  infoTextColor: PropTypes.string,
  drawMarkers: PropTypes.bool,
  userInteractionEnabled: PropTypes.bool,
  dragDecelerationEnabled: PropTypes.bool,
  dragDecelerationFrictionCoef: PropTypes.number,
  highlightPerTap: PropTypes.bool,
  showLegend: PropTypes.bool,
  legend: PropTypes.shape({
    textColor: PropTypes.string,
    textFontName: PropTypes.string,
    textSize: PropTypes.number,
    wordWrap: PropTypes.bool,
    maxSizePercent: PropTypes.number,
    position: PropTypes.oneOf([
      'rightOfChart',
      'rightOfChartCenter',
      'rightOfChartInside',
      'leftOfChart',
      'leftOfChartCenter',
      'leftOfChartInside',
      'belowChartLeft',
      'belowChartRight',
      'belowChartCenter',
      'aboveChartLeft',
      'aboveChartRight',
      'aboveChartCenter',
      'pieChartCenter'
    ]),
    form: PropTypes.oneOf([
      'square',
      'circle',
      'line'
    ]),
    formSize: PropTypes.number,
    xEntrySpace: PropTypes.number,
    yEntrySpace: PropTypes.number,
    formToTextSpace: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    labels: PropTypes.arrayOf(PropTypes.string)
  }),
  highlightValues: PropTypes.arrayOf(PropTypes.number),
  animation: PropTypes.shape({
    xAxisDuration: PropTypes.number,
    yAxisDuration: PropTypes.number,
    easingOption: PropTypes.oneOf([
      'linear',
      'easeInQuad',
      'easeOutQuad',
      'easeInOutQuad',
      'easeInCubic',
      'easeOutCubic',
      'easeInOutCubic',
      'easeInQuart',
      'easeOutQuart',
      'easeInOutQuart',
      'easeInQuint',
      'easeOutQuint',
      'easeInOutQuint',
      'easeInSine',
      'easeOutSine',
      'easeInOutSine',
      'easeInExpo',
      'easeOutExpo',
      'easeInOutExpo',
      'easeInCirc',
      'easeOutCirc',
      'easeInOutCirc',
      'easeInElastic',
      'easeOutElastic',
      'easeInBack',
      'easeOutBack',
      'easeInOutBack',
      'easeInBounce',
      'easeOutBounce',
      'easeInOutBounce'
    ])
  }),
  valueFormatter: PropTypes.shape({
    type: PropTypes.oneOf(['regular', 'abbreviated']),
    minimumDecimalPlaces: PropTypes.number,
    maximumDecimalPlaces: PropTypes.number,
    numberStyle: PropTypes.oneOf([
      'CurrencyAccountingStyle',
      'CurrencyISOCodeStyle',
      'CurrencyPluralStyle',
      'CurrencyStyle',
      'DecimalStyle',
      'NoStyle',
      'OrdinalStyle',
      'PercentStyle',
      'ScientificStyle',
      'SpellOutStyle'
    ])
  })
};

export const barLineCommonProps = {
  borderColor: PropTypes.string,
  borderLineWidth: PropTypes.number,
  drawBorders: PropTypes.bool,
  minOffset: PropTypes.number,
  autoScaleMinMax: PropTypes.bool,
  gridBackgroundColor: PropTypes.string,
  dragEnabled: PropTypes.bool,
  scaleXEnabled: PropTypes.bool,
  scaleYEnabled: PropTypes.bool,
  pinchZoomEnabled: PropTypes.bool,
  doubleTapToZoomEnabled: PropTypes.bool,
  highlightPerDragEnabled: PropTypes.bool,
  xAxis: PropTypes.shape({
    enabled: PropTypes.bool,
    position: PropTypes.oneOf([
      'bothSided',
      'bottom',
      'bottomInside',
      'top',
      'topInside'
    ]),
    labelRotationAngle: PropTypes.number,
    drawAxisLine: PropTypes.bool,
    drawGridLines: PropTypes.bool,
    drawLabels: PropTypes.bool,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    gridColor: PropTypes.string,
    gridLineWidth: PropTypes.number,
    axisLineColor: PropTypes.string,
    axisLineWidth: PropTypes.number,
    drawLimitLinesBehindData: PropTypes.bool,
    gridDashedLine: PropTypes.shape({
      lineLength: PropTypes.number,
      spaceLength: PropTypes.number,
      phase: PropTypes.number
    }),
    limitLines: PropTypes.arrayOf(PropTypes.shape({
      limit: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      position: PropTypes.oneOf([
        'leftBottom',
        'leftTop',
        'rightBottom',
        'rightTop'
      ]),
      lineColor: PropTypes.string,
      lineDashLengths: PropTypes.number,
      lineWidth: PropTypes.number,
      lineDashPhase: PropTypes.number,
      textFontName: PropTypes.string,
      textSize: PropTypes.number,
      valueTextColor: PropTypes.string,
      xOffset: PropTypes.number,
      yOffset: PropTypes.number
    }))
  }),
  leftAxis: PropTypes.shape({
    enabled: PropTypes.bool,
    drawAxisLine: PropTypes.bool,
    drawGridLines: PropTypes.bool,
    drawLabels: PropTypes.bool,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    gridColor: PropTypes.string,
    gridLineWidth: PropTypes.number,
    axisLineColor: PropTypes.string,
    axisLineWidth: PropTypes.number,
    gridDashedLine: PropTypes.shape({
      lineLength: PropTypes.number,
      spaceLength: PropTypes.number,
      phase: PropTypes.number
    }),
    limitLines: PropTypes.arrayOf(PropTypes.shape({
      limit: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      position: PropTypes.oneOf([
        'leftBottom',
        'leftTop',
        'rightBottom',
        'rightTop'
      ]),
      lineColor: PropTypes.string,
      lineDashLengths: PropTypes.number,
      lineWidth: PropTypes.number,
      lineDashPhase: PropTypes.number,
      textFontName: PropTypes.string,
      textSize: PropTypes.number,
      valueTextColor: PropTypes.string,
      xOffset: PropTypes.number,
      yOffset: PropTypes.number
    })),
    position: PropTypes.oneOf([
      'inside',
      'outside'
    ]),
    drawLimitLinesBehindData: PropTypes.bool,
    spaceTop: PropTypes.number,
    spaceBottom: PropTypes.number,
    startAtZero: PropTypes.bool,
    axisMinimum: PropTypes.number,
    axisMaximum: PropTypes.number
  }),
  rightAxis: PropTypes.shape({
    enabled: PropTypes.bool,
    drawAxisLine: PropTypes.bool,
    drawGridLines: PropTypes.bool,
    drawLabels: PropTypes.bool,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    gridColor: PropTypes.string,
    gridLineWidth: PropTypes.number,
    axisLineColor: PropTypes.string,
    axisLineWidth: PropTypes.number,
    gridDashedLine: PropTypes.shape({
      lineLength: PropTypes.number,
      spaceLength: PropTypes.number,
      phase: PropTypes.number
    }),
    limitLines: PropTypes.arrayOf(PropTypes.shape({
      limit: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      position: PropTypes.oneOf([
        'leftBottom',
        'leftTop',
        'rightBottom',
        'rightTop'
      ]),
      lineColor: PropTypes.string,
      lineDashLengths: PropTypes.number,
      lineWidth: PropTypes.number,
      lineDashPhase: PropTypes.number,
      textFontName: PropTypes.string,
      textSize: PropTypes.number,
      valueTextColor: PropTypes.string,
      xOffset: PropTypes.number,
      yOffset: PropTypes.number
    })),
    position: PropTypes.oneOf([
      'inside',
      'outside'
    ]),
    drawLimitLinesBehindData: PropTypes.bool,
    spaceTop: PropTypes.number,
    spaceBottom: PropTypes.number,
    startAtZero: PropTypes.bool,
    axisMinimum: PropTypes.number,
    axisMaximum: PropTypes.number
  }),
  viewport: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number
  })
};

export const pieRadarCommonProps = {
  rotationEnabled: PropTypes.bool,
  rotationAngle: PropTypes.number,
  rotationWithTwoFingers: PropTypes.bool,
  minOffset: PropTypes.number
};
