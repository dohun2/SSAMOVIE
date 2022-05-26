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
    isMovies: state => !_.isEmpty(state.movies),
    isMovie: state => !_.isEmpty(state.movie),
    movies: state => state.movies,
    movie: state => state.movie,
    recommend: state => state.recommend
  },
  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    SET_RECOMMEND: (state, recommend) => state.recommend = recommend,
    SET_MOVIE_COMMENTS: (state, comments) => (state.movie.movie_comments = comments),
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
    },

    createMovieComment({ getters, dispatch }, { movieId, content }) {
      const comment = { content }

      axios({
        url: drf.movies.vote(movieId),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(() => {
          console.log('평점추가 성공')
          dispatch('detailMovie', movieId)
        })
        .catch(err => console.error(err.response))
    },

    deleteMovieComment({ getters, dispatch }, { movieId, commentPk }) {
      if (confirm('정말 삭제하시겠습니까?')) {
        console.log(movieId, commentPk)
        axios({
          url: drf.movies.comment(movieId, commentPk),
          method: 'delete',
          data: {},
          headers: getters.authHeader,
        })
          .then(() => {
            console.log('평점삭제 성공')
            dispatch('detailMovie', movieId)
          })
          .catch(err => console.error(err.response))
      }
    },

  },
}
