import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';

export const Chart9 = () => {
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
                x: px(10),
                x2: px(10),
                y: px(10),
                y2: px(10),
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 18, 28, 38, 48, 58, 68, 78],
                splitLine: { show: true, lineStyle: { color: '#073E78' } },
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: { fontSize: px(12), interval: '0' }
            },
            yAxis: {
                type: 'value',
                splitLine: { lineStyle: { color: '#073E78' } },
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    },
                    fontSize: px(12), interval: '0'

                }

            },
            series: [{
                type: 'line',
                data: [
                    0.19, 0.20, 0.26,
                    0.35, 0.26, 0.20,
                    0.08, 0.06
                ],
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: { width: px(2) },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F7A110'
                    }, {
                        offset: 1,
                        color: '#1B1D52'
                    }]),
                }
            }]
        });
    }, []);
    return (
        <div className="年龄段-图3">
            <h3>犯罪年龄趋势图</h3>
            <div ref={divRef} className="chart">
            </div>
        </div>
    )

}