// _worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // 自定义路由规则（如果需要）
    return env.ASSETS.fetch(request);
  }
};
