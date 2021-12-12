import React from 'react'

import './Home.scss'
import ImgSwiper from '../../components/swiper/ImgSwiper'
import LeftMenu from './leftMenu/LeftMenu'
import ArticleList from './articleList/ArticleList'

const Home = () => {
  return (
    <div className="container">
      <div className="main_content">
        <ImgSwiper />
        <div className="block_left">
          <LeftMenu />
        </div>
          <div className="block_right">
              <ArticleList />
          </div>
      </div>
    </div>
  )
}

export default Home
