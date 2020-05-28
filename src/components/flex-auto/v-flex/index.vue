<template>
  <div
    :data-name="$options.name"
    :class="[
      'v-flex',
      type ? 'v-flex__' + type : '',
      fixed ? 'v-flex__fixed' : '',
    ]"
    :style="{
      flex: span,
      'flex-direction': direction,
      'flex-wrap': wrap,
      'justify-content': justify,
      'align-items': align,
      padding: padding,
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
    width: String,
    height: String,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
