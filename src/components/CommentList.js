import React, { Component, PropTypes } from 'react'
import Comment from './Comment/index.js'
import toggleOpen from '../HOC/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        addHandler: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getAddForm() {
        console.log('getAddForm', this.props.isOpen);
        if (!this.props.isOpen) { return null }
        return <div style={{padding: '10px 0'}}>
                <input ref="commentInput" style={{ width: '300px' }} type="text" placeholder="add comment" />
                <button onClick = {this.onAddButtonClick}>Add</button>
        </div>
    }

    onAddButtonClick = (ev) =>
    {
        console.log(this.refs.commentInput.value);
        this.props.addHandler(this.refs.commentInput.value)
    }

    getLink() {
        const text = this.props.isOpen ? 'close comments' : 'open comments'
        return <a href="#" onClick = {this.props.toggleOpen}>{text}</a>
    }

    getBody() {
        const { comments } = this.props
        if (!this.props.isOpen || !comments) return null
        const commetItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>{this.getAddForm()}{commetItems}</ul>
    }
}

export default toggleOpen(CommentList)