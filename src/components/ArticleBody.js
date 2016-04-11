import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class ArticleBody extends Component {
  static propTypes: {
      isOpen: PropTypes.bool.isRequired,
      article: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps)
  {
    console.log('ArticleBody will receive props', nextProps);
  }

  render()
  {
    if (!this.props.isOpen) return null
    const { article } = this.props
    return (
      <section>
        {article.text}
        <CommentList article = {article} />
      </section>
    )
  }
}

export default ArticleBody;