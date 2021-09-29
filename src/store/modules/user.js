import { getCookie } from '@/utils/auth';

const user = {
  state: {
    token: getCookie('token') || null,
    userInfo: null,
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    setUserInfo({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo);
    },
    // 获取用户信息
    GetUserInfo({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        const newData = JSON.parse(data);
        if (newData != 'null' && newData != undefined) {
          commit('SET_TOKEN', newData.userAccessToken);
          commit('SET_USER_INFO', newData);
          resolve();
        } else {
          commit('SET_TOKEN', null);
          commit('SET_USER_INFO', null);
          reject('error');
        }
      });
    },
  }
};
export default user;
