import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';

export const Chart4 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null);
    const data = [
        0.15, 0.13, 0.11,
        0.13, 0.14, 0.15,
        0.16, 0.18, 0.21,
        0.19, 0.17, 0.16,
        0.15
    ]

    useEffect(() => {
        setInterval(() => {
            const newData = [Math.random() / 10, 0.08, Math.random() / 10, 0.12, 0.14, Math.random() / 10, Math.random() / 10, 0.12, 0.10, Math.random() / 10, 0.10, 0.06, Math.random() / 10]
            x(newData)
        }, 2000)
    })
    function x(data) {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                bottom: px(10),
                textStyle: { color: 'white' },
                itemWidth: px(30),
                itemHeight: px(16)
            },
            grid: {
                x: px(20),
                x2: px(20),
                y: px(20),
                y2: px(70),
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                splitLine: { show: true, lineStyle: { color: '#073E78' } },
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: { fontSize: px(12), interval: '0' }
            },
            yAxis: {
                type: 'value',
                splitLine: { lineStyle: { color: '#073E78' } },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        return val * 100 + '%';
                    }
                }
            },
            series: [{
                name: '故意伤人',
                type: 'line',
                data: data,
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: { width: px(2) },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#414a9f'
                    }, {
                        offset: 1,
                        color: '#1b1d52'
                    }]),
                }
            }]
        });
    }
    useEffect(() => {
        myChart.current = echarts.init(divRef.current);
        x(data);
    }, []);
    return (
        <div className="案发时段 bordered">
            <h2>案发时段分析</h2>
            <div className="chart" ref={divRef}>
            </div>
        </div>
    )

}