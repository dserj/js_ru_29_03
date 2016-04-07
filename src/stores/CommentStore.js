import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { addComment } from '../AC/comments'

class CommentStore extends SimpleStore {
  constructor(...args) {
    super(...args)

    AppDispatcher.register((action) => {
      const { type, data } = action

      switch (type) {
      }
    })
  }

  __addComment = (data) => {
    let comment = data.comment;
    console.log('ADD_COMMENT', data)

    if (!data.articleId) { throw new Error('articleId was not defined!') }
    if (!comment.text) { throw new Error('text was not defined!') }
    if (!comment.name) { throw new Error('name was not defined!') }

    //не обязательно такой id будет уникальным
    let id = this.getAll().slice(-1)[0].id
    
    comment.id = ++id
    this.__add(comment)

    addComment(data.articleId, comment)
  }
}

export default CommentStore
