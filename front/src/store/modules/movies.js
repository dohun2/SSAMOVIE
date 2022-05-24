import drf from '@/api/drf'
import axios from 'axios'
import _ from 'lodash'

export default {
  state: {
    movies: [],
    movie: [],
    recommend: [],
  },
  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    recommend: state => state.recommend
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_RECOMMEND: (state, recommend) => state.recommend = recommend,
  },
  actions: {
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.movies.movies(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIES', res.data)
        })
        .catch(err => console.error(err.response))
    },
    detailMovie({ commit, getters }, id) {
      axios({
        url: drf.movies.detail(id),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE', res.data)
        })
        .catch(err => console.error(err.response))
    },
    getRandom({ commit, getters }) {
      const random = _.sampleSize(getters.movies, 18)
      console.log(random)
      commit('SET_RECOMMEND', random)
    }
  },
}
