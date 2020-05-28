export default {
  props: {
    span: {
      // 栅格份数 默认均分
      type: Number,
      default: 1,
    },
    type: {
      // flex block inline-flex
      type: String,
      default: "flex",
    },
    direction: {
      // flex-direction: row | row-reverse | column | column-reverse;
      type: String,
      default: "column",
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
    // 栅格间隔
    gutter: [String, Array],
  },
};
