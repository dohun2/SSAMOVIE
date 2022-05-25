import drf from '@/api/drf'
import axios from 'axios'
import router from '@/router'

export default {
  state: {
    token: localStorage.getItem('token') || '',
    authError: null,
    currentUser: {},
    username: localStorage.getItem('CurrentUser') || '',
  },
  getters: {
    currentUser: state => state.currentUser,
    isLoggedIn: state => !!state.token,
    authError: state => state.authError,
    authHeader: state => ({ Authorization: `Token ${state.token}` })
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_AUTH_ERROR: (state, error) => state.authError = error,
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_USERNAME: (state, username) => state.currentUser = username
  },
  actions: {
    login({ dispatch, commit }, credentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          console.log(token)
          dispatch('saveToken', token)
          dispatch('fetchCurrentUser')
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },

    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },

    signup({ dispatch, commit }, credentials) {
      console.log(credentials)
      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          dispatch('saveToken', token)
          dispatch('fetchCurrentUser')
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
          commit('SET_AUTH_ERROR', err.response.data)
        })
    },
    logout({ getters, dispatch }) {

      axios({
        url: drf.accounts.logout(),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(() => {
          dispatch('removeToken')
          dispatch('removeUsername')
          router.push({ name: 'login' })
        })
        .catch(err => {
          console.error(err.response)
        })
    },
    removeToken({ commit }) {
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
    },
    removeUsername({ commit }) {
      commit('SET_USERNAME', '')
      localStorage.setItem('CurrentUser', '')
    },


    fetchCurrentUser({ commit, getters, dispatch }) {
      if (getters.isLoggedIn) {
        axios({
          url: drf.accounts.currentUserInfo(),
          method: 'get',
          headers: getters.authHeader,
        })
          .then(res => {
            console.log(res.data)
            localStorage.setItem('CurrentUser', res.data.username)
            commit('SET_CURRENT_USER', res.data)
          })
          .catch(err => {
            if (err.response.status === 401) {
              dispatch('removeToken')
              router.push({ name: 'login' })
            }
          })
      }
    },
  },

}
