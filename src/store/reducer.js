import * as actionTypes from "./actionTypes"

const initialState = {
  articles: [
    { id: 1, title: "post 1"},
    { id: 2, title: "post 2"},
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle = {
        id: state.articles.length +1, 
        title: action.article.title,
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }

      case actionTypes.EDIT_ARTICLE:          
      case actionTypes.DELETE_ARTICLE:
        return  {
          ...state,
          articles: state.articles.filter(post => {
            return post.id !== action.id
          })}

  default: 
    return state
  }
}

export default reducer