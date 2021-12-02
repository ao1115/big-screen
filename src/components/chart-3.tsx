import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';

export const Chart3 = () => {
    const divRef = useRef(null)
    useEffect(() => {
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
                data: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
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
            series: [
                {
                    name: '抢劫',
                    type: 'line',
                    data: [0.01, 0.05, 0.10, 0.03, 0.07, 0.06, 0.06].reverse()
                },
                {
                    name: '醉驾',
                    type: 'line',
                    data: [0.01, 0.03, 0.09, 0.08, 0.06, 0.09, 0.08].reverse()
                },
                {
                    name: '盗窃',
                    type: 'line',
                    data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.07].reverse()
                },
                {
                    name: '故意杀人',
                    type: 'line',
                    data: [0.06, 0.05, 0.08, 0.07, 0.04, 0.09, 0.03].reverse()
                },
            ].map(obj => ({
                ...obj,
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: { width: px(2) }
            }))
        });
    }, []);
    return (
        <div className="案发趋势 bordered">
            <h2>案发趋势分析</h2>
            <div className="chart" ref={divRef}>
            </div>
        </div>
    )

}