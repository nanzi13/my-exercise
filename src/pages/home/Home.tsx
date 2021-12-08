import React from 'react'

import './Home.scss'
import ImgSwiper from '../../components/swiper/ImgSwiper'
import LeftMenu from './leftMenu/LeftMenu'

const Home = () => {
  return (
    <div className="container">
      <div className="main_content">
        <ImgSwiper />
        <LeftMenu />
      </div>
    </div>
  )
}

export default Home
