import React from 'react'

// Import ImgSwiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import ImgSwiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'

import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'

// Import ImgSwiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './ImgSwiper.scss'

// install ImgSwiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

const slide1URL = 'https://www.wanandroid.com/blog/show/2'
const slide2URL = 'https://flutter.cn/'
const slide3URL = 'https://www.wanandroid.com/navi'

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
          <a href={slide1URL}>
            <img src={slide1} alt="slide1" className="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <a href={slide2URL}>
            <img src={slide2} alt="slide2" className="img" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <a href={slide3URL}>
            <img src={slide3} alt="slide3" className="img" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImgSwiper
