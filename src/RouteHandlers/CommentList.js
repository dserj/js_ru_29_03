import React, { Component, PropTypes } from 'react'

class CommentList extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <h1>Comment list</h1>
        {this.props.children}
      </div>
    )
  }
}

export default CommentList