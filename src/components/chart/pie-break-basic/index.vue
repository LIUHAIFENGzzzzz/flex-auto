<template>
  <div class="pbb-content">
    <div :id="id" class="pbb-combination"></div>
    <div
      class="pbb-content-inner"
      :style="{
        left: config.legend
          ? `${width / 2 -
              height / 2 -
              (Chart && Chart.config && Chart.config.gutter)}px`
          : '50%',
      }"
    >
      <template v-if="kpiData">
        <div class="pbb-kpi__title">{{ kpiData.title }}</div>
        <div class="pbb-kpi__number">
          {{ kpiData.value
          }}<span class="pbb-kpi__unit">{{ kpiData.unit }}</span>
        </div>
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import mixin from "../mixins";
import Chart from "./chart";

export default {
  name: "chart-pie",
  mixins: [mixin],
  props: {
    data: Object,
    kpiData: Object,
    config: {
      type: Object,
      default() {
        return {
          colorList: [],
          legend: false,
        };
      },
    },
    unit: {
      type: String,
      default: "%",
    },
  },
  data() {
    return {
      Chart: null,
      width: 200,
      height: 200,
    };
  },
  mounted() {
    if (this.config.legend) {
      // let elHeight = Math.min(this.$el.offsetHeight, this.$el.offsetWidth);
      // this.$el.getElementsByClassName("content-inner")[0].style.left =
      //   elHeight / 2 + "px";
    }
  },
  methods: {
    init() {
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
      this.data.unit = this.unit;
      this.data.width = this.width;
      this.data.height = this.height;
      // console.log(this.data);
      this.Chart = new Chart(this.data, this.config, this.$variable.font.chart);
      this.echartsIns && this.echartsIns.dispose();
      this.echartsIns = echarts.init(document.getElementById(this.id));
      this.setOption();
    },
    setOption() {
      let option = this.Chart.getOption();
      this.echartsIns.setOption(option);
    },
  },
  beforeDestroy() {
    this.Chart = null;
  },
};
</script>

<style lang="scss" scoped>
.pbb-content {
  position: relative;
  width: 100%;
  height: 100%;
  .pbb-combination {
    width: 100%;
    height: 100%;
  }

  .pbb-content-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .pbb-kpi__title,
  .pbb-kpi__number {
    font-size: $font-mini;
    text-align: center;
  }
  .pbb-kpi__number {
    color: $color-primary;
  }
  .pbb-kpi__unit {
    font-size: $font-mini / 2;
    vertical-align: rem(2px);
  }
}
</style>
