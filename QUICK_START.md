# Quick Start Guide

## ✅ Current Status

- ✅ Home page is fixed and loading
- ✅ Dev server running on http://localhost:3001/
- ✅ Build successful
- ✅ Authentication system integrated

## 🚀 Testing the Application

### Step 1: Access the Application

Open your browser and navigate to:
```
http://localhost:3001/
```

You should see:
- STEAM Buds logo
- "Inspire. Ignite. Create. Master." heading
- Login and Public Resources buttons
- Four role selection cards

### Step 2: Test Authentication Flow

#### A. Sign Up (Create Account)
1. Click "Sign up" in the header OR go to http://localhost:3001/signup
2. Fill in the form:
   - **Username**: Choose a username (e.g., "testuser")
   - **Email**: Your email (e.g., "test@example.com")
   - **Password**: Must be at least 8 characters, 1 uppercase, 1 number
     - ✅ Example: "Password123"
     - ❌ Bad: "password" (no uppercase or number)
3. Click "Create account"
4. If successful, you'll be automatically logged in and redirected to home

#### B. Login (If Already Have Account)
1. Click "Login" in the header OR go to http://localhost:3001/login
2. Enter your credentials:
   - Email
   - Password
3. Click "Login"
4. If successful, redirected to home and you'll see your username in the header

### Step 3: Create Your Profile

**IMPORTANT: Backend must be running for this step**

1. After logging in, click "Profile" in the header OR go to http://localhost:3001/profile
2. You should see "Complete Your Profile" message
3. Fill out the form:
   - **User Type**: Select (Student, Teacher, School, Guardian)
   - **Phone**: Optional (e.g., "+919876543210")
   - **Date of Birth**: Optional (YYYY-MM-DD format)
   - **Address**: Optional
   - **Bio**: Optional (tell us about yourself)

   **If Student:**
   - Grade Level: e.g., "10"
   - Parent Contact: e.g., "parent@example.com"

   **If Teacher:**
   - Subjects Taught: e.g., "Physics, Mathematics"
   - Years of Experience: e.g., "5"
   - Qualification: e.g., "M.Sc, B.Ed"

4. Click "Create Profile"

#### Expected Behavior:
- Button shows loading state ("Creating account...")
- Success message appears: "Profile created successfully!"
- Profile information is displayed

#### If It Doesn't Work:
1. **Open browser console** (F12 or Cmd+Option+I)
2. Look for console logs starting with:
   - `=== handleCreateProfile called ===`
   - `Token exists: true`
   - `Creating profile with token: ...`
3. Check for any error messages

**Common Issues:**
- ❌ "No authentication token found" → You need to login first
- ❌ "Network error" → Backend is not running (see Step 4)
- ❌ "Unauthorized" → Token expired, logout and login again

### Step 4: Start Backend Server (Required for Profile Creation)

**In a separate terminal**, navigate to your backend directory and start the server:

```bash
# Navigate to backend directory
cd ../backend  # or wherever your backend is

# Start the backend server
npm start
# OR
npm run dev
# OR whatever command starts your backend
```

**Verify backend is running:**
```bash
curl http://localhost:3000/api/hello
```

If you get a response, the backend is running!

### Step 5: Test Profile Features

Once profile is created:

1. **View Profile**: See all your profile information
2. **Edit Profile**: Click "Edit Profile" button
3. **Update Information**: Change any fields
4. **Save Changes**: Click "Save Changes"
5. **Success!**: See updated information

### Step 6: Test Logout

1. Click "Logout" in the header
2. You should be redirected to login page
3. Header should show "Login" and "Sign up" buttons again

## 🔍 Troubleshooting

### Home Page Issues

**Problem**: Home page not loading
- ✅ **Fixed** - Updated gradient CSS class

**Problem**: Blank screen
- Check browser console for errors
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Login Issues

**Problem**: "Invalid email or password"
- Check credentials are correct
- Ensure backend is running
- Check backend logs for errors

**Problem**: Button doesn't respond
- Open browser console
- Check for JavaScript errors
- Verify network request is made (Network tab)

### Profile Creation Issues

**Problem**: Button doesn't respond
- See detailed debugging in `TROUBLESHOOTING.md`
- Check browser console for logs
- Verify you're logged in (check localStorage has token)

**Problem**: "Network error"
- Backend is not running → Start backend server (Step 4)
- Wrong API URL → Check `.env` file has `VITE_API_URL=http://localhost:3000/api`

**Problem**: "Unauthorized" or "401 error"
- Token expired → Logout and login again
- Invalid token → Clear localStorage and login again

## 📝 Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

**After changing .env, restart dev server:**
```bash
# Press Ctrl+C to stop
npm run dev  # Start again
```

## 🎯 Test Checklist

- [ ] Home page loads with all content
- [ ] Can navigate to all pages
- [ ] Can create an account (signup)
- [ ] Can login with correct credentials
- [ ] Header shows username when logged in
- [ ] Can access profile page
- [ ] Can create profile (backend must be running)
- [ ] Can edit profile
- [ ] Can logout successfully
- [ ] Login/Signup buttons show when logged out

## 📚 Additional Resources

- **Authentication Guide**: See `AUTH_README.md`
- **Troubleshooting**: See `TROUBLESHOOTING.md`
- **Bug Fixes**: See `FIXES.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`
- **Backend API Docs**: See `routes_documentation.md`

## 🆘 Need Help?

If you're stuck:

1. Check browser console for errors (F12)
2. Check backend logs for API errors
3. Review `TROUBLESHOOTING.md` for detailed debugging
4. Verify backend is running on port 3000
5. Verify frontend is running on port 3001
6. Check `.env` file has correct API URL

## 🎉 Success Indicators

You know everything is working when:

✅ Home page loads with gradient background
✅ Can signup and automatically login
✅ Header shows "Hi, [username]" and Profile/Logout buttons
✅ Can create profile and see success message
✅ Can edit profile and save changes
✅ Can logout and login again

---

**Current Status:**
- Frontend: Running on http://localhost:3001/ ✅
- Backend: Check if running on http://localhost:3000/ ⚠️
