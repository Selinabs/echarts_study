var echarts = require("echarts");
var myChar = echarts.init(document.getElementById("main"));
myChar.setoption({
    title: {
        text: 'echarts实例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["上衣", "帽子", "裤子", "裙子", "袜子"]
    },
    yAxis: {},
    series: [{
        name: "销量",
        type: "bar",
        data: [20, 50, 30, 80, 37]
    }]
});