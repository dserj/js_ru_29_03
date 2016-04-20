import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle as pureDeleteArticle } from '../AC/article'
import ArticleList from '../components/ArticleList'

class ArticleListContainer extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    deleteArticle: PropTypes.func.isRequired
  };

  render() {
    const { articles } = this.props

    return (
      <div>
        <h1>Number of articles {articles.length}</h1>
        <ArticleList articles = {articles} deleteArticle = {this.props.deleteArticle} />
      </div>
    )
  }
}

export default connect((state) => {
  const { articles } = state
  return {articles: articles}
}, {
  deleteArticle: pureDeleteArticle
})(ArticleListContainer)