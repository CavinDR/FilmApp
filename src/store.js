import Vue from 'vue'
import Vuex from 'vuex'
// import { getCityId, getCityName } from '@/utils/local-data'
import Cookies from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: Cookies.get('username'),
    userimg: Cookies.get('userimg'),
    usertoken: Cookies.get('token'),
    region: Cookies.get('region'),
  },
  mutations: {
    setusername (state, val) {
      state.username = val
    },
    setuserimg (state, val) {
      state.userimg = val
    },
    settoken (state, val) {
      state.usertoken = val
    },
    setregion (state, val) {
      state.region = val
    }
  },
  actions: {

  }
})
