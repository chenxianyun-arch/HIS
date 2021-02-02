import login from './request'

/**
 * 1 验证用户信息的请求方法
 * @param config
 * @returns {*}
 */
export default function userInfoCheck(config) {
  return login({
    method: 'post',
    url: '/login',
    data: {
      username: config.username,
      password: config.password
    }
  })

}


