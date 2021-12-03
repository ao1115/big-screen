import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';

export const Chart2 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    const data = [
        { name: '城关区公安局', 2020: 2, 2021: 3 },
        { name: '七里河区公安局', 2020: 2, 2021: 3 },
        { name: '西固区公安局', 2020: 2, 2021: 3 },
        { name: '安宁区公安局', 2020: 2, 2021: 3 },
        { name: '红古区公安局', 2020: 2, 2021: 3 },
        { name: '永登县公安局', 2020: 2, 2021: 3 },
        { name: '皋兰县公安局', 2020: 2, 2021: 3 },
        { name: '榆中县公安局', 2020: 2, 2021: 3 },
        { name: '新区公安局', 2011: 2, 2012: 3 },
    ];
    function X(data) {
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
                data: data.map(n => n.name),
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
                    data: data.map(n => n[2020]),
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
                    data: data.map(n => n[2021]),
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
    }
    useEffect(() => {
        setInterval(() => {
            const newData = [
                { name: '城关区公安局', 2020: 2, 2021: Math.random() * 10 },
                { name: '七里河区公安局', 2020: 2, 2021: 3 },
                { name: '西固区公安局', 2020: Math.random() * 10, 2021: 3 },
                { name: '安宁区公安局', 2020: 2, 2021: Math.random() * 10 },
                { name: '红古区公安局', 2020: 2, 2021: 3 },
                { name: '永登县公安局', 2020: Math.random() * 10, 2021: 3 },
                { name: '皋兰县公安局', 2020: 2, 2021: 3 },
                { name: '榆中县公安局', 2020: 2, 2021: Math.random() * 10 },
            ];
            X(newData)
        }, 1000)

    }, []);
    useEffect(() => {
        X(data)
    })
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