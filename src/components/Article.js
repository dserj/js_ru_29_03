import React, { Component, PropTypes } from 'react'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    render() {
        const { article: { title }} = this.props
        return (
            <div ref = "articleContainer">
                <h3>{title}</h3>
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                {this.getBody()}
            </div>
        )
    }

    deleteArticle = (ev) => {
        ev.preventDefault()
        console.log('article ## delete article, id = ', this.props.article.id)
        //this.props.deleteArticle(this.props.article.id)
    }

    getBody() {
        const { article } = this.props
        return (
            <section>
                {article.text}
            </section>
        )
    }
}

export default Article