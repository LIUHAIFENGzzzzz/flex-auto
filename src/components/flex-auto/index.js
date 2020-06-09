import vFlex from "./v-flex";

import vRow from "./v-row";
import vCol from "./v-col";
import vCenter from "./v-center";

import vGrid from "./v-grid";

import "./scss/style.css";

export default {
  install: (Vue) => {
    Vue.component("v-flex", vFlex);

    Vue.component("v-row", vRow);
    Vue.component("v-col", vCol);
    Vue.component("v-center", vCenter);

    Vue.component("v-grid", vGrid);
  },
};

export { vFlex, vRow, vCol, vCenter, vGrid };
