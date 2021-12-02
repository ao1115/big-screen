import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';

export const Chart2 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: { show: false },
            legend: { show: false },
            grid: {
                x: px(80),
                y: px(20),
                x2: px(80),
                y2: px(20),
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: { show: false },
                axisLabel: { show: false }
            },
            yAxis: {
                axisTick: { show: false },
                type: 'category',
                data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
                    '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2020年',
                    type: 'bar',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    }
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    }
                }
            ]
        });
    }, []);
    return (
        <div className="破获排名 bordered">
            <h2>案件破获排名</h2>
            <div className="chart" ref={divRef}>
            </div>
            <div className="legend">
                <span className="first" /> 2020
                <span className="second" /> 2021
            </div>
        </div>
    )

}