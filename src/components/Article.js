import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
import { commentStore } from '../stores'

class Article extends Component {

    static propTypes = {
      deleteArticle: PropTypes.func.isRequired,
      selectArticle: PropTypes.func.isRequired,
      article: PropTypes.object.isRequired,
      isSelected: PropTypes.bool.isRequired,
      openItem: PropTypes.func.isRequired
    }

    render() {
        const { article: { title }, isSelected, openItem } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a> |
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                {this.getBody()}
            </div>
        )
    }

    deleteArticle = (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    onCommentAdded = (ev) => {
      console.log('onCommentAdded', ev)
      commentStore.__addComment({ articleId: this.props.article.id, comment: { name: 'auto', text: ev } })
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList
                  comments = {article.getRelation('comments')}
                  ref = "commentList"
                  addHandler = {this.onCommentAdded}
                />
            </section>
        )
    }
}

export default Article