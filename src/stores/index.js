import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import CurrentUserStore from './CurrentUserStore'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores, normalizedComments),
    users: new CurrentUserStore(stores, { id: 0, name: 'Anonymous' })
})

//for debug only
window.stores = stores

export default stores
export const commentStore = stores.comments
export const articleStore = stores.articles