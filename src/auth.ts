export type UserRole = 'student' | 'teacher' | 'school' | 'guardian';
export interface UserAuth {
  email: string;
  role: UserRole;
  name?: string;
}

const AUTH_KEY = 'auth';

export function setAuth(auth: UserAuth) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

export function getAuth(): UserAuth | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? (JSON.parse(raw) as UserAuth) : null;
  } catch {
    return null;
  }
}

export function clearAuth() {
  localStorage.removeItem(AUTH_KEY);
}
