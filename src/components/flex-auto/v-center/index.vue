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
  name: "v-center",
  mixins: [mixin],
  components: {
    vFlex: (resolve) => require(["../v-flex"], resolve),
  },
  props: {
    justify: {
      type: String,
      default: "center",
    },
    align: {
      type: String,
      default: "center",
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
