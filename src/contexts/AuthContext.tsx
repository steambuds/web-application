import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';
import { storage } from '../utils/storage';
import type {
  AuthContextType,
  User,
  Profile,
  ProfileUpdate
} from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state from storage
  useEffect(() => {
    const initAuth = () => {
      try {
        const storedToken = storage.getAccessToken();
        const storedRefreshToken = storage.getRefreshToken();
        const storedUser = storage.getUser<User>();
        const storedProfile = storage.getProfile<Profile>();

        if (storedToken && storedUser) {
          setToken(storedToken);
          setRefreshToken(storedRefreshToken);
          setUser(storedUser);
          setProfile(storedProfile);
        }
      } catch (err) {
        console.error('Error initializing auth:', err);
        setError('Failed to initialize authentication');
        // Clear potentially corrupted data
        storage.clearAll();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const authResponse = await apiService.login({ email, password });

      // Store tokens
      storage.setAccessToken(authResponse.token);
      storage.setRefreshToken(authResponse.refresh_token);
      setToken(authResponse.token);
      setRefreshToken(authResponse.refresh_token);

      // Create a basic user object from the login response
      // Note: The backend doesn't return user info on login,
      // so we'll need to fetch or decode from token
      const userData: User = {
        id: '', // Will be populated when we fetch profile
        username: email.split('@')[0],
        email: email,
      };

      storage.setUser(userData);
      setUser(userData);

      // Try to fetch profile
      try {
        // We'll need to get profile after login
        // For now, just proceed to dashboard
      } catch (profileError) {
        console.warn('Could not fetch profile after login:', profileError);
      }

    } catch (error) {
      storage.clearAll();
      setToken(null);
      setRefreshToken(null);
      setUser(null);
      setProfile(null);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      await apiService.signup({ username, email, password });

      // After signup, automatically login
      await login(email, password);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [login]);

  const logout = useCallback(async () => {
    try {
      if (refreshToken) {
        await apiService.logout(refreshToken);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local state regardless of API call success
      storage.clearAll();
      setToken(null);
      setRefreshToken(null);
      setUser(null);
      setProfile(null);
      navigate('/login', { replace: true });
    }
  }, [refreshToken, navigate]);

  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await apiService.refreshToken({ refresh_token: refreshToken });
      storage.setAccessToken(response.token);
      setToken(response.token);
      return response.token;
    } catch (error) {
      // If refresh fails, logout user
      await logout();
      throw error;
    }
  }, [refreshToken, logout]);

  const fetchProfile = useCallback(async () => {
    if (!token) {
      throw new Error('No authentication token');
    }

    try {
      // Since we need profile ID to fetch, and we don't have it after login,
      // we'll need to either:
      // 1. Store profile ID in user object
      // 2. Have an endpoint that returns current user's profile
      // For now, we'll handle this in the profile page
      console.warn('Profile fetch needs profile ID - implement as needed');
    } catch (error) {
      throw error;
    }
  }, [token]);

  const updateProfile = useCallback(async (profileId: string, data: ProfileUpdate) => {
    if (!token) {
      throw new Error('No authentication token');
    }

    try {
      const updatedProfile = await apiService.updateProfile(profileId, data, token);
      storage.setProfile(updatedProfile);
      setProfile(updatedProfile);
      return updatedProfile;
    } catch (error) {
      throw error;
    }
  }, [token]);

  const value: AuthContextType = {
    user,
    profile,
    token,
    refreshToken,
    isAuthenticated: !!token && !!user,
    isLoading,
    login,
    signup,
    logout,
    refreshAccessToken,
    fetchProfile,
    updateProfile,
  };

  // Show loading state while initializing
  if (isLoading) {
    return (
      <AuthContext.Provider value={value}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-electric-blue-500 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-700 font-medium">Loading STEAM Buds...</p>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }

  // Show error state if initialization failed
  if (error) {
    return (
      <AuthContext.Provider value={value}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
          <div className="max-w-md p-6 bg-white rounded-xl shadow-lg text-center">
            <p className="text-hot-pink-600 font-medium mb-4">{error}</p>
            <button
              onClick={() => {
                storage.clearAll();
                window.location.reload();
              }}
              className="btn-primary"
            >
              Reload Application
            </button>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
