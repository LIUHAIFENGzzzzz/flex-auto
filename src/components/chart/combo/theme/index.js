import echarts from "echarts";

import config from "./config";
import setThemeOption from "./common";

// echarts 注册主题
export default function registerTheme(option) {
  option = $.extend(true, {}, config, option);

  var theme = setThemeOption(option);
  // theme.categoryAxis.splitLine.show = false;
  echarts.registerTheme(option.name, theme);

  return option;
}
