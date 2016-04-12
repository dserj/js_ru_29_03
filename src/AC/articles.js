import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL } from '../constants'
import { loadAll, loadArticle } from './api/articles'
import { asyncAC } from './utils'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export const loadAllArticles = asyncAC(loadAll, LOAD_ALL_ARTICLES)

//не понятно как сделать аналог функции выше, но с параметрами, поэтому просто дублирую код.. :(
export const loadSingleArticle = function(id) {
    console.log('article AC, start loading')

    AppDispatcher.dispatch({
        type: LOAD_ARTICLE + START
    })

    setTimeout(function() {
        loadArticle(id)
          .done(function(response) {
              AppDispatcher.dispatch({
              type: LOAD_ARTICLE + SUCCESS,
              response
            })
          })
          .fail(function(error) {
              AppDispatcher.dispatch({
              type: LOAD_ARTICLE + FAIL,
              error
            })
          })
    }, 1000)
}