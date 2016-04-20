import React, { Component, PropTypes } from 'react'
import Comment from './Comment/index.js'
import toggleOpen from '../HOC/toggleOpen'
import { loadCommentsForArticle, addComment as addNewComment } from '../AC/comments'

class CommentList extends Component {
    state = {
        commentText: ''
    }

    static contextTypes = {
        currentUser: PropTypes.object
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        const text = this.props.isOpen ? 'close comments' : 'open comments'
        return <a href="#" onClick = {this.openCommentList}>{text}</a>
    }

    openCommentList = () =>
    {
        const { article, isOpen, toggleOpen } = this.props

        if (!article.commentsLoaded && !article.commentsLoading)
        {
            loadCommentsForArticle({ id: article.id })
        }

        toggleOpen()
    }

    getBody() {
        const { article, isOpen } = this.props
        const comments = article.comments

        if (!isOpen) return null

        if (!article.commentsLoaded)
        {
            return <div>Loading comments...</div>
        }

        //console.log(comments)

        const commetItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>
                {commetItems}
                <li>{this.getCommentInput()}</li>
            </ul>
    }

    getCommentInput() {
        return <form onSubmit={this.addComment}>
            <label>new comment: </label>
            <input type="text" value={this.state.commentText} onChange = {this.handleChange}/>
        </form>
    }

    addComment = (ev) => {
        ev.preventDefault()
        addNewComment(this.state.commentText, this.props.article.id, this.context.currentUser.name)
        this.setState({
            commentText: ''
        })
    }

    handleChange = (ev) => {
        this.setState({
            commentText: ev.target.value
        })
    }
}

export default toggleOpen(CommentList)