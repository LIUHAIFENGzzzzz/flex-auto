// option
function axisCommon(theme) {
  return {
    axisLine: {
      lineStyle: {
        color: theme.axisColor,
      },
    },
    axisTick: {
      lineStyle: {
        color: theme.axisColor,
      },
    },
    axisLabel: {
      textStyle: {
        fontSize: theme.fontSize,
        color: theme.contrastColor,
      },
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: theme.axisColor,
      },
    },
    splitArea: {
      areaStyle: {
        color: theme.contrastColor,
      },
    },
  };
}

function setThemeOption(theme) {
  return {
    color: theme.colorPalette,
    // backgroundColor: theme.bgColor,
    tooltip: {
      textStyle: {
        fontSize: theme.fontSize,
        // color: theme.contrastColor,
      },
      axisPointer: {
        lineStyle: {
          color: theme.contrastColor,
        },
        crossStyle: {
          color: theme.contrastColor,
        },
      },
    },
    legend: {
      textStyle: {
        color: theme.contrastColor,
      },
    },
    textStyle: {
      fontSize: theme.fontSize,
      color: theme.contrastColor,
    },
    title: {
      textStyle: {
        color: theme.contrastColor,
      },
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: theme.contrastColor,
        },
      },
    },
    dataZoom: {
      textStyle: {
        color: theme.contrastColor,
      },
    },
    timeline: {
      lineStyle: {
        color: theme.contrastColor,
      },
      itemStyle: {
        normal: {
          color: theme.colorPalette[1],
        },
      },
      label: {
        normal: {
          textStyle: {
            color: theme.contrastColor,
          },
        },
      },
      controlStyle: {
        normal: {
          color: theme.contrastColor,
          borderColor: theme.contrastColor,
        },
      },
    },
    timeAxis: axisCommon(theme),
    logAxis: axisCommon(theme),
    valueAxis: axisCommon(theme),
    categoryAxis: axisCommon(theme),

    line: {
      symbol: "emptyCircle",
    },
    bar: {
      label: { color: theme.colorPalette },
    },
    graph: {
      color: theme.colorPalette,
    },
    gauge: {
      title: {
        textStyle: {
          color: theme.contrastColor,
        },
      },
    },
    candlestick: {
      itemStyle: {
        normal: theme.candlestick,
      },
    },
  };
}

export default setThemeOption;
