### 使用案例

```vue
<chart-pie :piedata="piedata" :theme="theme"></chart-pie>
```

### 参数说明

```properties
config: 配置项 
    type: object
    default: {}
    
 piedata: 数据
    type: object
    default: {}
    
 
```

### Config

```js
/**
 * 默认配置项
 * @param { Object } _config
 */
{

}
```

### data

```js
 {
     items: [
        {
            data: [
                {value: 311, name: '商品房'},
                {value: 355, name: '售后房'},
                {value: 12, name: '系统公房'},
                {value: 190, name: '直管公房'},
                {value: 88, name: '军产房'}
            ]
        },
        {
            data: [
                '商品房','售后房','系统公房','直管公房','军产房'
            ]
        }
    ]
};
```

