<template>
  <chart-combo :data="barData" :config="barConfig" :theme="barTheme">
    <slot></slot>
  </chart-combo>
</template>

<script>
import { horizontalData } from "./data";

export default {
  name: "chart-bar__horizontal",
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
        let _data = val || horizontalData;

        this.barData = {
          axis: _data.axis,
          items: _data.items.map((item) => {
            return Object.assign({ type: "bar" }, item);
          }),
          markLine: _data.markLine,
        };
      },
      immediate: true,
    },
    config: {
      handler(val) {
        this.barConfig = $.extend(true, this.defConfig, val);
      },
      immediate: true,
    },
    theme: {
      handler(val) {
        this.barTheme = $.extend(true, this.barTheme, val);
      },
      immediate: true,
    },
  },
  data() {
    return {
      defConfig: {
        // 默认配置项
        // legend: { show: true },
        sort: 1,
        tooltip: "shadow",
        isSwap: true,
        xAxis: {
          axisLine: false,
        },
        yAxis: {
          show: false,
          axisLine: false,
        },
        series: { label: { show: true, position: "right" } },
      },
      barConfig: {
        items: [],
      }, // 折线配置项
      barTheme: {
        name: "barHorizontalTheme",
        // contrastColor: "#f00",
        colorPalette: ["#D8B688"],
      },
      barData: {},
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
