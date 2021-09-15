import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';

export function getCookie(name) {
  return Cookies.get(name);
}
/*
* expires：有效期（天）
* path：在这个地址的页面可用多少天
* */
export function setCookie(name, value, expires = 1) {
  Cookies.set(name, value,
    // {
    //   expires,
    //   path: process.env.VUE_APP_BASE_URL
    // }
  );
}
export function removeCookie(name) {
  return Cookies.remove(name);
}
