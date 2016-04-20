import React, { Component, PropTypes } from 'react'
import Article from './Article'
import singleOpen from '../HOC/singleOpen'

class AricleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    article = {article}
                />
            </li>
        )
    }
}

export default singleOpen(AricleList)