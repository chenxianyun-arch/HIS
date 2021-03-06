import medecine from "./request";


/**
 * 删除批量数据
 * @param config 返回配置参数
 * @returns {AxiosPromise} 返回Promise对象
 */
export  function deleteAllDoctor(config) {
  // 传递的字符串数组
  const data = {
    config: config
  };
  return medecine({
    method: 'post',
    url: '/deleteAllMedecine',
    data: data
  })
}

/**
 * 删除单条数据
 * @param config
 * @returns {*}
 */
export function deletSingalDoctor(config) {
  // 传递的id
  const data = {
    deleteId: config.deleteId
  }
  return medecine({
    method: 'post',
    url: '/deletSingalMedecine',
    data: data
  })
}


/**
 * 获取到用户的关键字信息发送请求API
 * @param config
 * @returns {AxiosPromise}
 */
export function getOneDoctorInfo(config) {
  // 保存用户的需要传递到后端的具体数据
  const data = config;
  return medecine({
    method: 'post',
    url: '/getOneMedecineInfo',
    data: data
  });
}

/**
 * 获取user的全部信息
 * @returns {AxiosPromise} promise对象
 */
export function getAllDoctorInfo(config) {
  // 保存用户的需要传递到后端的具体数据
  const data = config;
  return medecine({
    method: 'post',
    url: '/getAllMedecineInfo',
    data: data
  });
}
