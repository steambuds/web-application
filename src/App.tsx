import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import RoleProtectedRoute from './components/RoleProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RnD from './pages/R&D';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Resources from './pages/Resources';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Guardian from './pages/Guardian';
import School from './pages/School';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import TeacherDashboard from './pages/dashboards/TeacherDashboard';
import GuardianDashboard from './pages/dashboards/GuardianDashboard';
import SchoolDashboard from './pages/dashboards/SchoolDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/rnd" element={<RnD />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />

              {/* Home with auth redirect */}
              <Route path="/" element={<Home />} />

              {/* Public role pages - redirect authenticated users to their dashboard */}
              <Route path="/student" element={
                <PublicRoute>
                  <Student />
                </PublicRoute>
              } />
              <Route path="/teacher" element={
                <PublicRoute>
                  <Teacher />
                </PublicRoute>
              } />
              <Route path="/guardian" element={
                <PublicRoute>
                  <Guardian />
                </PublicRoute>
              } />
              <Route path="/school" element={
                <PublicRoute>
                  <School />
                </PublicRoute>
              } />

              {/* Private dashboard routes - role-specific protection */}
              <Route path="/admin/dashboard" element={
                <RoleProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </RoleProtectedRoute>
              } />
              <Route path="/student/dashboard" element={
                <RoleProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </RoleProtectedRoute>
              } />
              <Route path="/teacher/dashboard" element={
                <RoleProtectedRoute allowedRoles={['instructor', 'facilitator']}>
                  <TeacherDashboard />
                </RoleProtectedRoute>
              } />
              <Route path="/guardian/dashboard" element={
                <RoleProtectedRoute allowedRoles={['guardian']}>
                  <GuardianDashboard />
                </RoleProtectedRoute>
              } />
              <Route path="/school/dashboard" element={
                <RoleProtectedRoute allowedRoles={['school_admin']}>
                  <SchoolDashboard />
                </RoleProtectedRoute>
              } />

              {/* Profile page */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
