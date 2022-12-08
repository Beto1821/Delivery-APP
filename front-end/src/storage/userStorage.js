export function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function getToken() {
  return getUser()?.token;
}
