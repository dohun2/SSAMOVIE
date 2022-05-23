import drf from '@/api/drf'
import axios from 'axios'

export default {
  state: {
    movies: [],
  },
  getters: {
    movies: state => state.movies
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
  },
  actions: {
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.movies.movies(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          console.log(res.data)
          commit('SET_MOVIES', res.data)
        })
        .catch(err => console.error(err.response))
    },
  },


}
