import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';

export const Chart1 = () => {
    const divRef = useRef(null)
    const myChart = useRef(null)
    let data = [
        { name: '北京', num: 10 },
        { name: '上海', num: 20 },
        { name: '天津', num: 36 },
        { name: '重庆', num: 24 },
        { name: '黑龙江', num: 40 },
        { name: '内蒙古', num: 52 },
        { name: '吉林', num: 15 },
        { name: '辽宁', num: 30 },
    ]
    let newData = [
        { name: '广东', num: 30 },
        { name: '广西', num: 10 },
        { name: '山东', num: 25 },
        { name: '河北', num: 45 },
        { name: '河南', num: 30 },
        { name: '湖南', num: 43 },
        { name: '湖北', num: 53 },
        { name: '新疆', num: 16 },
    ]
    function X(data) {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: { show: false },
            legend: { show: false },
            xAxis: {
                data: data.map(i => i.name),
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            grid: {
                x: px(40),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [{
                type: 'bar',
                data: data.map(i => i.num),
            }]
        });
    }
    useEffect(() => {
        X(data)
    }, []);
    useEffect(() => {
        setInterval(() => {
            X(newData)
        }, 2000)
        setInterval(() => {
            X(data)
        }, 4000)
    }, []);
    return (
        <div className="管辖统计 bordered">
            <h2>案发派出所管辖统计</h2>
            <div className="chart" ref={divRef}>
            </div>
        </div>
    )

}