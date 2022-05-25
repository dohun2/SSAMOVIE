import drf from '@/api/drf'
import axios from 'axios'
import router from '@/router'

export default {
  state: {
    articles: [],
    article: {}
  },
  getters: {
    articles: state => state.articles,
    article: state => state.article,
    isAuthor: (state, getters) => {
      return state.article.user?.username === getters.currentUser.username
    },

  },
  mutations: {
    SET_ARTICLES: (state, articles) => state.articles = articles,
    SET_ARTICLE: (state, article) => state.article = article,
    SET_ARTICLE_COMMENTS: (state, comments) => (state.article.comments = comments),
  },
  actions: {
    createArticle({ getters, dispatch }, article) {
      axios({
        url: drf.articles.articles(),
        method: 'post',
        headers: getters.authHeader,
        data: article
      })
        .then(() => {
          dispatch('fetchArticles')
          console.log('성공')
        })
        .catch(err => console.error(err.response))
    },

    fetchArticles({ commit, getters }) {

      axios({
        url: drf.articles.articles(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLES', res.data)
        })
        .catch(err => console.error(err.response))
    },

    fetchArticle({ commit, getters }, articleId) {
      axios({
        url: drf.articles.article(articleId),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
        })
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            console.log('실패')
          }
        })
    },

    deleteArticle({ commit, getters }, articleId) {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.articles.article(articleId),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('SET_ARTICLE', {})
            router.push({ name: 'community' })
          })
          .catch(err => console.error(err.response))
      }
    },

    updateArticle({ commit, getters }, { id, title, content }) {
      axios({
        url: drf.articles.article(id),
        method: 'put',
        data: { title, content },
        headers: getters.authHeader,
      })
        .then(res => {
          console.log(res.data)
          commit('SET_ARTICLE', res.data)
          router.push({
            name: 'article',
          })
        })
    },

    createComment({ commit, getters }, { articlePk, content }) {
      const comment = { content }

      axios({
        url: drf.articles.comments(articlePk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          console.log('댓글추가 성공')
          commit('SET_ARTICLE_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

  },


}
