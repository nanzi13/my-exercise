import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import QuestionAndAnswer from './pages/QuestionAndAnswer'
import Tree from './pages/Tree'
import UserArticle from './pages/UserArticle'
import Navi from './pages/Navi'
import ProjectIndex from './pages/ProjectIndex'
import WechatOfficialAccount from './pages/WechatOfficialAccount'
import Project from './pages/Project'
import Tools from './pages/Tools'

import logo from './assets/logo.png'

import './app.scss'


const App = function App() {
  const BASE_URL = 'http://localhost:8080/'

  return (
    <div className="app">
      <BrowserRouter>
        <div className="nav">
          <ul>
            <li id="logo">
              <a href={BASE_URL}>
                <img src={logo} alt="Logo" className="logo"/>
              </a>
            </li>
            <li id="home">
              <Link to="/" className="title">
                首页
              </Link>
            </li>
            <li id="userArticle">
              <Link to="/user_article" className="title">
                广场
              </Link>
            </li>
            <li id="navi">
              <Link to="/navi" className="title">
                导航
              </Link>
            </li>
            <li id="Q_and_A">
              <Link to="/Q_and_A" className="title">
                问答
              </Link>
            </li>
            <li id="tree">
              <Link to="/tree" className="title">
                体系
              </Link>
            </li>
            <li id="projectIndex">
              <Link to="/project_index" className="title">
                项目
              </Link>
            </li>
            <li id="Wechat_official_account">
              <Link to="/Wechat_official_account" className="title">
                公众号
              </Link>
            </li>
            <li id="project">
              <Link to="/project" className="title">
                项目分类
              </Link>
            </li>
            <li id="tools">
              <Link to="/tools" className="title">
                工具
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user_article" element={<UserArticle />} />
          <Route path="/navi" element={<Navi />} />
          <Route path="/Q_and_A" element={<QuestionAndAnswer />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/project_index" element={<ProjectIndex />} />
          <Route path="/Wechat_official_account" element={<WechatOfficialAccount />} />
          <Route path="/project" element={<Project />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
