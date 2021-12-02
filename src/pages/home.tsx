import React, { useRef, useEffect } from 'react';
import './home.scss';
import headerBg from "../images/header.png"
import { Chart1 } from '../components/chart-1';
import { Chart2 } from '../components/chart-2';
import { Chart3 } from '../components/chart-3';
export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home" >
      <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
        <h2>国家公安合成作战平台</h2>
        <h6>{year}年12月2日 12:22:00</h6>
      </header>
      <main>
        <section className="section1 ">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2  bordered" >
          <Chart3 />
        </section>
        <section className="section3  bordered">3</section>
        <section className="section4  bordered">4</section>
        <section className="section5  bordered">5</section>
      </main>
      <footer>
        &copy; 敖秀芳 2020-2021
      </footer>
    </div>
  );
};
