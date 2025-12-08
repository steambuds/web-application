/**
 * Local storage keys
 */
const KEYS = {
  ACCESS_TOKEN: 'steam_buds_access_token',
  REFRESH_TOKEN: 'steam_buds_refresh_token',
  USER: 'steam_buds_user',
  PROFILE: 'steam_buds_profile',
} as const;

/**
 * Storage utility for managing authentication tokens and user data
 */
export const storage = {
  // Access Token
  setAccessToken(token: string): void {
    localStorage.setItem(KEYS.ACCESS_TOKEN, token);
  },

  getAccessToken(): string | null {
    return localStorage.getItem(KEYS.ACCESS_TOKEN);
  },

  removeAccessToken(): void {
    localStorage.removeItem(KEYS.ACCESS_TOKEN);
  },

  // Refresh Token
  setRefreshToken(token: string): void {
    localStorage.setItem(KEYS.REFRESH_TOKEN, token);
  },

  getRefreshToken(): string | null {
    return localStorage.getItem(KEYS.REFRESH_TOKEN);
  },

  removeRefreshToken(): void {
    localStorage.removeItem(KEYS.REFRESH_TOKEN);
  },

  // User
  setUser(user: object): void {
    localStorage.setItem(KEYS.USER, JSON.stringify(user));
  },

  getUser<T>(): T | null {
    const user = localStorage.getItem(KEYS.USER);
    if (!user) return null;
    try {
      return JSON.parse(user) as T;
    } catch {
      return null;
    }
  },

  removeUser(): void {
    localStorage.removeItem(KEYS.USER);
  },

  // Profile
  setProfile(profile: object): void {
    localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
  },

  getProfile<T>(): T | null {
    const profile = localStorage.getItem(KEYS.PROFILE);
    if (!profile) return null;
    try {
      return JSON.parse(profile) as T;
    } catch {
      return null;
    }
  },

  removeProfile(): void {
    localStorage.removeItem(KEYS.PROFILE);
  },

  // Clear all auth data
  clearAll(): void {
    this.removeAccessToken();
    this.removeRefreshToken();
    this.removeUser();
    this.removeProfile();
  },
};
