<template>
  <div class="chart-demo">
    chart-demo
    <a-row type="flex" justify="center" align="top">
      <a-col :span="8">
        <!-- 折线图 -->
        <chart-line :config="lineConfig"></chart-line>
      </a-col>
      <a-col :span="8">
        <!-- 柱状图 -->
        <chart-bar :config="barConfig"></chart-bar>
      </a-col>
      <a-col :span="8">
        <!-- 条形图 -->
        <chart-bar-horizontal></chart-bar-horizontal>
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="8">
        <!-- 组合图 -->
        <chart-combo :config="comboConfig"></chart-combo>
      </a-col>
      <a-col :span="8">
        <!-- avg -->
        <chart-combo :config="comboConfig" :data="avgData"></chart-combo>
      </a-col>
      <a-col :span="8">
        <chart-bar-horizontal
          :config="{
            series: { showBg: true, showBgLabel: true, label: { show: false } },
          }"
        ></chart-bar-horizontal>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "chart-demo",
  components: {
    chartCombo: (resolve) => require(["../../components/chart/combo"], resolve),
    chartLine: (resolve) => require(["../../components/chart/line"], resolve),
    chartBar: (resolve) => require(["../../components/chart/bar"], resolve),
    chartBarHorizontal: (resolve) =>
      require(["../../components/chart/bar/horizontal"], resolve),
  },
  data() {
    return {
      lineConfig: {
        legend: { show: true },
        // xAxis: { axisLine: false },
        yAxis: { axisLine: false, splitLine: true },
        series: {},
      },
      barConfig: {},
      comboConfig: {
        legend: { show: true },
      },
      // avg
      avgData: {
        axis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        items: [
          {
            name: "Gdp1",
            data: [1290, 1330, 1320, 820, 932, 901, 934],
            type: "bar",
          },
          {
            name: "Gdp3",
            data: [1290, 1330, 1320, 820, 932, 901, 934],
            type: "avg",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
