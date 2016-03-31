import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  state = {
    isOpened: false
  }

  render()
  {
    return (
      <ul>
        <div><button onClick= {this.handleClick}>{this.getLinkText()}</button></div>
        {this.getList()}
      </ul>
    )
  }

  handleClick = () =>
  {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  getList()
  {
    if (this.state.isOpened)
    {
      return (this.props.comments && this.props.comments.length > 0)
        ? this.props.comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li>)
        : 'no comments'
    }
    else
    {
      return '';
    }
  }

  getLinkText()
  {
    return this.state.isOpened ? 'close comments' : 'open comments'
  }
}

export default CommentList