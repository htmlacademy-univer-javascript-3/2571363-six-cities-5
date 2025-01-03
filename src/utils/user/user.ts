import { TOKEN_KEY } from '@services/constants';

export function getToken(): string {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ?? '';
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function validatePassword(password: string): boolean {
  const hasLetter = new RegExp(/[a-zA-Z]+/g);
  const hasDigit = new RegExp(/[0-9]+/g);

  if (password.match(hasLetter) && password.match(hasDigit)) {
    return true;
  }
  return false;
}
