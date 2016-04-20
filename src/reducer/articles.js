import {  } from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const { type, data } = action

    console.log('## articles reducer', type)

    switch (type) {

    }

    return articles
}