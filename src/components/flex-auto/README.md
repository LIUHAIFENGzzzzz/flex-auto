# flex-auto

轻量级，flex布局，全方位根据外层盒子自适应宽高

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
<v-row>
	<v-col></v-col>
</v-row>

<v-row>
    <div>&nbsp;</div>
    <!-- v-col 高度自适应 -->
    <!-- col.height = row.height - div.height -->
	<v-col></v-col>
</v-row>

<!-- 4 * 4 -->
<v-row>
	<v-col>
		<v-row direction="column">
        	<v-col>1</v-col>
        	<v-col>3</v-col>
        </v-row>
	</v-col>
	<v-col>
		<v-row direction="column">
        	<v-col>2</v-col>
        	<v-col>4</v-col>
        </v-row>
    </v-col>
</v-row>

<!-- 4 * 4 -->
<v-row direction="column">
	<v-col>
		<v-row>
        	<v-col>1</v-col>
        	<v-col>2</v-col>
        </v-row>
	</v-col>
	<v-col>
		<v-row>
        	<v-col>3</v-col>
        	<v-col>4</v-col>
        </v-row>
    </v-col>
</v-row>

<!-- 列宽默认等分 -->
<v-row>
	<v-col></v-col>
	<v-col></v-col>
</v-row>

<!-- 列宽不等分 -->
<v-row>
	<v-col>默认1份</v-col>
	<v-col :span="2">2份</v-col>
</v-row>

<v-row>
	<v-col :span="3">3份</v-col>
	<v-col :span="4">4份</v-col>
</v-row>

...
```

### v-row

```js
props:{
    height: [Number, String], // 高度 默认100%
    direction: { // flex-direction属性决定主轴的方向（即项目的排列方向）
      // flex-direction: row | row-reverse | column | column-reverse;
      type: String,
      default: "",
    },
    wrap: { // 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行
      // flex-wrap: nowrap | wrap | wrap-reverse;
      type: String,
      default: "",
    },
    justify: { // justify-content属性定义了项目在主轴上的对齐方式
      // justify-content: flex-start | flex-end | center | space-between | space-around;
      type: String,
      default: "",
    },
    align: { // align-items属性定义项目在交叉轴上如何对齐
      // align-items: flex-start | flex-end | center | baseline | stretch;
      type: String,
      default: "",
    },
    gutter: [String, Array],
    overflow: {
      // flex布局，子元素会撑开父元素，false不撑开
      type: Boolean,
      default: true,
    }
}
```

### v-col

```js
props:{
    span: { 
        // flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
        // 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍
        type: Number, 
        default: 1
    }
}
```





See [Configuration Reference](https://cn.vuejs.org/v2/api/).
