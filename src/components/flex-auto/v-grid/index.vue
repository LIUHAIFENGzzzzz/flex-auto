<template>
  <div :data-name="$options.name" :class="['v-grid', 'v-grid__' + type]">
    <div>
      <slot>&nbsp;</slot>
    </div>
  </div>
</template>

<script>
import mixin from "../mixins";

export default {
  name: "v-grid",
  mixins: [mixin],
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
