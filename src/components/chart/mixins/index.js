import echarts from "echarts";

export default {
  props: {
    id: {
      type: [String, Number],
      default() {
        return Math.random().toFixed(8) + "-box";
      },
    },
    limit: {
      type: Number,
      default: 8,
    },
  },
  data() {
    return {
      echartsIns: null,
      currLimit: 0,
    };
  },
  watch: {
    data: {
      handler(nVal, oVal) {
        if (this.isDiff(nVal, oVal)) {
          this.data = nVal;
          if (this.currLimit > this.limit) {
            this.currLimit = 0;
            this.init && this.init();
          } else {
            this.currLimit++;
            this.setOption && this.setOption();
          }
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init && this.init();

      this.resizeEcharts();

      window.addEventListener(
        "resize",
        this.debounce(this.resizeEcharts, 200),
        false
      );
    });
  },
  methods: {
    // 防抖动
    debounce(fn, delay) {
      // 维护一个 timer
      let timer = null;

      return function() {
        // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(function() {
          fn.apply(context, args);
        }, delay);
      };
    },
    resizeEcharts() {
      if (this.echartsIns) {
        this.$nextTick(() => {
          this.echartsIns.resize();
        });
      }
    },
    isDiff(nData, oData) {
      return JSON.stringify(nData) != JSON.stringify(oData);
    },
  },
  beforeDestroy() {
    this.echartsIns.dispose();
    this.echartsIns = null;
  },
};
