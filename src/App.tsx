import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/guardian" element={<Guardian />} />
            <Route path="/school" element={<School />} />
            <Route path="/rnd" element={<RnD />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
