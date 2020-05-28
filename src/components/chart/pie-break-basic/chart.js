export default class Chart {
  constructor(data, config, fontSize = 34) {
    this.data = data;
    this.total = 0;

    this.config = $.extend(
      true,
      {
        fontSize: fontSize,
        colorList: [
          "#00e1f3",
          "#1db7fd",
          "#5764fb",
          "#6c1ef1",
          "#00e8ce",
          "#00ec9f",
        ],
        gutter: 15, // 图例与图形间隔
        width: null, // 图例文字跨度
        radius: null, // 环
        type: "plain", // 图例类型 plain scroll
      },
      config
    );
    this.setTotal(this.data.values);
  }

  setTotal(data) {
    data = data || [];
    let total = 0;
    data.forEach((item) => {
      total += item;
    });
    this.total = total;
  }

  getLegend(data) {
    let config = this.config;
    let legend = {
      show: config.legend,
      type: this.config.type,
      icon: "circle",
      selectedMode: false,
      orient: "vertical",
      left: this.data.width / 2 + this.config.gutter,
      top: "middle",
      padding: [30, 0],
      align: "left",
      itemGap: 15,
      itemWidth: 10,
      itemHeight: 10,
      symbolKeepAspect: false,
      textStyle: {
        color: "#000",
        rich: {
          name: {
            verticalAlign: "right",
            align: "left",
            padding: [0, 30, 0, 0],
            fontSize: this.config.fontSize,
            color: "#b4eaf8",
            width: this.config.width,
          },
          value: {
            align: "right",
            padding: [0, 2, 0, 0],
            fontSize: this.config.fontSize,
            color: "#11b0f3",
          },
          unit: {
            align: "left",
            padding: [0, 20, 0, 0],
            fontSize: this.config.fontSize / 1.5,
            color: "#11b0f3",
          },
          upRate: {
            align: "right",
            padding: [0, 20, 0, 0],
            fontSize: this.config.fontSize / 1.5,
            color: "#00cf90",
          },
          downRate: {
            align: "right",
            padding: [0, 40, 0, 0],
            fontSize: this.config.fontSize / 1.5,
            color: "#ff5722",
          },
        },
      },
      data: data.names,
      formatter: function(name) {
        let className = "upRate";
        if (data.names && data.names.length) {
          for (var i = 0; i < data.names.length; i++) {
            if (!data.rate) {
              return `{name| ${name}} {value| ${data.values[i]}} {unit| ${data.unit}}`;
            } else if (name === data.names[i]) {
              if (data.rate[i] < 0) {
                className = "downRate";
              }
              let sign = className === "upRate" ? "+" : "";
              let rate = sign + data.rate[i];
              return `{name| ${name}} {value| ${data.values[i]}} {unit| ${data.unit}} {${className}| ${rate}}`;
            }
          }
        }
      },
    };
    return legend;
  }

  getData(data) {
    let list = [];
    for (let i in data.values) {
      list.push(
        {
          value: data.values[i],
          name: data.names[i],
          itemStyle: {
            normal: {
              borderWidth: 10,
              shadowBlur: 20,
            },
          },
        },
        {
          value: this.total / 80,
          name: "",
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              color: "rgba(0, 0, 0, 0)",
              borderColor: "rgba(0, 0, 0, 0)",
              borderWidth: 0,
            },
          },
        }
      );
    }
    return list;
  }

  getOption() {
    let self = this;
    let config = this.config;
    let option = {
      // backgroundColor: "#04243E",
      tooltip: {
        show: false,
      },
      grid: {
        left: "2%",
      },
      color: config.colorList
        ? config.colorList
        : ["#00e2f5", "#21b8ff", "#5764fc", "#6e1ef3", "#00e9cf", "#00eda0"],
      legend: this.getLegend(this.data),
      series: [
        {
          name: "",
          type: "pie",
          clockWise: false,
          startAngle: "90",
          center: config.legend
            ? [
                self.data.width / 2 - self.data.height / 2 - this.config.gutter,
                "50%",
              ]
            : ["50%", "50%"],
          radius: this.config.radius
            ? this.config.radius
            : config.legend
            ? ["80%", "90%"]
            : ["50%", "55%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: !config.legend,
                position: "outside",
                formatter: (params) => {
                  let percent = ((params.value / self.total) * 100).toFixed(1);
                  let name = params.name.replace(/\n/g, "");
                  if (params.name !== "") {
                    return `{label| ${name}}\n {value| ${params.value}} {unit| ${self.data.unit}}`;
                  } else {
                    return "";
                  }
                },
                rich: {
                  label: {
                    // align: "center",
                    padding: [3, 0],
                    color: "#b4eaf8",
                    fontSize: this.config.fontSize,
                    // lineHeight: 43,
                  },
                  value: {
                    // align: "right",
                    // padding: [3, 20],
                    color: "#11b0f3",
                    fontSize: this.config.fontSize,
                    // lineHeight: 43,
                  },
                  unit: {
                    // align: "right",
                    // width: 50,
                    // padding: [1, 0, 3, 20],
                    color: "#11b0f3",
                    fontSize: this.config.fontSize / 2,
                  },
                },
              },
              labelLine: {
                length: 40,
                length2: 50,
                show: true,
                color: "#00ffff",
              },
            },
          },
          data: this.getData(this.data),
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function(idx) {
            return idx * 50;
          },
        },
      ],
    };
    return option;
  }
}
