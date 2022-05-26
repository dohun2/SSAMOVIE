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
    profile: username => HOST + ACCOUNTS + 'profile/' + username,
  },
  movies: {
    movies: () => HOST + MOVIES,
    detail: (id) => HOST + MOVIES + id + '/',
    vote: (id) => HOST + MOVIES + `${id}/` + COMMENTS,
    comment: (id, commentPk) => HOST + MOVIES + `${id}/` + COMMENTS + `${commentPk}/`
  },
  articles: {
    articles: () => HOST + MOVIES + 'articles/',
    article: (articleId) => HOST + MOVIES + 'articles/' + `${articleId}/`,
    comments: (articleId) => HOST + MOVIES + 'articles/' + `${articleId}/` + COMMENTS,
    comment: (articleId, commentPk) =>
      HOST + MOVIES + 'articles/' + `${articleId}/` + COMMENTS + `${commentPk}/`,
  }
}
