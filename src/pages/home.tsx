import React, { useRef, useEffect } from 'react';
import './home.scss';
import headerBg from "../images/header.png"
import { Chart1 } from '../components/chart-1';

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

        </section>
        <section className="section2  borderd" >222</section>
        <section className="section3  borderd">3</section>
        <section className="section4  borderd">4</section>
        <section className="section5  borderd">5</section>
      </main>
    </div>
  );
};
