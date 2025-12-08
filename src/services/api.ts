import env from '../config/env';
import type {
  User,
  UserRegistration,
  UserLogin,
  AuthResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  Profile,
  ProfileCreate,
  ProfileUpdate,
  APIError,
} from '../types';

class APIService {
  private baseURL: string;

  constructor() {
    this.baseURL = env.apiUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      // Handle 204 No Content
      if (response.status === 204) {
        return {} as T;
      }

      const data = await response.json();

      if (!response.ok) {
        throw {
          error: data.error || 'Request failed',
          message: data.message || response.statusText,
          status: response.status,
        } as APIError & { status: number };
      }

      return data as T;
    } catch (error) {
      if (error instanceof TypeError) {
        throw {
          error: 'Network error',
          message: 'Unable to connect to the server. Please check your connection.',
        } as APIError;
      }
      throw error;
    }
  }

  private getAuthHeaders(token: string): HeadersInit {
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  // Authentication endpoints
  async signup(data: UserRegistration): Promise<User> {
    return this.request<User>('/user', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(data: UserLogin): Promise<AuthResponse> {
    return this.request<AuthResponse>('/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async logout(refreshToken: string): Promise<void> {
    return this.request<void>('/logout', {
      method: 'DELETE',
      body: JSON.stringify({ refresh_token: refreshToken }),
    });
  }

  async refreshToken(data: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    return this.request<RefreshTokenResponse>('/refresh', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Profile endpoints
  async getAllProfiles(token: string): Promise<Profile[]> {
    return this.request<Profile[]>('/profiles', {
      method: 'GET',
      headers: this.getAuthHeaders(token),
    });
  }

  async getProfile(profileId: string, token: string): Promise<Profile> {
    return this.request<Profile>(`/profiles/${profileId}`, {
      method: 'GET',
      headers: this.getAuthHeaders(token),
    });
  }

  async createProfile(data: ProfileCreate, token: string): Promise<Profile> {
    return this.request<Profile>('/profiles', {
      method: 'POST',
      headers: this.getAuthHeaders(token),
      body: JSON.stringify(data),
    });
  }

  async updateProfile(
    profileId: string,
    data: ProfileUpdate,
    token: string
  ): Promise<Profile> {
    return this.request<Profile>(`/profiles/${profileId}`, {
      method: 'PUT',
      headers: this.getAuthHeaders(token),
      body: JSON.stringify(data),
    });
  }

  async deleteProfile(profileId: string, token: string): Promise<void> {
    return this.request<void>(`/profiles/${profileId}`, {
      method: 'DELETE',
      headers: this.getAuthHeaders(token),
    });
  }
}

export const apiService = new APIService();
