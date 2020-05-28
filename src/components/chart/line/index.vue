<template>
  <chart-combo
    :data="lineData || DATA"
    :config="lineConfig"
    :theme="lineTheme"
  >
  <slot></slot>
  </chart-combo>
</template>

<script>
import DATA from "./data";

export default {
  name: "chart-line",
  components: {
    chartCombo: (resolve) => require(["../combo"], resolve),
  },
  props: {
    data: Object,
    config: Object,
    theme: Object,
  },
  watch: {
    data: {
      handler(val) {
        let _data = val || DATA;

        this.lineData = {
          axis: _data.axis,
          items: _data.items.map((item) => {
            return Object.assign({ type: "line" }, item);
          }),
          markLine: _data.markLine,
        };
      },
      immediate: true,
    },
    config: {
      handler(val) {
        this.lineConfig = $.extend(true, this.defConfig, val);
      },
      immediate: true,
    },
    theme: {
      handler(val) {
        this.lineTheme = $.extend(true, this.lineTheme, val);
      },
      immediate: true,
    },
  },
  data() {
    return {
      DATA,
      defConfig: {
        // 默认配置项
        isY: false,
        legend: { show: true },
        tooltip: "line",
        xAxis: {
          // axisLine: true,
          margin: 16,
        },
        yAxis: {
          show: true,
          splitLine: true,
        },
      },
      lineConfig: {
        items: [],
      }, // 折线配置项
      lineTheme: {
        name: "lineTheme",
        // contrastColor: "#f00",
        colorPalette: ["#5FD398", "#5187F3"],
      },
      lineData: {},
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.chart-line {
}
</style>
