<template>
  <v-flex
    class="v-flex__row"
    :style="{ flex: span }"
    :type="type"
    :direction="direction"
    :wrap="wrap"
    :justify="justify"
    :align="align"
    :gutter="gutter"
  >
    <slot></slot>
  </v-flex>
</template>

<script>
import mixin from "../mixins";

export default {
  name: "v-row",
  mixins: [mixin],
  components: {
    vFlex: (resolve) => require(["../v-flex"], resolve),
  },
  props: {
    direction: {
      type: String,
      default: "column",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-flex {
  flex: 1;
  height: auto;
}
</style>
