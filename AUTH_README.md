# Authentication Implementation Guide

This document describes the authentication system integrated into the STEAM Buds web application.

## Overview

The application now includes a complete authentication system with:
- User registration (signup)
- User login with JWT tokens
- Token refresh mechanism
- User profile management (CRUD)
- Protected routes
- Persistent sessions via localStorage

## Architecture

### Components Created

#### 1. **Type Definitions** (`src/types/index.ts`)
- Complete TypeScript interfaces for User, Profile, Auth responses
- Type-safe API contracts
- Form validation types

#### 2. **API Service Layer** (`src/services/api.ts`)
- Centralized API client
- All authentication endpoints
- All profile endpoints
- Error handling and response parsing

#### 3. **Storage Utility** (`src/utils/storage.ts`)
- localStorage wrapper for tokens and user data
- Type-safe storage operations
- Easy to migrate to other storage solutions

#### 4. **Authentication Context** (`src/contexts/AuthContext.tsx`)
- Global auth state management
- Login, signup, logout functions
- Token refresh logic
- Profile management hooks

#### 5. **Reusable UI Components**
- `Button.tsx` - with loading states
- `Input.tsx` - with validation and icons
- `Loading.tsx` - loading indicators
- `Alert.tsx` - success/error messages

#### 6. **Updated Pages**
- **Login** - Real authentication with backend
- **Signup** - User registration with validation
- **Profile** - Complete profile CRUD interface
- **Header** - Shows user info, profile link, logout button

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Update the `VITE_API_URL` to point to your backend:

```env
VITE_API_URL=http://localhost:3000/api
```

### 2. Install Dependencies

All required dependencies are already in package.json. Just run:

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at http://localhost:3000

## Usage

### For Users

1. **Sign Up**: Navigate to `/signup` to create an account
   - Requires: username, email, password (min 8 chars, 1 uppercase, 1 number)

2. **Login**: Navigate to `/login` to sign in
   - Requires: email, password
   - Automatically stores tokens and keeps you logged in

3. **View Profile**: Click "Profile" in the header when logged in
   - View your account information
   - Create/update your profile with additional details

4. **Logout**: Click "Logout" in the header
   - Clears all tokens and redirects to login

### For Developers

#### Using Authentication in Components

```tsx
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return <div>Welcome, {user?.username}!</div>;
}
```

#### Making Authenticated API Calls

```tsx
import { apiService } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { token } = useAuth();

  const fetchData = async () => {
    try {
      const profile = await apiService.getProfile('profile-id', token!);
      console.log(profile);
    } catch (error) {
      console.error('API error:', error);
    }
  };

  // ...
}
```

#### Creating Protected Routes

To create a protected route that requires authentication:

```tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// In App.tsx:
<Route
  path="/protected"
  element={
    <ProtectedRoute>
      <ProtectedPage />
    </ProtectedRoute>
  }
/>
```

## API Endpoints

The application integrates with these backend endpoints:

### Authentication
- `POST /api/user` - Register new user
- `POST /api/login` - Login user (returns tokens)
- `POST /api/refresh` - Refresh access token
- `DELETE /api/logout` - Logout user

### Profile
- `GET /api/profiles` - Get all profiles (admin only)
- `GET /api/profiles/:id` - Get single profile
- `POST /api/profiles` - Create profile
- `PUT /api/profiles/:id` - Update profile
- `DELETE /api/profiles/:id` - Delete profile

## Token Management

### Access Token
- Short-lived (24 hours)
- Used for authenticated API requests
- Stored in localStorage
- Sent in `Authorization: Bearer <token>` header

### Refresh Token
- Long-lived (30 days)
- Used to obtain new access tokens
- Stored in localStorage
- Automatically used when access token expires

### Token Flow

1. User logs in → receives access_token & refresh_token
2. Access token stored and used for API calls
3. When access token expires → automatically refreshes using refresh_token
4. If refresh fails → user logged out and redirected to login

## Security Considerations

### Current Implementation
- Tokens stored in localStorage (XSS vulnerable)
- HTTPS recommended for production
- Password validation on frontend
- Token expiry handled automatically

### Recommended Improvements
1. **HTTP-Only Cookies**: Move token storage from localStorage to HTTP-only cookies
2. **CSRF Protection**: Implement CSRF tokens for state-changing operations
3. **Rate Limiting**: Add rate limiting on login attempts
4. **2FA**: Consider implementing two-factor authentication
5. **Security Headers**: Set proper security headers (CSP, X-Frame-Options, etc.)

## Profile System

### User Types
- **Student**: grade_level, parent_contact, enrollment_date
- **Teacher**: subjects_taught, years_experience, qualification
- **School**: (organization-specific fields)
- **Guardian**: (parent/guardian-specific fields)

### Profile Creation Flow

1. User signs up → creates user account
2. User logs in → redirected to home
3. User visits `/profile` → option to create profile
4. User fills in profile details based on user_type
5. Profile saved → can be updated anytime

## Known Limitations

1. **Profile ID Access**: After login, we don't have the user's profile_id
   - Solution: Backend should return profile_id in login response OR provide `/api/profiles/me` endpoint

2. **JWT Decoding**: Currently not decoding JWT to extract user info
   - Solution: Add jwt-decode library or extract from backend response

3. **Role-Based Access**: No role-based UI rendering yet
   - Solution: Add role checks in components based on user.role

## Troubleshooting

### "Failed to login" Error
- Check backend is running
- Verify VITE_API_URL is correct
- Check browser console for detailed errors
- Verify credentials are correct

### "Token expired" Issues
- Refresh token might be expired (30 days)
- Clear localStorage and login again
- Check backend refresh endpoint is working

### Profile Not Loading
- Backend needs to implement `/api/profiles/me` endpoint
- Or modify login response to include profile_id
- Check authentication token is valid

## Testing

### Manual Testing Checklist

- [ ] User can sign up with valid credentials
- [ ] User cannot sign up with invalid email
- [ ] User cannot sign up with weak password
- [ ] User can login with correct credentials
- [ ] User cannot login with wrong credentials
- [ ] User stays logged in after page refresh
- [ ] User can access profile page when authenticated
- [ ] User is redirected to login when accessing profile while logged out
- [ ] User can create profile
- [ ] User can update profile
- [ ] User can logout successfully
- [ ] Tokens are cleared on logout
- [ ] Header shows correct user state (logged in/out)

## Future Enhancements

1. **Password Reset**: Email-based password recovery
2. **Email Verification**: Verify email on signup
3. **Social Login**: Google, GitHub OAuth integration
4. **Remember Me**: Longer session duration option
5. **Session Management**: View active sessions, logout from all devices
6. **Profile Photos**: Upload and manage profile pictures
7. **Account Settings**: Change password, delete account
8. **Activity Log**: Track user activity and login history

## Support

For issues or questions:
- Check the main `Readme.md` for setup instructions
- Review `routes_documentation.md` for API details
- Check `CLAUDE.md` for project structure

## Version History

- **v1.0** (2025-11-10): Initial authentication implementation
  - JWT-based auth
  - Profile management
  - UI components
  - Token refresh mechanism
