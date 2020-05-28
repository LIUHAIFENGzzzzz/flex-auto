import vRow from "./v-row";
import vCol from "./v-col";

export default {
  install: (Vue) => {
    Vue.component("v-row", vRow);
    Vue.component("v-col", vCol);
  },
};

export { vRow, vCol };
