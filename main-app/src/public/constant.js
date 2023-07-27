const map = {
  "//localhost:9000/": "//quicj-start-wujie/main-app/",
};

export const hostMap = (host) => {
  if (process.env.NODE_ENV === "production") return map[host];
  return host;
}

export const isProduction = process.env.NODE_ENV === "production";
/**
 * 大部分业务无需设置 attrs
 * 此处修正 iframe 的 src，是防止github pages csp报错
 * 因为默认是只有 host+port，没有携带路径
 */
export const attrs = isProduction ? { src: hostMap("//localhost:9000/") } : {};

export const props = {
  jump: (name) => {
    router.push({ name });
  },
};

// 携带登录态credentials必须为include
export const credentialsFetch = (url, options) => {
  return window.fetch(url, { ...options, credentials: "omit" });
}

export const degrade = window.localStorage.getItem("degrade") === "true" || !window.Proxy || !window.CustomElementRegistry;

export const lifecycles = {
  beforeLoad: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`),
  beforeMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`),
  afterMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`),
  beforeUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`),
  afterUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`),
  activated: (appWindow) => console.log(`${appWindow.__WUJIE.id} activated 生命周期`),
  deactivated: (appWindow) => console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`),
  loadError: (url, e) => console.log(`${url} 加载失败`, e),
};