import React from 'react'
import './Article.scss'
const Article = ({imageUrl, date, title}) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt3__article-content">
        <div className="gpt3__article-content__heading">
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article