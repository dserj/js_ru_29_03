import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { loadArticleById, deleteArticle } from '../AC/articles'
import Article from '../components/Article'

class ArticleContainer extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.object
    };

    render() {
        const { article } = this.props
        if (!article || article.loading) return <h3>Loading...</h3>

        return <div>
            <Article
              article = {article}
              ignoreLoading = {true}
              deleteArticle = {deleteArticle}
              isOpen = {true}
            />
        </div>
    }
}

function getState(stores, props) {
    const { id } = props
    const article = stores.articles.getById(id)
    if (!article || !article.text && !article.loading) loadArticleById({ id })

    return { article }
}

export default connectToStore(['articles'], getState)(ArticleContainer)