const AUTH_KEY = "routerLessonUser";

export function getUser() {
  return localStorage.getItem(AUTH_KEY);
}

export async function login(username) {
  await new Promise(resolve => setTimeout(resolve, 3000));
  localStorage.setItem(AUTH_KEY, username);
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}
