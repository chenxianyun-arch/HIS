import forgetpwd from "./request";

/**
 * 注册检查
 * @param config
 * @returns {*}
 */
export default function forgetCheckInfo(config) {
  // 保存用户的需要传递到后端的具体数据
  const data = config;
  return forgetpwd({
    method: 'post',
    url: '/forgetpwd',
    data: data
  });
}
