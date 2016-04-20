import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { loadAllArticles } from '../AC/articles'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, FAIL } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action
            let article

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + START:
                    article = this.getById(data.id)
                    article.commentsLoading = true;
                    this.__update(article)
                    break;

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    //console.log(data, response)

                    article = this.getById(data.id)
                    article.commentsLoading = false;
                    article.commentsLoaded = true;
                    article.comments = response
                    this.__update(article)
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.getStore('comments').dispatchToken])
                    article = this.getById(data.articleId)
                    article.comments = (article.comments || []).concat(data)
                    break

                case LOAD_ALL_ARTICLES + START:
                    this.loading = true
                    break

                case LOAD_ALL_ARTICLES + SUCCESS:
                    response.forEach(this.__update)
                    this.loading = false
                    break;

                case LOAD_ALL_ARTICLES + FAIL:
                    this.error = error
                    break;

                case LOAD_ARTICLE_BY_ID + START:
                    this.__update({...data, loading: true})
                    break;

                case LOAD_ARTICLE_BY_ID + SUCCESS:
                    this.__add(response)
                    break;

                default: return
            }
            this.emitChange()
        })
    }

    getOrLoadAll() {
        const articles = this.getAll()
        if (!articles.length && !this.loading) loadAllArticles()
        return articles
    }
}

export default ArticleStore