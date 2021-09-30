import Cookies from "js-cookie";

export function getCookie(name) {
  return Cookies.get(name);
}

export function setCookie(name, value, hours, domain, secure) {
  let cdata = name + "=" + value;
  if (hours) {
    let d = new Date();
    d.setHours(d.getHours() + hours);
    cdata += "; expires=" + d.toGMTString();
  }
  cdata += "; path=" + process.env.VUE_APP_BASE_URL;
  cdata += domain ? "; domain=" + domain : "";
  cdata += secure ? "; secure=" + secure : "";
  document.cookie = cdata;
}

export function removeCookie(name) {
  return Cookies.remove(name);
}
