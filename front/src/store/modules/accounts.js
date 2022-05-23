import drf from '@/api/drf'
import axios from 'axios'
import router from '@/router'

export default {
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {
    isLoggedIn: state => !!state.token,
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
  },
  actions: {
    login({ dispatch }, credentials) {
      axios({
        url: drf.accounts.login(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          dispatch('saveToken', token)
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
        })
    },

    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },

    signup({ dispatch }, credentials) {

      axios({
        url: drf.accounts.signup(),
        method: 'post',
        data: credentials
      })
        .then(res => {
          const token = res.data.key
          dispatch('saveToken', token)
          router.push({ name: 'home' })
        })
        .catch(err => {
          console.error(err.response.data)
        })
    },
  },

}
