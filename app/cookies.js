function setCookie(key, value, expiry) {
  const expires = new Date();
  expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
  document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
}

function getCookie(key) {
  const keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
  const keyValue = getCookie(key);
  setCookie(key, keyValue, "-1");
}
