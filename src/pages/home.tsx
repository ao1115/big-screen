import React, { useRef, useEffect } from 'react';
import './home.scss';
import dayjs from "dayjs";
import headerBg from "../images/header.png"
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
import { Chart4 } from '../components/chart-4';
import { Chart5 } from '../components/chart-5';
import { Chart6 } from '../components/chart-6';
import { Chart7 } from '../components/chart-7';
import { Chart8 } from '../components/chart-8';
import { Chart9 } from '../components/chart-9';
import { Chart10 } from '../components/chart-10';
import { Chart11 } from '../components/chart-11';
import { Chart12 } from '../components/chart-12';
export const Home = () => {
  const date = new Date().toISOString();
  let d = dayjs(date).format('YYYY-MM-DD HH:mm')
  return (
    <div className="home" >
      <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
        <h2>国家公安合成作战平台</h2>
        <h6>{d}</h6>
      </header>
      <main>
        <section className="section1 ">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2  " >
          <Chart3 />
          <Chart4 />
        </section>
        <section className="section3  ">
          <Chart5 />
        </section>
        <section className="section4 ">
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        <section className="section5 ">
          <Chart10 />
          <Chart11 />
          <Chart12 />
        </section>
      </main>
      <footer>
        &copy; 敖秀芳 2020-2021
      </footer>
    </div>
  );
};
