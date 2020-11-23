import Vue from "vue";
import Vuex from "vuex";
import archive from "../assets/articles/archive.json";
import message from "../assets/message.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: archive,
    message: message,
    fetchNum: 2
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    // 記事一覧配列の取得
    articleArray: state => {
      return Object.keys(state.articles.fileMap).map(key => {
        return state.articles.fileMap[key];
      });
    }
  }
});
