import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import IndexPage from './RouteHandlers/IndexPage'
import Articles from './RouteHandlers/Articles'
import ArticlePage from './RouteHandlers/ArticlePage'
import NewArticlePage from './RouteHandlers/NewArticlePage'
import CommentList from './RouteHandlers/CommentList'

export default (
    <Router history = {browserHistory} >
        <Route path="/" component = {IndexPage} >
            <Route path = "comments" component = {CommentList} />
            <Route path = "articles/new" component = {NewArticlePage} />
            <Route path = "articles" component = {Articles} >
                <Route path = "/new" component = {NewArticlePage} />
                <Route path = ":id" component = {ArticlePage} />
            </Route>
        </Route>
    </Router>
)