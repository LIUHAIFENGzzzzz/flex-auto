# flex-auto

轻量级，flex布局，全方位自适应宽高



### demo演示

https://liuhaifengzzzzz.github.io/flex-auto



### npm

```npm
npm i flex-auto --save

cnpm i flex-auto --save
```

### vue

```js
import Vue from "vue";

import flexAuto from 'flex-auto';
Vue.use(flexAuto);
```

### 使用方法

```vue
<!-- 基础用法 -->
<v-flex>
  <v-flex>1</v-flex>
  <v-flex>2</v-flex>
</v-flex>

<!-- v-flex高宽自动适应 -->
<v-flex>
  <div>1</div>
  <v-flex>2</v-flex>
</v-flex>

<!-- 行布局 -->
<v-row>
  <v-flex>1</v-flex>
  <v-flex>2</v-flex>
</v-row>

<!-- 列布局 -->
<v-col>
  <v-flex>1</v-flex>
  <v-flex>2</v-flex>
</v-col>

<!-- 居中布局 -->
<v-center>
  justify-content:center && align-items:center
</v-center>

<!-- 4 * 4 -->
<v-row>
  <v-col>
    <v-flex>1</v-flex>
    <v-flex>2</v-flex>
  </v-col>
  <v-col>
    <v-flex>3</v-flex>
    <v-flex>4</v-flex>
  </v-col>
</v-row>

<!-- 4 * 4 -->
<v-col>
  <v-row>
    <v-flex>1</v-flex>
    <v-flex>2</v-flex>
  </v-row>
  <v-row>
    <v-flex>3</v-flex>
    <v-flex>4</v-flex>
  </v-row>
</v-col>

<!-- 列宽默认等分 -->
<v-flex>
  <v-flex>1份</v-flex>
  <v-flex>1份</v-flex>
</v-flex>

<!-- 列宽不等分 -->
<v-flex>
  <v-flex>1份</v-flex>
  <v-flex :span="2">2份</v-flex>
</v-flex>

<v-flex>
  <v-flex :span="3">3份</v-flex>
  <v-flex :span="4">4份</v-flex>
</v-flex>

...
```

### v-row && v-col && v-flex && v-center

```js
props: {
  span: {
    // 栅格份数 默认均分
    type: Number,
    default: 1,
  },
  type: {
    // flex inline-flex block
    type: String,
    default: "flex",
  },
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
  // 栅格间隔，同padding设置
  gutter: [String, Array],
  // 固定容器宽高，默认自适应，如果子元素过多撑开父元素，可设成true
  fixed: {
    type: Boolean,
    default: false,
  }
}
```



See [Configuration Reference](https://cn.vuejs.org/v2/api/).
