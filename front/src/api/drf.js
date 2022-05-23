const HOST = 'http://localhost:8000/api/v1/'
const ACCOUNTS = 'accounts/'

export default {
  accounts: {
    login: () => HOST + ACCOUNTS + 'login/',
    signup: () => HOST + ACCOUNTS + 'signup/',
  },
}
