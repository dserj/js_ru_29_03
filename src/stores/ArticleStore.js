import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE } from '../constants'
import { ADD_COMMENT } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    this.emitChange()
                    break;

                case ADD_COMMENT:
                    this.__addComment(data)
                    this.emitChange()
                    break;
            }
        })
    }

    __addComment = (data) => {
        console.log('ArticleStore', 'ADD_COMMENT', data)
        let article = this.getById(data.articleId);
        article.comments.push(data.comment.id);
        this.emitChange();
    }
}

export default ArticleStore