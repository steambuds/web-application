import env from '../config/env';
import { UserData, UserRole } from '../utils/auth';

/**
 * API Response types
 */
interface SignupResponse {
  id: string;
  username: string;
  email: string;
}

interface LoginResponse {
  token: string;
  refresh_token: string;
}

interface RefreshResponse {
  token: string;
}

interface UserProfileResponse {
  id: string;
  username: string;
  email: string;
  mobile_number?: string;
  created_at: string;
  updated_at?: string;
  roles: UserRole[];
  profile?: {
    id: string;
    name?: string;
    steamer_id?: number;
    bio?: string;
    avatar_url?: string;
    [key: string]: any;
  };
}

/**
 * API Error response
 */
interface APIError {
  error: string;
  details?: string[];
}

/**
 * Custom error class for API errors
 */
export class AuthAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public details?: string[]
  ) {
    super(message);
    this.name = 'AuthAPIError';
  }
}

/**
 * Helper function to handle API responses
 */
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    let errorMessage = 'An error occurred';
    let details: string[] | undefined;

    try {
      const errorData: APIError = await response.json();
      errorMessage = errorData.error || errorMessage;
      details = errorData.details;
    } catch {
      // If response is not JSON, use status text
      errorMessage = response.statusText || errorMessage;
    }

    throw new AuthAPIError(errorMessage, response.status, details);
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
};

/**
 * User registration
 * @param username - User's username
 * @param email - User's email address
 * @param password - User's password
 */
export const signup = async (
  username: string,
  email: string,
  password: string
): Promise<SignupResponse> => {
  const response = await fetch(`${env.apiUrl}/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  return handleResponse<SignupResponse>(response);
};

/**
 * User login
 * @param email - User's email address
 * @param password - User's password
 */
export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch(`${env.apiUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return handleResponse<LoginResponse>(response);
};

/**
 * User logout
 * @param refreshToken - User's refresh token
 */
export const logout = async (refreshToken: string): Promise<void> => {
  const response = await fetch(`${env.apiUrl}/api/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  });

  return handleResponse<void>(response);
};

/**
 * Refresh access token
 * @param refreshToken - User's refresh token
 */
export const refreshAccessToken = async (
  refreshToken: string
): Promise<RefreshResponse> => {
  const response = await fetch(`${env.apiUrl}/api/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: refreshToken,
    }),
  });

  return handleResponse<RefreshResponse>(response);
};

/**
 * Get user profile by ID
 * @param userId - User's ID
 * @param accessToken - JWT access token
 */
export const getUserProfile = async (
  userId: string,
  accessToken: string
): Promise<UserProfileResponse> => {
  const response = await fetch(`${env.apiUrl}/api/profiles/${userId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<UserProfileResponse>(response);
};

/**
 * Get current user's full data (profile + roles)
 * This is a convenience method that gets user details from users endpoint
 * @param userId - User's ID
 * @param accessToken - JWT access token
 */
export const getCurrentUser = async (
  userId: string,
  accessToken: string
): Promise<UserData> => {
  const response = await fetch(`${env.apiUrl}/api/users/${userId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  const userData = await handleResponse<UserProfileResponse>(response);

  // Transform to UserData format
  return {
    id: userData.id,
    username: userData.username,
    email: userData.email,
    roles: userData.roles || [],
    profile: userData.profile,
  };
};
