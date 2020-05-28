<template>
  <v-flex
    :data-name="$options.name"
    :style="{ flex: span, padding: padding }"
    :type="type"
    :direction="direction"
    :wrap="wrap"
    :justify="justify"
    :align="align"
    :gutter="gutter"
    :fixed="fixed"
  >
    <slot>&nbsp;</slot>
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

<style lang="scss" scoped></style>
