import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
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
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/rnd" element={<RnD />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />

              {/* Protected routes - require authentication */}
              <Route
                path="/student"
                element={
                  <ProtectedRoute>
                    <Student />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/teacher"
                element={
                  <ProtectedRoute>
                    <Teacher />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/guardian"
                element={
                  <ProtectedRoute>
                    <Guardian />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/school"
                element={
                  <ProtectedRoute>
                    <School />
                  </ProtectedRoute>
                }
              />
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
