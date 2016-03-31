import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title, text, comments} = this.props.article
        const body = this.getBody(text, comments)
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
            </div>
        )
    }

    getBody(text, comments)
    {
        return this.state.isOpen ?
          <section>
              {text}
              <CommentList comments = {comments} />
          </section> : null
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article