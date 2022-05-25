import drf from '@/api/drf'
import axios from 'axios'

export default {
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    createArticle({ getters }, article) {
      console.log(article)
      axios({
        url: drf.articles.create(),
        method: 'post',
        headers: getters.authHeader,
        data: article
      })
        .then(() => {
          console.log('성공')
        })
        .catch(err => console.error(err.response))
    },
  },

}
