import React from 'react';
import './home.scss';
import headerBg from "../images/header.png"

export const Home = () => {
  return (
    <div className="home" >
      <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
        <h2>国家公安合成作战平台</h2>
        <span>2021年12月2日 12:22:00</span>
      </header>
    </div>
  );
};
