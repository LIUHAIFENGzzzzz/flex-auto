<template>
  <div
    :class="['v-col', overflow ? '' : 'v-col__overflow-off']"
    :style="{
      flex: span + ' 1 auto',
      padding: Array.isArray(this.$parent.gutter)
        ? this.$parent.gutter.join(' ')
        : this.$parent.gutter,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "v-title",
  props: {
    span: {
      type: Number,
      default: 1,
    },
    overflow: {
      // flex布局，子元素会撑开父元素，false不撑开
      type: Boolean,
      default: true,
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
.v-col {
  &.v-col__overflow-off {
    width: 0;
  }
}
</style>
