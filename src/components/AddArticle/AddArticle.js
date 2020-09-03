import React, { useState } from "react"
import "./AddArticle.css"

const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState()

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }
  const addNewArticle = e => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <h2>Ajoutez votre Article</h2>
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  )
}
export default AddArticle