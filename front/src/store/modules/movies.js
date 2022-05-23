export default {
  state: {
    movies: [],
  },
  getters: {
    movies: state => state.articles
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
  },
  actions: {
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.articles.articles(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => console.error(err.response))
    },
  },


}
