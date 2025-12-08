# Troubleshooting Guide - Profile Creation Issue

## Issue: Profile Creation Button Not Responding

### Step-by-Step Debugging

#### 1. Check Browser Console
Open your browser's Developer Tools (F12 or Cmd+Option+I on Mac) and:

1. Navigate to the **Console** tab
2. Clear any existing logs
3. Go to `/profile` page
4. Fill out the profile form
5. Click "Create Profile"
6. Check the console for logs

**Expected logs:**
```
=== handleCreateProfile called ===
Token exists: true
User: {username: "...", email: "..."}
Creating profile with token: eyJhbGciOiJIUzI1NiJ9...
Profile data to send: {user_type: "student", ...}
```

**If you don't see the first log** (`=== handleCreateProfile called ===`):
- The button click is not triggering the function
- There might be a JavaScript error preventing the component from rendering

#### 2. Check for JavaScript Errors

Look for any **RED errors** in the console before clicking:
- `TypeError: ...`
- `ReferenceError: ...`
- `Cannot read property '...' of undefined`

**Common issues:**
- Missing imports
- Component rendering errors
- Context provider issues

#### 3. Verify Authentication State

In the browser console, type:
```javascript
localStorage.getItem('steam_buds_access_token')
```

**Expected:** Should return a long string (JWT token)

**If null:**
- You're not logged in
- Go to `/login` and log in first
- Then navigate to `/profile`

#### 4. Check Network Requests

1. Open Developer Tools
2. Go to **Network** tab
3. Click "Create Profile" button
4. Look for a request to `/api/profiles`

**Expected:**
- Request Method: POST
- Request URL: `http://localhost:3000/api/profiles`
- Status: 200 or 201 (success)

**Common issues:**
- **No network request**: Button not calling API
- **Status 401**: Token expired or invalid
- **Status 400**: Validation error in data
- **Status 500**: Backend error
- **Failed to fetch**: Backend not running

#### 5. Verify Backend is Running

Open a terminal and check if your backend is running:
```bash
curl http://localhost:3000/api/hello
```

**Expected:** Some response from the API

**If "Connection refused":**
- Backend is not running
- Start your backend server first
- Check backend is running on port 3000

#### 6. Test with cURL

Try creating a profile directly with cURL:

```bash
# First, get your token from localStorage (see step 3)
TOKEN="your_token_here"

# Then make the API call
curl -X POST http://localhost:3000/api/profiles \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "user_type": "student",
    "bio": "Test bio",
    "phone": "+919876543210",
    "grade_level": "10"
  }'
```

**Expected:** JSON response with the created profile

**If this works:**
- Backend is fine
- Problem is in the frontend

**If this fails:**
- Check the error message
- Verify token is valid
- Check backend logs

## Quick Fixes

### Fix 1: Clear Cache and Refresh

Sometimes browser cache can cause issues:

```bash
# In browser console
localStorage.clear()
```

Then:
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Log in again
3. Try creating profile

### Fix 2: Check .env File

Ensure you have a `.env` file with:
```env
VITE_API_URL=http://localhost:3000/api
```

If you changed it, restart the dev server:
```bash
npm run dev
```

### Fix 3: Rebuild the Project

```bash
# Stop the dev server (Ctrl+C)
# Clean and rebuild
rm -rf node_modules dist
npm install
npm run dev
```

## Common Error Messages

### "No authentication token found"
**Cause:** You're not logged in or token was cleared

**Solution:**
1. Go to `/login`
2. Log in with valid credentials
3. Navigate back to `/profile`

### "Network error: Unable to connect"
**Cause:** Backend is not running or wrong URL

**Solution:**
1. Start your backend server
2. Verify it's running on `http://localhost:3000`
3. Check `.env` file has correct `VITE_API_URL`

### "Unauthorized" or "401"
**Cause:** Token expired or invalid

**Solution:**
1. Logout and login again
2. Token might have expired (24-hour lifetime)

### "Validation error" or "400"
**Cause:** Missing required fields or invalid data format

**Solution:**
1. Check all required fields are filled
2. Verify date format is YYYY-MM-DD
3. Check phone number format

## Advanced Debugging

### Enable Verbose Logging

The Profile page now has detailed console logging. Look for:

1. `=== handleCreateProfile called ===` - Function is triggered
2. `Token exists: true` - Token is available
3. `Creating profile with token: ...` - API call starting
4. `Profile data to send: {...}` - Data being sent
5. `Profile created successfully: {...}` - Success response

OR

6. `Error creating profile: ...` - Error details

### Check API Service

Test if the API service is working:

```javascript
// In browser console
import { apiService } from './services/api';

// Get your token
const token = localStorage.getItem('steam_buds_access_token');

// Try to create a profile
apiService.createProfile({
  user_type: 'student',
  bio: 'Test'
}, token).then(console.log).catch(console.error);
```

### Inspect React DevTools

Install React DevTools browser extension:

1. Open React DevTools
2. Find the `Profile` component
3. Check the props and state:
   - `isAuthenticated`: should be `true`
   - `token`: should have a value
   - `user`: should have username and email
   - `isSaving`: should be `false` initially

## Still Not Working?

If you've tried everything above and it's still not working:

### Collect Debug Information

1. **Browser Console Output** - Copy all logs
2. **Network Tab** - Check if POST request is made
3. **Backend Logs** - Check backend console for errors
4. **localStorage Content**:
   ```javascript
   console.log('Token:', localStorage.getItem('steam_buds_access_token'));
   console.log('User:', localStorage.getItem('steam_buds_user'));
   ```

### Minimal Test Case

Create a simple test button to isolate the issue:

Add this to the Profile.tsx component temporarily:

```tsx
<button
  onClick={() => {
    console.log('Test button clicked!');
    alert('Button works!');
  }}
  className="btn-secondary"
>
  Test Button
</button>
```

If this works but "Create Profile" doesn't, the issue is in the `handleCreateProfile` function.

## Contact Information

If you need help:
1. Share the browser console output
2. Share any error messages from backend
3. Confirm backend is running
4. Share the network request details (from Network tab)

## Checklist

Before reporting an issue, verify:

- [ ] Backend server is running on port 3000
- [ ] Logged in successfully (token in localStorage)
- [ ] On the `/profile` page
- [ ] Browser console is open (no red errors)
- [ ] Network tab is recording
- [ ] Filled out all required fields in form
- [ ] `.env` file exists with correct API URL
- [ ] Dev server running (http://localhost:3001)
