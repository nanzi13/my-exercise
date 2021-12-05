import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from 'Components/Home';
import UserArticle from 'Components/UserArticle';
import Navi from 'Components/Navi';
import Project from 'Components/Project';
import ProjectIndex from 'Components/ProjectIndex';
import Tree from 'Components/Tree';
import Tools from 'Components/Tools';
import Wenda from 'Components/Wenda';
import Wx from 'Components/Wx';
import './app.scss';

const App = function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="nav">
          <ul>
            <li id="logo">
              <a href="http://localhost:8080/">
                <img src="./logo.png" alt="Logo" className="logo"/>
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
            <li id="wenda">
              <Link to="/wenda" className="title">
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
            <li id="wx">
              <Link to="/wx" className="title">
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
          <Route path="/wenda" element={<Wenda />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/project_index" element={<ProjectIndex />} />
          <Route path="/wx" element={<Wx />} />
          <Route path="/project" element={<Project />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
