import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import './LeftMenu.scss'
import ArticleList from '../articleList/ArticleList'

const LeftMenu = () => {
  const recommend = [
    {
      cid: 0,
      title: '热门博文',
    },
    {
      cid: 440,
      title: '每日一问',
    },
  ]

  const topic = [
    { cid: 440, title: '面试相关' },
    { cid: 78, title: '性能优化' },
    { cid: 152, title: 'framework' },
    { cid: 460, title: '开源库源码' },
    { cid: 510, title: '大厂分享' },
  ]

  return (
    <div className="menu_bar">
      <div className="recommend">
        <h3>推荐</h3>
        <ul>
          {recommend.map(item => {
            return (
              <li key={item.cid}>
                <Link to={`/index?cid=${item.cid}`}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="topic">
        <h3>专题</h3>
        <ul>
          {topic.map(item => {
            return (
              <li key={item.cid}>
                <Link to={`/index?cid=${item.cid}`}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <Routes>
        <Route path="/index?cid=:id" element={<ArticleList />} />
      </Routes>
    </div>
  )
}

export default LeftMenu
