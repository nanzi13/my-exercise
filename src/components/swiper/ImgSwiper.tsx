import React from 'react'

// Import ImgSwiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import ImgSwiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'

import slide1 from '../../assets/slide1.png'

// Import ImgSwiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './ImgSwiper.scss'

// install ImgSwiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])


const ImgSwiper = () => {
  return (
    <div className="swiper">
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
        <SwiperSlide className="swiper-slide">
          <img src={slide1} alt="slide1" className="img" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImgSwiper
