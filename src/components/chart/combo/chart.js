import echarts from "echarts";
// console.log("echarts", echarts.version);

// 自定义主题
import registerTheme from "./theme";

/**
 * 默认配置项
 * @param { Object } _config
 * @param { Boolean } _config.isSwap - true:条形 false:柱状
 * @param { Boolean } _config.isY - 折线图靠Y轴
 * @param { Boolean } _config.limit - datazoom 初始展示个数
 * @param { Boolean } _config.sort - 排序 默认不排序 1:升序 -1:降序
 * @param { Object } _config.legend - 图例配置
 * @param { String } _config.tooltip - axisPointer类型 line:线 shadow:阴影 cross:十字
 * @param { String } _config.series - series
 * @param { Object } _config.xAxis - x轴配置
 * @param { Object } _config.yAxis - y轴配置
 */
const _config = {
  isSwap: false,
  isY: false,
  limit: 5,
  sort: 0,
  legend: {
    show: false,
    position: ["right", "top"],
    itemGap: 20,
    padding: [10, 30],
  },
  tooltip: "none",
  series: {
    type: "bar",
    barWidth: 30,
    showBg: false,
    showBgLabel: false,
    label: {
      show: false,
      position: "top",
    },
    symbolSize: 16,
    smooth: true,
    lineShadow: false,
  },
  xAxis: {
    axisLine: true, // 显示轴线
    splitLine: false,
    rotate: 0,
    margin: 12,
    label: {
      limit: 10,
    },
  },
  yAxis: {
    show: true,
    axisLine: true, //显示轴线
    splitLine: false,
    rotate: 0,
    unit: "", // 单位
    splitNumber: 5,
  },
  avg: {
    symbol: "rect",
    symbolSize: [60, 8],
  },
};

// 测试数据
import _data from "./data";

export default class Chart {
  constructor(theme) {
    this._theme = this.registerTheme(theme);
  }

  // grid 边距
  _getGrid() {
    var legendHeight = 34 + 10;

    let top = 34,
      right = 0,
      bottom = 20,
      left = 0;
    if (this.config.legend.show) {
      switch (this.config.legend.position[1]) {
        case "top":
          top += legendHeight;
          break;
        case "bottom":
          bottom += legendHeight;
          break;
      }
    }

    return [
      {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        containLabel: true,
      },
    ];
  }

  // tooltip 提示框
  _getTooltip() {
    return {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: this.config.tooltip,
      },
      formatter: (params) => {
        var html = `${params[0].name}<br/>`;
        params.forEach((item) => {
          var color =
            typeof item.color == "string"
              ? item.color
              : item.color.colorStops[0].color;
          var marker = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:1.2rem;height:1.2rem;vertical-align: middle;background-color:${color};"></span>`;

          html += `${marker}${item.seriesName}: ${item.value}${this.config.yAxis.unit}<br/>`;
        });
        return html;
      },
      extraCssText: "padding:0.6rem 1rem;",
    };
  }

  // legend 图例
  _getLegend() {
    return {
      show: this.config.legend.show,
      left: this.config.legend.position[0],
      top: this.config.legend.position[1],
      padding: this.config.legend.padding,
      itemGap: this.config.legend.itemGap,
      data: this.data.items.map((item) => {
        return item.name;
      }),
    };
  }

  // x轴
  _getAxis_X() {
    return {
      type: "category",
      data: this.data.axis,
      boundaryGap: !this.config.isY,
      axisLine: {
        show: this.config.xAxis.axisLine,
      },
      axisTick: { show: false },
      axisLabel: {
        interval: 0,
        fontSize: this._theme.fontSize,
        rotate: this.config.xAxis.rotate,
        margin: this.config.xAxis.margin,
        formatter: (value) => {
          return value.length > this.config.xAxis.label.limit
            ? value.slice(0, this.config.xAxis.label.limit) + "..."
            : value;
        },
      },
      splitLine: {
        show: this.config.xAxis.splitLine,
      },
    };
  }

  // y 轴
  _getAxis_Y() {
    var y = [
      {
        // show: this.config.yAxis.show,
        type: "value",
        axisLine: {
          show: this.config.yAxis.axisLine,
        },
        splitNumber: this.config.yAxis.splitNumber,
        axisTick: { show: false },
        axisLabel: {
          show: this.config.yAxis.show,
          fontSize: this._theme.fontSize,
          rotate: this.config.yAxis.rotate,
          formatter: `{value}${this.config.yAxis.unit}`,
        },
        splitLine: { show: this.config.yAxis.splitLine },
      },
    ];

    // 显示label时
    if (this.config.series.label.show) {
      y[0].max = (value) => {
        var flag = String(value.max).length < 4 ? 0.1 : 0.2;

        return value.max + value.max * flag;
      };
    }

    if (this.config.series.showBg) {
      y.push({
        type: "value",
        // min: min,
        // max: 'dataMax',
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      });
    }
    return y;
  }

  _getAxis() {
    return { x: this._getAxis_X(), y: this._getAxis_Y() };
  }

  _getColor(color, opacity = 1) {
    if (!color) return false;

    var arr = this.config.isSwap ? [1, 0, 0, 0] : [0, 0, 0, 1];
    return new echarts.graphic.LinearGradient(
      ...arr,
      [
        {
          offset: 0,
          color: color, // 0% 处的颜色
        },
        {
          offset: 1,
          color: this._hexToRgba(color, opacity), // 100% 处的颜色
        },
      ],
      false
    );
  }

  _getAvg(item, color) {
    return Object.assign({}, item, {
      type: "line",
      label: this.config.series.label,
      symbol: this.config.avg.symbol,
      symbolSize: this.config.avg.symbolSize,
      lineStyle: {
        width: 0,
      },
      itemStyle: {
        color: color,
      },
    });
  }

  _orderBy(data) {
    return data.sort((a, b) => {
      if (this.config.sort == 1) {
        return !isNaN(a) ? a - b : a.localeCompare(b, "zh-CN");
      } else if (this.config.sort == -1) {
        return !isNaN(a) ? b - a : b.localeCompare(a, "zh-CN");
      }
    });
  }

  _getSortData() {
    var data = this.data;
    var _data,
      orderData = [];

    if (this.config.sort) {
      if (data.items.length > 1) {
        // console.log("维度排序");

        orderData = this._orderBy(data.axis);
      } else {
        // console.log("度量排序");

        orderData = this._orderBy(data.items[0].data);
      }

      var axis = [],
        items = [];

      orderData.forEach((item, index) => {
        axis.push(data.axis[index]);
        data.items.forEach((_item, _index) => {
          if (!items[_index])
            items[_index] = Object.assign({}, _item, {
              data: [],
            });

          items[_index].data.push(_item.data[index]);
        });
      });

      return {
        axis: axis,
        items: items,
        markLine: data.markLine,
      };
    } else {
      return this.data;
    }
  }

  _getAreaStyle(item, index) {
    return {
      color: this._getColor(this._theme.colorPalette[index], 0),
    };
  }

  // 处理数据
  _getData(colorPalette) {
    var datas = this.data.items.map((item, index) => {
      if (item.type == "avg") {
        return this._getAvg(item, colorPalette[index]);
      } else {
        var config = {},
          type = item.type || this.config.series.type;

        // 柱状渐变
        if (type == "bar" && !item.stack) {
          config = {
            barWidth: this.config.series.barWidth,
            itemStyle: {
              color: this._getColor(colorPalette[index], 0),
            },
          };
        } else if (type == "line") {
          config = {
            symbolSize: this.config.series.symbolSize,
            smooth: this.config.series.smooth,
            areaStyle: this.config.series.lineShadow
              ? this._getAreaStyle(item, index)
              : null,
          };
        }

        return Object.assign(
          {},
          item,
          {
            color: colorPalette[index],
            type: type,
            label: this.config.series.label,
          },
          config
        );
      }
    });

    datas = this._getBg(datas);

    return this._getMarkLine(datas);
  }

  // 辅助线
  _getMarkLine(datas) {
    if (
      this.data.markLine &&
      this.data.markLine.length > 0 &&
      datas.length > 0
    ) {
      datas[0].markLine = {
        silent: false,
        symbol: "none",
        label: {
          show: false,
          position: "insideEndBottom",
          formatter: `{b}: {c}${this.config.yAxis.unit}`,
          distance: [0, 20],
        },
        emphasis: {
          label: { show: true },
          lineStyle: {
            // width: this.config.markLine.width,
            // type: this.config.markLine.type,
          },
        },
        data: this.data.markLine.map((item) => {
          var lineStyle = Object.assign(
            {},
            this.config.markLine,
            item.color
              ? {
                  color: item.color,
                }
              : {}
          );

          return {
            name: item.label,
            lineStyle: lineStyle,
            xAxis: this.config.isSwap ? item.value : null,
            yAxis: !this.config.isSwap ? item.value : null,
          };
        }),
      };
    }

    return datas;
  }

  // 背景阴影
  _getBg(datas) {
    if (this.config.series.showBg) {
      var max = Math.max.apply(null, this.data.items[0].data);
      var _data = this.data.items[0].data.map((item) => {
        return max;
      });

      let seriesItem = {
        name: "背景",
        tooltip: { show: false },
        type: "bar",
        barWidth: this.config.series.barWidth,
        // xAxisIndex: 0,
        // yAxisIndex: 1,
        barGap: "-100%",
        data: _data,
        itemStyle: {
          normal: {
            color: "rgba(255,255,255,0.2)",
          },
        },
        label: {
          show: this.config.series.showBgLabel,
          position: "right",
          formatter: (params) => {
            return this.data.items[0].data[params.dataIndex];
          },
        },
      };
      if (this.config.isSwap) {
        seriesItem.xAxisIndex = 1;
      } else {
        seriesItem.yAxisIndex = 1;
      }
      datas.unshift(seriesItem);
    }
    return datas;
  }

  _getDataZoom() {
    let start = 0,
      end = 100;

    if (
      this.data.items[0].data.length > 0 &&
      this.data.items[0].data.length > this.config.limit
    ) {
      end = parseInt(
        (this.config.limit / this.data.items[0].data.length) * 100
      );
    }

    return [
      {
        type: "inside",
        yAxisIndex: this.config.isSwap ? 0 : null,
        xAxisIndex: this.config.isSwap ? null : 0,
        start: start,
        end: end,
      },
    ];
  }

  // 对外返回option
  getOption(data, config) {
    this.data = data ? data : _data;

    this.config = $.extend(true, {}, _config, config);

    if (!this.data.items) {
      throw new error("data.items not of undefined");
      return false;
    }

    this.data = this._getSortData();

    var axis = this._getAxis();
    return {
      grid: this._getGrid(),
      tooltip: this._getTooltip(),
      legend: this._getLegend(),
      xAxis: this.config.isSwap ? axis.y : axis.x,
      yAxis: this.config.isSwap ? axis.x : axis.y,
      series: this._getData(this._theme.colorPalette),
      _theme: this._theme,
      dataZoom: this._getDataZoom(),
    };
  }

  registerTheme(theme) {
    return registerTheme(theme);
  }

  // 16进制转rgba
  _hexToRgba(hex, opacity = 1) {
    return (
      "rgba(" +
      parseInt("0x" + hex.slice(1, 3)) +
      "," +
      parseInt("0x" + hex.slice(3, 5)) +
      "," +
      parseInt("0x" + hex.slice(5, 7)) +
      "," +
      opacity +
      ")"
    );
  }
}
