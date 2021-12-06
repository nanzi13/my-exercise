import React from 'react';
import './home.scss';
import MySwiper from 'Components/Home/MySwiper/MySwiper';

const Home = function Home() {
  return (
    <div className="container">
      <div className="main_content">
        <MySwiper/>
      </div>
    </div>
  );
};

export default Home;
