import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as authAPI from '../api/auth';
import {
  saveTokens,
  getAccessToken,
  getRefreshToken,
  clearTokens,
  getUserIdFromToken,
  saveUserData,
  getUserData,
  isTokenExpired,
  getRoleDefaultRoute,
  UserData,
} from '../utils/auth';

/**
 * Authentication context interface
 */
interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
  clearError: () => void;
}

/**
 * Create the authentication context
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider props
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authentication Provider Component
 * Manages global authentication state and provides auth methods to the app
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Check if user is authenticated
   */
  const isAuthenticated = !!user;

  /**
   * Load user data from localStorage on mount
   */
  useEffect(() => {
    const loadUserFromStorage = async () => {
      setIsLoading(true);
      try {
        const accessToken = getAccessToken();
        const storedUser = getUserData();

        if (accessToken && storedUser) {
          // Check if token is expired
          if (isTokenExpired(accessToken)) {
            // Try to refresh token
            const refreshTokenValue = getRefreshToken();
            if (refreshTokenValue) {
              try {
                const { token: newAccessToken } = await authAPI.refreshAccessToken(refreshTokenValue);
                saveTokens(newAccessToken, refreshTokenValue);

                // Fetch fresh user data with new token
                const userId = getUserIdFromToken(newAccessToken);
                if (userId) {
                  const userData = await authAPI.getCurrentUser(userId, newAccessToken);
                  setUser(userData);
                  saveUserData(userData);
                } else {
                  // Invalid token, clear auth
                  clearTokens();
                  setUser(null);
                }
              } catch (refreshError) {
                // Refresh failed, clear auth
                console.error('Token refresh failed:', refreshError);
                clearTokens();
                setUser(null);
              }
            } else {
              // No refresh token, clear auth
              clearTokens();
              setUser(null);
            }
          } else {
            // Token is still valid, use stored user data
            setUser(storedUser);
          }
        }
      } catch (error) {
        console.error('Error loading user from storage:', error);
        clearTokens();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserFromStorage();
  }, []);

  /**
   * Login function
   */
  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // Call login API
      const { token, refresh_token } = await authAPI.login(email, password);

      // Save tokens
      saveTokens(token, refresh_token);

      // Extract user ID from token
      const userId = getUserIdFromToken(token);
      if (!userId) {
        throw new Error('Invalid token: unable to extract user ID');
      }

      // Fetch user profile with roles
      const userData = await authAPI.getCurrentUser(userId, token);

      // Save user data
      setUser(userData);
      saveUserData(userData);
    } catch (err) {
      const errorMessage = err instanceof authAPI.AuthAPIError
        ? err.message
        : 'Login failed. Please try again.';
      setError(errorMessage);
      throw err; // Re-throw to allow component to handle
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Signup function
   */
  const signup = async (username: string, email: string, password: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // Call signup API
      await authAPI.signup(username, email, password);
      // Note: Don't auto-login after signup, redirect to login page instead
    } catch (err) {
      const errorMessage = err instanceof authAPI.AuthAPIError
        ? err.message
        : 'Signup failed. Please try again.';
      setError(errorMessage);
      throw err; // Re-throw to allow component to handle
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout function
   */
  const logout = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const refreshTokenValue = getRefreshToken();
      if (refreshTokenValue) {
        // Call logout API to invalidate refresh token
        await authAPI.logout(refreshTokenValue);
      }
    } catch (err) {
      // Log error but still clear local state
      console.error('Logout API error:', err);
    } finally {
      // Always clear local auth state
      clearTokens();
      setUser(null);
      setIsLoading(false);
    }
  };

  /**
   * Refresh access token
   */
  const refreshToken = async (): Promise<void> => {
    const refreshTokenValue = getRefreshToken();
    if (!refreshTokenValue) {
      throw new Error('No refresh token available');
    }

    try {
      const { token: newAccessToken } = await authAPI.refreshAccessToken(refreshTokenValue);
      saveTokens(newAccessToken, refreshTokenValue);

      // Optionally refresh user data
      const userId = getUserIdFromToken(newAccessToken);
      if (userId) {
        const userData = await authAPI.getCurrentUser(userId, newAccessToken);
        setUser(userData);
        saveUserData(userData);
      }
    } catch (err) {
      // If refresh fails, logout user
      console.error('Token refresh failed:', err);
      await logout();
      throw err;
    }
  };

  /**
   * Clear error message
   */
  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    signup,
    logout,
    refreshToken,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to use the auth context
 * @throws Error if used outside of AuthProvider
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * Export helper to get role-based default route
 */
export { getRoleDefaultRoute };
