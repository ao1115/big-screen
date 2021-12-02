import React, { useRef, useEffect } from 'react';
import './home.scss';
import headerBg from "../images/header.png"
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
export const Home = () => {

  return (
    <div className="home" >
      <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
        <h2>国家公安合成作战平台</h2>
        <span>2021年12月2日 12:22:00</span>
      </header>
      <main>
        <section className="section1 ">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2  bordered" >222</section>
        <section className="section3  bordered">3</section>
        <section className="section4  bordered">4</section>
        <section className="section5  bordered">5</section>
      </main>
    </div>
  );
};
