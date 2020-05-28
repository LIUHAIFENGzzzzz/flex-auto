<template>
  <v-flex direction="column">
    <v-grid direction="column">
      <div class="title">row</div>
      <v-row>
        <v-grid>
          <div class="grid-content red">1</div>
        </v-grid>
        <v-grid>
          <div class="grid-content black">2</div>
        </v-grid>
        <v-grid>
          <div class="grid-content yellow">3</div>
        </v-grid>
      </v-row>
    </v-grid>
    <v-grid direction="column">
      <div class="title">col</div>
      <v-col>
        <v-row :span="3">
          <v-grid>1</v-grid>
          <v-grid>2</v-grid>
        </v-row>
        <v-grid>
          <div class="grid-content black">3</div>
        </v-grid>
        <v-grid>
          <div class="grid-content yellow">4</div>
        </v-grid>
      </v-col>
    </v-grid>
  </v-flex>
</template>

<script>
export default {
  name: "demo",
  components: {
    chartCombo: (resolve) => require(["@/components/chart/combo"], resolve),
  },
};
</script>

<style scoped lang="scss">
.grid-content {
  width: 100%;
  height: 100%;
  font-size: 24px;

  &.red {
    background-color: red;
  }
  &.blue {
    background-color: blue;
  }
  &.black {
    background-color: black;
  }
  &.yellow {
    background-color: yellow;
  }
}

.title {
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  margin-top: 20px;
}
</style>
