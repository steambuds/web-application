import { jwtDecode } from 'jwt-decode';

/**
 * Token storage keys
 */
const ACCESS_TOKEN_KEY = 'steam_buds_access_token';
const REFRESH_TOKEN_KEY = 'steam_buds_refresh_token';
const USER_DATA_KEY = 'steam_buds_user_data';

/**
 * User roles from backend
 */
export type UserRole = 'admin' | 'system_user' | 'instructor' | 'facilitator' | 'student' | 'guardian';

/**
 * User data structure
 */
export interface UserData {
  id: string;
  username: string;
  email: string;
  roles: UserRole[];
  profile?: {
    name?: string;
    [key: string]: any;
  };
}

/**
 * JWT token payload structure
 */
interface JWTPayload {
  user_id: string; // user ID
  exp: number; // expiration timestamp
  iat?: number; // issued at timestamp
  [key: string]: any;
}

/**
 * Save authentication tokens to localStorage
 */
export const saveTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
};

/**
 * Get access token from localStorage
 */
export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

/**
 * Get refresh token from localStorage
 */
export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

/**
 * Clear all authentication tokens from localStorage
 */
export const clearTokens = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_DATA_KEY);
};

/**
 * Check if a JWT token is expired
 */
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JWTPayload>(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime;
  } catch (error) {
    // If token is invalid or can't be decoded, consider it expired
    return true;
  }
};

/**
 * Get user ID from JWT token
 */
export const getUserIdFromToken = (token: string): string | null => {
  try {
    const decoded = jwtDecode<JWTPayload>(token);
    return decoded.user_id || null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

/**
 * Save user data to localStorage
 */
export const saveUserData = (userData: UserData): void => {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
};

/**
 * Get user data from localStorage
 */
export const getUserData = (): UserData | null => {
  const userDataStr = localStorage.getItem(USER_DATA_KEY);
  if (!userDataStr) return null;

  try {
    return JSON.parse(userDataStr) as UserData;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

/**
 * Get the default route for a user based on their roles
 * Priority order:
 * 1. student -> /student
 * 2. instructor or facilitator -> /teacher
 * 3. admin -> /school
 * 4. default/guardian -> /guardian
 */
export const getRoleDefaultRoute = (roles: UserRole[]): string => {
  if (!roles || roles.length === 0) {
    return '/guardian';
  }

  // Check for student role
  if (roles.includes('student')) {
    return '/student';
  }

  // Check for instructor or facilitator roles
  if (roles.includes('instructor') || roles.includes('facilitator')) {
    return '/teacher';
  }

  // Check for admin role
  if (roles.includes('admin')) {
    return '/school';
  }

  // Default to guardian page
  return '/guardian';
};

/**
 * Check if user has authentication tokens
 */
export const hasAuthTokens = (): boolean => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  return !!(accessToken && refreshToken);
};

/**
 * Check if current session is valid (has tokens and they're not expired)
 */
export const isSessionValid = (): boolean => {
  const accessToken = getAccessToken();
  if (!accessToken) return false;

  return !isTokenExpired(accessToken);
};
