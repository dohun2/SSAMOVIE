const HOST = 'http://localhost:8000/api/v1/'
const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMENTS = 'comments/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    logout: () => HOST + ACCOUNTS + 'logout/',
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
  },
  movies: {
    movies: () => HOST + MOVIES,
    detail: (id) => HOST + MOVIES + id + '/'
  },
  articles: {
    articles: () => HOST + MOVIES + 'articles/',
    article: (articleId) => HOST + MOVIES + 'articles/' + `${articleId}/`,
    comments: (articleId) => HOST + MOVIES + 'articles/' + `${articleId}/` + COMMENTS,
  }
}
