import * as actionTypes from "./actionTypes"

export const addArticle = article => {
  return {
    type: actionTypes.ADD_ARTICLE,
    article,
  }
}

export const simulateHttpRequest = article => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addArticle(article))
    }, 3000)
  }
}

export const editArticle = article => {
  return {
    type: actionTypes.EDIT_ARTICLE,
    article,
  }
}

export const deleteArticle =  id => {
  return {
    type: actionTypes.DELETE_ARTICLE,
    id
  }}