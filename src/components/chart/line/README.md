### 使用案例

```vue
<chart-line :config="config" :data="data" :theme="theme"></chart-line>
```

### 参数说明

```properties
config: 配置项 主要控制显示隐藏
    type: object
    default: {}
    
 data: 数据
    type: object
    default: {}
    
theme: 主题 样式颜色控制
    type: object
    default: {}
 
```

### Config

```js
/**
 * 默认配置项
 * @param { Object } _config
 * @param { Boolean } _config.isSwap - true:条形 false:柱状
 * @param { Boolean } _config.isY - 折线图靠Y轴
 * @param { Object } _config.legend - 图例配置
 * @param { String } _config.tooltip - axisPointer类型 line:线 shadow:阴影 cross:十字
 * @param { String } _config.series - series
 * @param { Object } _config.xAxis - x轴配置
 * @param { Object } _config.yAxis - y轴配置
 */
{
  isSwap: false,
  isY: false,
  limit: 5,
  legend: {
    show: false,
    position: ["right", "top"],
    itemGap: 20,
    padding: [10, 30],
  },
  tooltip: "none",
  series: {
    type: "bar",
    barWidth: 20,
    showBg: false,
    showBgLabel: false,
    label: {
      show: false,
      position: "top",
    },
  },
  xAxis: {
    axisLine: true, // 显示轴线
    splitLine: false,
    rotate: 0,
    margin: 12,
  },
  yAxis: {
    show: true,
    axisLine: true, //显示轴线
    splitLine: false,
    rotate: 0,
    unit: "", // 单位
  },
  avg: {
    symbol: "rect",
    symbolSize: [30, 4],
  },
}
```

### data

```js
 {
  axis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // x轴数组
  items: [ // series item
    {
      name: "Gdp1",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "bar",
    },
    {
      name: "Gdp2",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
    }
  ],
  markLine: [ // 辅助线
     {
       label: "平均1",
       value: 1000,
     }
  ]
};
```

### theme

```js
{
  name: "custom", // 唯一性
  desc: "自定义", // 释义
  bgColor: "#fff", // 背景颜色
  contrastColor: "#ffffff", // 主要颜色（文字颜色）
  axisColor: "#0448B9", // 轴线颜色
  colorPalette: [ // 颜色数组
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
  ],
  candlestick: {}, // K线图
  fontSize: "120%", // 字体大小
};

```

