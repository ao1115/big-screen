import React, { useRef, useEffect } from 'react';
import './home.scss';
import headerBg from "../images/header.png"
import * as echarts from 'echarts'
const px = (n) => n / 2420 * (window as any).pageWidth;

export const Home = () => {
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
      xAxis: {
        data: ['北京', '上海', '重庆', '天津', '内蒙古', '新疆', '甘肃', '陕西', '山西'],
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
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    });
  }, []);
  return (
    <div className="home" >
      <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
        <h2>国家公安合成作战平台</h2>
        <span>2021年12月2日 12:22:00</span>
      </header>
      <main>
        <section className="section1 ">
          <div className="管辖统计 borderd">
            <h2>案发派出所管辖统计</h2>
            <div className="chart" ref={divRef}>
            </div>
          </div>
        </section>
        <section className="section2  borderd" >222</section>
        <section className="section3  borderd">3</section>
        <section className="section4  borderd">4</section>
        <section className="section5  borderd">5</section>
      </main>
    </div>
  );
};
