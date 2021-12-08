import React from 'react'
import { useNavigate } from 'react-router-dom'

import './LeftMenu.scss'

const LeftMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="block">
      <div className="menu_bar">
        <div className="recommend">
          <h3>推荐</h3>
          <button type="button" className="button" onClick={() => navigate('/')}>
            热门博文
          </button>
          <button type="button" className="button">
            每日一问
          </button>
        </div>
        <div className="topic">
          <h3>专题</h3>
          <button type="button" className="button">
            面试相关
          </button>
          <button type="button" className="button">
            性能优化
          </button>
          <button type="button" className="button">
            framework
          </button>
          <button type="button" className="button">
            开源库源码
          </button>
          <button type="button" className="button">
            大厂分享
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeftMenu
