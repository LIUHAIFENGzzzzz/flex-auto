<template>
  <chart-combo :data="barData || DATA" :config="barConfig" :theme="barTheme">
    <slot></slot>
  </chart-combo>
</template>

<script>
import DATA from "./data";

export default {
  name: "chart-bar",
  components: {
    chartCombo: resolve => require(["../combo"], resolve)
  },
  props: {
    data: Object,
    config: Object,
    theme: Object
  },
  watch: {
    data: {
      handler(val) {
        let _data = val || DATA;

        this.barData = {
          axis: _data.axis,
          items: _data.items.map(item => {
            return Object.assign({ type: "bar" }, item);
          }),
          markLine: _data.markLine
        };
      },
      immediate: true
    },
    config: {
      handler(val) {
        this.barConfig = $.extend(true, this.defConfig, val);
      },
      immediate: true
    },
    theme: {
      handler(val) {
        this.barTheme = $.extend(true, this.barTheme, val);
      },
      immediate: true
    }
  },
  data() {
    return {
      DATA,
      defConfig: {
        // 默认配置项
        limit: 4,
        legend: { show: true },
        tooltip: "shadow",
        xAxis: {
          // axisLine: true,
        },
        yAxis: {
          // axisLine: true,
          splitLine: true
        }
      },
      barConfig: {}, // 折线配置项
      barTheme: {
        name: "barTheme",
        // contrastColor: "#f00",
        colorPalette: ["#03C3DB", "#5DD592", "#6757DD"]
      },
      barData: {}
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.chart-line {
}
</style>
