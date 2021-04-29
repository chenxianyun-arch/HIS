export default function showLoading() {
  const loading = this.$loading({
    lock: true,
    text: '加载中.....',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  setTimeout(() => {
    loading.close();
  }, 2000);
}