<template>
  <div class="chart-combo__container">
    <div class="chart-combo__title">
      <slot></slot>
    </div>
    <div :id="id" class="chart-combo"></div>
  </div>
</template>

<script>
import echarts from "echarts";

import mixin from "../mixins";
import Chart from "./chart";

export default {
  name: "chart-combo",
  mixins: [mixin],
  props: {
    data: Object,
    config: {
      type: Object,
      default() {
        return {};
      },
    },
    theme: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      Chart: null,
    };
  },
  mounted() {},
  methods: {
    init() {
      this.Chart = new Chart(
        $.extend(
          true,
          {
            fontSize: 14,
            colorPalette: ["#00DBF6", "#6EFEA6", "#7864F6"],
          },
          this.theme
        )
      );

      this.echartsIns && this.echartsIns.dispose();
      this.echartsIns = echarts.init(
        document.getElementById(this.id),
        this.Chart._theme.name
      );

      this.setOption();
    },
    setOption() {
      let option = this.Chart.getOption(this.data, this.config);
      this.echartsIns.setOption(option);
    },
  },
  beforeDestroy() {
    this.Chart = null;
  },
};
</script>

<style lang="scss" scoped>
.chart-combo__container {
  display: -webkit-flex; /* Safari */
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  // .chart-combo__title {
  //   color: $color-primary;
  //   font-size: $font-mini;
  // }

  .chart-combo {
    flex: 1;
    // overflow: hidden;
  }
}
</style>
