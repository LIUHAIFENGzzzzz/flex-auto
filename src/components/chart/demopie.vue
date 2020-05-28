<template>
  <div class="chart-demo">
    piechart-demo
    <a-row type="flex" justify="center" align="top">
    </a-row>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="4" style="width: 10rem; max-width: 10rem;">
        <chart-pie :piedata="piedata"></chart-pie>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import pieData from './pie/data'
export default {
  name: "chart-demo",
  components: {
    chartCombo: (resolve) => require(["../../components/chart/combo"], resolve),
    chartLine: (resolve) => require(["../../components/chart/line"], resolve),
    chartBar: (resolve) => require(["../../components/chart/bar"], resolve),
    chartBarHorizontal: (resolve) =>
      require(["../../components/chart/bar/horizontal"], resolve),
    chartPie: (resolve) => require(["../../components/chart/pie"], resolve),
  },
    
  data() {
    return {
      piedata: {},
    };
  },
  mounted() {
    this.piedata = pieData;
    console.log(this.piedata,'show me the pieData');
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
