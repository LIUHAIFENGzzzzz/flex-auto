import echarts from "echarts";
import config from "../combo/theme/config";


const _config = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    hoverAnimation:false,
    title: {
    },
    color:['#B32BD5', '#96EE11', '#6B1AE6', '#7E23D2', '#0075D6', '#EE9E00'],
    legend: {
        orient: 'vertical',
        left: 10,
        data: []
    },
    series: [
        {
            name: '房屋保障',
            type: 'pie',
            radius: ['50%', '56%'],
            labelLine: {
                show: true
            },
            data: []
        }
    ]
    
};


export default class Chart {
    constructor(data,config) {
        // this.data = data? data : _data;
        this.data =data;
        this.config = $.extend(true, {},_config,config);
    }
    _getData() {
        this.config.series[0].data = this.data.items[0].data;
        var seriesdata = this.config.series[0].data;
        
        var newdata = [];

        for (var i=0; i< seriesdata.length;i++){
            newdata.push({
                value: seriesdata[i].value,
                name: seriesdata[i].name
            },{
                value:20,
                name:'',
                itemStyle: {
                    normal: {
                    label: {show: false},
                    color: 'rgba(0, 0, 0, 0)',
                            }
                }
            })
        }
        this.config.series[0].data =newdata;
        console.log(newdata,'show me seriesdata');
        var rich = {
            white: {
                color: '#80000',
                align: 'center',
                padding: [5, 0]
            }
        };
        var myitemstyle = {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < seriesdata.length; i++) {
                            total += seriesdata[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            return params.name + '\n{white|' + '占比' + percent + '%}';
                        }else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    show: true
                }
            }
        };
        this.config.series[0].itemStyle= myitemstyle;
        return this.config.series;
    }
    _getLegend() {
        this.config.legend.data = this.data.items[1].data;
        return this.config.legend;
    }
    getOption() {
        // this.config.series[0].data = _data.items[0].data;
        return {
            tooltip: this.config.tooltip,
            // legend: this.config.legend,
            legend: this._getLegend(),
            // series: this.config.series,
            series: this._getData(),
            color: this.config.color
        }
    }
}