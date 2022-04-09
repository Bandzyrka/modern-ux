import React from 'react'
import './Blog.scss'
import {Article} from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-content__groupA">
          <Article imageUrl={blog01} date={date} title={title}/>
        </div>
        <div className="gpt3__blog-content__groupB">
        <Article imageUrl={blog02} date={date} title={title}/>
        <Article imageUrl={blog03} date={date} title={title}/>
        <Article imageUrl={blog04} date={date} title={title}/>
        <Article imageUrl={blog05} date={date} title={title}/>
        </div>      
      </div>
    </div>
  )
}

export default Blog

const title = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
const date = 'Sep 26, 2021'