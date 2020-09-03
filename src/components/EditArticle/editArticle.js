import React from "react"
import "./editArticle.css"

const EditArticle = ({ handleTitleEdit, article }) => {
  return (
    <span>
      <input 
        type="text"
        value={article.title} 
        onChange={(event) => handleTitleEdit(event, article)}
        className='textTitle'
      />
  </span>
  )
}

export default EditArticle