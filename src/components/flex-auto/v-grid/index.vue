<template>
  <div :data-name="$options.name" :class="['v-grid']">
    <slot>&nbsp;</slot>
  </div>
</template>

<script>
// import mixin from "../mixins";

export default {
  name: "v-grid",
  // mixins: [mixin],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
