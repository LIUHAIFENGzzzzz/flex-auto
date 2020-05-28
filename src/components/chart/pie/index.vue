<template>
  <div :id="id" class="pie-chart"></div>
</template>

<script>
import echarts from "echarts";

import mixin from "../mixins";
import Chart from "./chart";
export default {
    name: "chart-pie",
    mixins: [mixin],
    props: {
        piedata: Object,
        config: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    data() {
        return {};
    },
    mounted() {
        console.log(this.piedata,'this data');
    },
    // methods: {
    //     setOption() {
    //         let option = new Chart(this.data, this.config).getOption();
    //         this.echartsIns = echarts.init(
    //             document.getElementById(this.id)
    //         );
    //         console.log(option,'show me the myotion');
    //         this.echartsIns.setOption(option);
    //     },
    // },
    methods: {
    init() {
      this.echartsIns && this.echartsIns.dispose();
      this.echartsIns = echarts.init(document.getElementById(this.id));
      this.setOption();
    },
    setOption() {
      let option = new Chart(this.piedata, this.config).getOption();
      console.log(option, "show me the myotion");
      this.echartsIns.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.pie-chart {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
}
</style>