import vFlex from "./v-flex";
import vGrid from "./v-grid";

import vRow from "./v-row";
import vCol from "./v-col";

import "./scss/style.scss";

export default {
  install: (Vue) => {
    Vue.component("v-flex", vFlex);
    Vue.component("v-grid", vGrid);

    Vue.component("v-row", vRow);
    Vue.component("v-col", vCol);
  },
};

export { vFlex, vGrid, vRow, vCol };
