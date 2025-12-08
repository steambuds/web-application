// User types
export interface User {
  id: string;
  username: string;
  email: string;
  role?: 'admin' | 'manager' | 'server_machine';
  created_at?: string;
  updated_at?: string;
}

export interface UserRegistration {
  username: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

// Authentication types
export interface AuthResponse {
  token: string;
  refresh_token: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface RefreshTokenResponse {
  token: string;
}

// Profile types
export type UserType = 'student' | 'teacher' | 'school' | 'guardian';

export interface Profile {
  id: string;
  user_id: string;
  user_type: UserType;
  bio?: string;
  avatar_url?: string;
  phone?: string;
  address?: string;
  date_of_birth?: string;
  // Teacher specific fields
  subjects_taught?: string;
  years_experience?: number;
  qualification?: string;
  // Student specific fields
  grade_level?: string;
  enrollment_date?: string;
  parent_contact?: string;
  created_at: string;
  updated_at: string;
}

export interface ProfileCreate {
  user_type: UserType;
  bio?: string;
  avatar_url?: string;
  phone?: string;
  address?: string;
  date_of_birth?: string;
  subjects_taught?: string;
  years_experience?: number;
  qualification?: string;
  grade_level?: string;
  enrollment_date?: string;
  parent_contact?: string;
}

export interface ProfileUpdate {
  bio?: string;
  avatar_url?: string;
  phone?: string;
  address?: string;
  date_of_birth?: string;
  subjects_taught?: string;
  years_experience?: number;
  qualification?: string;
  grade_level?: string;
  enrollment_date?: string;
  parent_contact?: string;
}

// API Error types
export interface APIError {
  error: string;
  message?: string;
}

// Auth context types
export interface AuthState {
  user: User | null;
  profile: Profile | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<string>;
  fetchProfile: () => Promise<void>;
  updateProfile: (profileId: string, data: ProfileUpdate) => Promise<Profile>;
}
