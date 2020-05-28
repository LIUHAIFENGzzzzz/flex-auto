<template>
  <div
    :class="['v-grid', 'v-grid__' + type, fixed ? 'v-grid__fixed' : '']"
    :style="{
      flex: span,
      'flex-direction': direction,
      'flex-wrap': wrap,
      'justify-content': justify,
      'align-items': align,
    }"
  >
    <slot>&nbsp;</slot>
  </div>
</template>

<script>
import mixin from "../mixins";

export default {
  name: "v-grid",
  mixins: [mixin],
  props: {
    // 防止子元素撑开父元素，默认自适应
    fixed: {
      type: Boolean,
      default: false,
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
.v-grid {
  .v-grid__fixed-width {
    width: 0;
  }

  .v-grid__fixed-height {
    height: 0;
  }

  .v-grid__fixed {
    @extend .v-grid__fixed-width;
    @extend .v-grid__fixed-height;
  }
}
</style>
