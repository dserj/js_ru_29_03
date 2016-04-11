import $ from 'jquery'

export function loadAll() {
    return $.get('/api/article')
}

export function loadArticle(id) {
    return $.get('/api/article/' + id)
}