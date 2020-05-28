### 使用案例

```vue
    <a-row>
        <a-col :span="8" style="height: 12rem;">
            <pie :data="pieData" unit="万元" :config="{legend: false, fontSize: 100}">
                <div>KPI名称</div>
                <div>1123</div>
            </pie>
        </a-col>
        <a-col :span="8" style="height: 12rem;">
            <pie :data="pieData" unit="万元" :config="{legend: true, fontSize: 100}">
                <div>KPI名称</div>
                <div>1123</div>
            </pie>
        </a-col>
        <a-col :span="8" style="height: 12rem;">
            <pie :data="pieData_2" unit="万元" :config="{legend: true, fontSize: 100}">
                <div>KPI名称</div>
                <div>1123</div>
            </pie>
        </a-col>
    </a-row>
```

### 参数说明

```properties
config: 配置项 主要控制显示隐藏, 有参数legend | colorList | fontSize(percent)
    type: object
    default: {}
    
 data: 数据
    type: object
    default: {}
    eg.
    {
        names: ["居住", "生产", "经营", "办公", "仓储", "其他"],
        values: [213, 315, 113, 325, 126, 137],
        rate: [-.4, .5, -.3, .5, .6, .7]
    }
 
 unit: 单位
    type: String,
    default: ''
```


