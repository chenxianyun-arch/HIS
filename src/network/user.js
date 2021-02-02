import user from "./request";

/**
 * 删除批量数据
 * @param config 返回配置参数
 * @returns {AxiosPromise} 返回Promise对象
 */
export  function deleteAllUser(config) {
  // 传递的字符串数组
  const data = {
    deleteArray: config.deleteArray
  }
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

