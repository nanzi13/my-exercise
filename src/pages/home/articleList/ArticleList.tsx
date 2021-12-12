import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ArticleList = () => {
  const [articleList, setArticleList] = useState([])

  const params = useParams()
    console.log('params', params)
  const URL = `https://www.wanandroid.com/article/list/0/json?cid=${params.cid}`

  useEffect(() => {
    axios.get(URL).then(response => setArticleList(response.data.datas))
  })

  return (
    <div>
      <ul>
        {articleList.map((article: object) => {
            return <li key={article.id}>{article.title}</li>
        })}
      </ul>
    </div>
  )
}

export default ArticleList
