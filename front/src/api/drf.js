const HOST = 'http://localhost:8000/api/v1/'
const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    signup: () => HOST + ACCOUNTS + 'signup/',
    logout: () => HOST + ACCOUNTS + 'logout/',
  },
  movies: {
    movies: () => HOST + MOVIES + 'movie/'
  }
}
