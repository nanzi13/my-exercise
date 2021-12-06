import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './MySwiper.scss';

// import Swiper core and required modules
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const MySwiper = function MySwiper() {
  return (
    <div className='swiper'>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'><img src='../../../assets/slide1.png' alt='slide1' className='img'/></SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
