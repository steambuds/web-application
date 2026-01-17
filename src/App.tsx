import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HeaderActionProvider } from './context/HeaderActionContext';
import { IntroAnimationProvider } from './context/IntroAnimationContext';
import { isAppModePath } from './utils/helpers';
import { UserType } from './types/unified';
import ProtectedRoute from './components/ProtectedRoute';
import RoleProtectedRoute from './components/RoleProtectedRoute';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RnD from './pages/R&D';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UnifiedDashboard from './pages/dashboards/UnifiedDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import GroupAttendancePage from './pages/dashboards/GroupAttendancePage';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import AnalyticsTracker from './components/AnalyticsTracker';
import PedagogicalExcellence from './resource_page/PedagogicalExcellence';
import WhatMakesGoodTeacher from './resource_page/WhatMakesGoodTeacher';
import EducationMyths from './resource_page/EducationMyths';
import HomeworkGuideParents from './resource_page/HomeworkGuideParents';
import HomeworkGuideTeachers from './resource_page/HomeworkGuideTeachers';
import HolisticDevelopmentGuide from './resource_page/HolisticDevelopmentGuide';
import NEP2020ParentGuide from './resource_page/NEP2020ParentGuide';
import NEP2020TeacherGuide from './resource_page/NEP2020TeacherGuide';
import StudyLessLearnMore from './resource_page/StudyLessLearnMore';
import AICheatingGuide from './resource_page/AICheatingGuide';
import MathMindsetGuide from './resource_page/MathMindsetGuide';
import DopamineDetoxGuide from './resource_page/DopamineDetoxGuide';
import MarksVsSkillsGuide from './resource_page/MarksVsSkillsGuide';
import MarksVsSkillsParentGuide from './resource_page/MarksVsSkillsParentGuide';
import SkillsPlusAcademicsGuide from './resource_page/SkillsPlusAcademicsGuide';

/**
 * AppLayout Component
 * Handles conditional layout styling for app mode vs standard pages
 * App mode: Full-screen layout for student dashboard (no footer, fixed height)
 * Standard mode: Normal scrollable layout with footer
 */
const AppLayout = () => {
  const location = useLocation();
  const isAppMode = isAppModePath(location.pathname);

  return (
    <div className={isAppMode ? "h-screen overflow-hidden flex flex-col" : "min-h-screen flex flex-col"}>
      <Header />
      <main className={isAppMode ? "flex-grow overflow-hidden" : "flex-grow"}>
        <Routes>
          {/* Public routes */}
          <Route path="/resources/pedagogical-excellence" element={<PedagogicalExcellence />} />
          <Route path="/resources/good-teacher" element={<WhatMakesGoodTeacher />} />
          <Route path="/resources/education-myths" element={<EducationMyths />} />
          <Route path="/resources/parents-homework-guide" element={<HomeworkGuideParents />} />
          <Route path="/resources/teachers-homework-guide" element={<HomeworkGuideTeachers />} />
          <Route path="/resources/holistic-development" element={<HolisticDevelopmentGuide />} />
          <Route path="/resources/nep-2020-parent-guide" element={<NEP2020ParentGuide />} />
          <Route path="/resources/nep-2020-teacher-guide" element={<NEP2020TeacherGuide />} />
          <Route path="/resources/study-less-learn-more" element={<StudyLessLearnMore />} />
          <Route path="/resources/is-ai-cheating" element={<AICheatingGuide />} />
          <Route path="/resources/math-mindset" element={<MathMindsetGuide />} />
          <Route path="/resources/dopamine-detox" element={<DopamineDetoxGuide />} />
          <Route path="/resources/marks-vs-skills" element={<MarksVsSkillsGuide />} />
          <Route path="/resources/marks-vs-skills-parenting" element={<MarksVsSkillsParentGuide />} />
          <Route path="/resources/skills-plus-academics" element={<SkillsPlusAcademicsGuide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rnd" element={<RnD />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />

          {/* Home with auth redirect */}
          <Route path="/" element={<Home />} />

          {/* Redirect old public pages to unified dashboards */}
          <Route path="/student" element={<Navigate to="/student/dashboard" replace />} />
          <Route path="/teacher" element={<Navigate to="/teacher/dashboard" replace />} />
          <Route path="/guardian" element={<Navigate to="/guardian/dashboard" replace />} />
          <Route path="/school" element={<Navigate to="/school/dashboard" replace />} />

          {/* Admin dashboard - requires authentication and admin role */}
          <Route path="/admin/dashboard" element={
            <RoleProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </RoleProtectedRoute>
          } />

          {/* Teacher attendance page - requires authentication and teacher role */}
          <Route path="/teacher/groups/:groupId/attendance" element={
            <RoleProtectedRoute allowedRoles={['teacher']}>
              <GroupAttendancePage />
            </RoleProtectedRoute>
          } />

          {/* Unified dashboard routes - publicly accessible for all user types
              Content access is controlled by contentLoader.tsx based on user's role */}
          {(['student', 'teacher', 'guardian', 'school'] as UserType[]).map((userType) => (
            <React.Fragment key={userType}>
              {/* Main Dashboard - publicly accessible */}
              <Route path={`/${userType}/dashboard`} element={<UnifiedDashboard />} />

              {/* Resources - publicly accessible */}
              <Route path={`/${userType}/dashboard/resources`} element={<UnifiedDashboard />} />

              {/* Activities - publicly accessible */}
              <Route path={`/${userType}/dashboard/activities`} element={<UnifiedDashboard />} />
            </React.Fragment>
          ))}

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
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <IntroAnimationProvider>
        <HeaderActionProvider>
          <Router>
            <AnalyticsTracker />
            <AppLayout />
          </Router>
        </HeaderActionProvider>
      </IntroAnimationProvider>
    </AuthProvider>
  );
}

export default App;
