import request from '@/utils/request';

export default {
  getVerifyCode() {
    return request({
      url: '/v1/manageapi/base/getVerifyCode',
      method: 'get'
    });
  },
  login(data, token) {
    return request({
      url: '/v1/manageapi/base/login',
      method: 'post',
      data,
    });
  },
  userIdCompanyIdFindBacklog() {
    return request({
      url: 'v1/manageapi/myself/userIdCompanyIdFindBacklog',
      method: 'get'
    });
  },
};
