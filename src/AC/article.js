import { DELETE_ARTICLE } from '../constants'

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    data: {
      articleId: id
    }
  }
}