import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';

export const Chart11 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    const data = [
        { value: 0.08, name: '北京' },
        { value: 0.06, name: '上海' },
        { value: 0.11, name: '天津' },
        { value: 0.09, name: '重庆' },
        { value: 0.12, name: '呼和浩特' },
        { value: 0.06, name: '乌鲁木齐' },
        { value: 0.06, name: '长春' },
        { value: 0.06, name: '沈阳' },
        { value: 0.04, name: '黑龙江' },
        { value: 0.10, name: '西安' },
        { value: 0.12, name: '石家庄' },
        { value: 0.06, name: '济南' },
        { value: 0.09, name: '青岛' },
        { value: 0.12, name: '成都' },
        { value: 0.03, name: '深圳' },
        { value: 0.12, name: '广州' },
        { value: 0.06, name: '海南' },
        { value: 0.12, name: '武汉' },
        { value: 0.06, name: '南京' },
    ];
    let arrayShow = [];
    let index = 0;
    const change = () => {
        if (index >= 6) {
            index = 0
        }
        for (let i = 0; i < data.length; i++) {
            arrayShow = data.slice(index, index + 5)
            if (arrayShow.length < 5) {
                arrayShow = data.slice(1, 5)
            }
        }
        index = index + 1
        console.log(index)
    }
    useEffect(() => {
        setInterval(() => {
            change()
            X(arrayShow)
            console.log(arrayShow)
        }, 3000)
    })
    function X(data) {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(18),
                color: '#79839E'
            },
            title: { show: false },
            xAxis: { show: false },
            yAxis: { show: false },
            grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
            legend: {
                orient: 'vertical',
                left: px(40),
                top: 'center',
                textStyle: { color: 'white' },
                itemWidth: px(20),
                itemHeight: px(20),
                formatter(name) {
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    center: ['50%', '50%'],
                    type: 'pie',
                    radius: '80%',
                    label: { show: false },
                    labelLine: { show: false },
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }
    return (
        <div className="案发地级市  bordered">
            <h2>案发地级市统计</h2>
            <div className="chart" ref={divRef}>
            </div>
        </div>
    )

}

function changeDate() {
    throw new Error('Function not implemented.');
}
