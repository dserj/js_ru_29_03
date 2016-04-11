import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import Loader from './Loader'
import {loadSingleArticle} from '../AC/articles'

class ArticleBody extends Component {
  static propTypes: {
      isOpen: PropTypes.bool.isRequired,
      article: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps)
  {
    // console.log('ArticleBody will receive props', nextProps, this.props);
    if (nextProps.isOpen === true && nextProps.article.text == undefined)
    {
      console.log('loading article: ' + this.props.article.id)
      loadSingleArticle(this.props.article.id)
    }
  }

  render()
  {
    if (!this.props.isOpen) return null
    const { article } = this.props

    //console.log('ArticleBody text = ', article.text)

    if (article.text == undefined){
      return <Loader />
    }

    return (
      <section>
        {article.text}
        <CommentList article = {article} />
      </section>
    )
  }
}

export default ArticleBody;