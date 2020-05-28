<template>
  <v-flex direction="column">
    <v-flex direction="column">
      <div class="title">row</div>
      <v-row>
        <v-flex>
          <v-flex>
            <v-col direction="column">
              <v-center>1</v-center>
              <v-center>2</v-center>
            </v-col>
          </v-flex>
          <v-flex>2</v-flex>
        </v-flex>
        <v-flex>
          <div class="grid-content black">2</div>
        </v-flex>
        <v-flex>
          <div class="grid-content yellow">3</div>
        </v-flex>
      </v-row>
    </v-flex>
    <v-flex direction="column">
      <div class="title">col</div>
      <v-col :gutter="['1rem']">
        <v-row>
          <v-flex>1</v-flex>
          <v-flex>2</v-flex>
        </v-row>
        <v-flex>
          <div class="grid-content black">3</div>
        </v-flex>
        <v-flex>
          <div class="grid-content yellow">4</div>
        </v-flex>
      </v-col>
</v-flex>
<v-flex>
  <v-flex type="inline-flex">
    <div>1</div>
  </v-flex>
  <v-flex :span="2">
    <v-grid>
      123<span style="font-size:48px">123</span>
    </v-grid>
  </v-flex>
</v-flex>
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
