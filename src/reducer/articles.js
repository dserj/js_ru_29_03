import { DELETE_ARTICLE } from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const { type, data } = action

    console.log('## articles reducer', type)

    switch (type) {
        case DELETE_ARTICLE:
          console.log(DELETE_ARTICLE, data)
          return articles.filter((item) => item.id != data.articleId)
        break;
    }

    return articles
}