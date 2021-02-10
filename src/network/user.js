import user from "./request";


/**
 * 删除批量数据
 * @param config 返回配置参数
 * @returns {AxiosPromise} 返回Promise对象
 */
export  function deleteAllUser(config) {
  // 传递的字符串数组
  const data = {
    config: config
  };
  return user({
    method: 'post',
    url: '/deleteAll',
    data: data
  })
}

/**
 * 删除单条数据
 * @param config
 * @returns {*}
 */
export function deletSingalUser(config) {
  // 传递的id
  const data = {
    deleteId: config.deleteId
  }
  return user({
    method: 'post',
    url: '/deleteSingalPage',
    data: data
  })
}

/**
 * 用户审核的状态开启与否
 * @param config 用户传递进来的数据
 * @returns {*} 返回promise对象
 */
export function openOrClose(config) {
  // 保存用户的需要传递到后端的具体数据
  const data = config
  return user({
    method: 'post',
    url: '/openOrClose',
    data: data
  });
}

/**
 * 获取到用户的关键字信息发送请求API
 * @param config
 * @returns {AxiosPromise}
 */
export function getOneUserInfo(config) {
  // 保存用户的需要传递到后端的具体数据
  const data = config;
  return user({
    method: 'post',
    url: '/getOneUserInfo',
    data: data
  });
}

/**
 * 获取user的全部信息
 * @returns {AxiosPromise} promise对象
 */
export function getAllUserInfo(config) {
  // 保存用户的需要传递到后端的具体数据
  const data = config;
  return user({
    method: 'post',
    url: '/getAllUserInfo',
    data: data
  });
}
