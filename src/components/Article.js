import React, { Component, PropTypes } from 'react'
import ArticleBody from './ArticleBody'
import { findDOMNode } from 'react-dom'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        selectArticle: PropTypes.func.isRequired,
        isSelected: PropTypes.bool,
        openItem: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired,
        deleteArticle: PropTypes.func.isRequired
    }
    render() {
        const { article: { title }, isSelected, openItem, deleteArticle } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a> |
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                <ArticleBody article = {this.props.article} isOpen = {this.props.isOpen} />
            </div>
        )
    }

    deleteArticle = (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }
}

export default Article