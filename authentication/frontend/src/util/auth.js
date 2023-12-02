import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpiration = localStorage.getItem('expiration');
  const expiration = new Date(storedExpiration);
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();

  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  // 토큰이 없으면 아무것도 반환하지 않음 *중요
  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth');
  }
  return null;
}
