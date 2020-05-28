<template>
  <div
    :class="['v-flex', type ? 'v-flex__' + type : '']"
    :style="{
      height: height,
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
  name: "v-flex",
  mixins: [mixin],
  props: {
    height: String,
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
  height: 100%;
}
</style>
