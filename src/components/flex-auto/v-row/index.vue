<template>
  <div
    class="v-row"
    :style="{
      height: height,
      'flex-direction': direction,
      'flex-wrap': wrap,
      'justify-content': justify,
      'align-items': align,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "v-title",
  props: {
    height: [Number, String],
    direction: {
      // flex-direction: row | row-reverse | column | column-reverse;
      type: String,
      default: "",
    },
    wrap: {
      // flex-wrap: nowrap | wrap | wrap-reverse;
      type: String,
      default: "",
    },
    justify: {
      // justify-content: flex-start | flex-end | center | space-between | space-around;
      type: String,
      default: "",
    },
    align: {
      // align-items: flex-start | flex-end | center | baseline | stretch;
      type: String,
      default: "",
    },
    gutter: [String, Array],
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-row {
  display: -webkit-flex; /* Safari */
  display: flex;

  height: 100%;

  .v-col:first-child {
    padding-left: 0 !important;
  }
  .v-col:last-child {
    padding-right: 0 !important;
  }
}
</style>
