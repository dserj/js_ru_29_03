import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment as pureInrement } from '../AC/counter'
import ArticleList from '../components/ArticleList'

class ArticleListContainer extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    const { articles } = this.props

    return (
      <div>
        <h1>Number of articles {articles.length}</h1>
        <ArticleList articles = {articles} />
      </div>
    )
  }

  handleClick = (ev) => {
    ev.preventDefault()
    this.props.increment()
  }
}

export default connect((state) => {
  const { articles } = state
  return {articles: articles}
}, {
  increment: pureInrement
})(ArticleListContainer)