import React, { useEffect, useMemo, useState } from 'react';
import { GraduationCap, Rocket, Star, Calendar, Clock, Plus, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from '../auth';

type Appointment = {
  id: string;
  email: string;
  date: string; // yyyy-mm-dd
  time: string; // HH:MM
};

const STORAGE_KEY = 'appointments_student';

function loadAppointments(email: string): Appointment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const all = raw ? (JSON.parse(raw) as Appointment[]) : [];
    return all.filter(a => a.email === email);
  } catch {
    return [];
  }
}

function saveAppointment(appt: Appointment) {
  const raw = localStorage.getItem(STORAGE_KEY);
  const all: Appointment[] = raw ? JSON.parse(raw) : [];
  all.push(appt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function isWeekday(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  const day = d.getDay();
  return day >= 1 && day <= 5; // Mon-Fri
}

const timeStepMinutes = 30;
function buildTimeOptions(start = '09:00', end = '17:00') {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  const result: string[] = [];
  let total = sh * 60 + sm;
  const endTotal = eh * 60 + em;
  while (total <= endTotal) {
    const h = Math.floor(total / 60).toString().padStart(2, '0');
    const m = (total % 60).toString().padStart(2, '0');
    result.push(`${h}:${m}`);
    total += timeStepMinutes;
  }
  return result;
}

const Student: React.FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const isStudent = auth?.role === 'student';
  const email = auth?.email ?? '';

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isStudent && email) {
      setAppointments(loadAppointments(email));
    }
  }, [isStudent, email]);

  const minDate = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  const times = useMemo(() => buildTimeOptions(), []);

  const openModal = () => {
    setError(null);
    setDate('');
    setTime('');
    setModalOpen(true);
  };

  const confirmAppointment = () => {
    setError(null);
    if (!date || !time) {
      setError('Please select date and time.');
      return;
    }
    if (!isWeekday(date)) {
      setError('Please choose a weekday (Mon–Fri).');
      return;
    }

    if (!isStudent || !email) {
      navigate('/login');
      return;
    }

    const appt: Appointment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      email,
      date,
      time,
    };
    saveAppointment(appt);
    setAppointments(prev => [...prev, appt]);
    setModalOpen(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-electric-blue-500" />
            <h1 className="text-3xl md:text-4xl font-display font-bold">For Students</h1>
          </div>
          {!isStudent && (
            <>
              <p className="text-gray-700 max-w-2xl">Project guidance with mentors to help you build, debug, and showcase your ideas. Book your first appointment for free.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={openModal} className="btn-primary inline-flex items-center"><Calendar className="h-5 w-5 mr-2" /> Book Free Appointment</button>
                <Link to="/signup" className="btn-outline">Create student account</Link>
                <Link to="/login" className="btn-outline">Login</Link>
              </div>
            </>
          )}
          {isStudent && (
            <>
              <p className="text-gray-700 max-w-2xl">Welcome back! Manage your project guidance appointments below or book a new one.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={openModal} className="btn-primary inline-flex items-center"><Plus className="h-5 w-5 mr-2" /> New appointment</button>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="font-display text-2xl font-bold mb-4">Student Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><Rocket className="h-5 w-5 text-hot-pink-500 mt-0.5" /> Project guidance (1:1 mentor support)</li>
              <li className="flex items-start gap-2"><Star className="h-5 w-5 text-cyber-purple-500 mt-0.5" /> Competition prep (WRO, RoboCup, science fairs)</li>
              <li className="flex items-start gap-2"><Star className="h-5 w-5 text-electric-blue-500 mt-0.5" /> Weekly maker labs and robotics clubs</li>
            </ul>
          </div>

          <div className="card">
            {isStudent ? (
              <>
                <h2 className="font-display text-2xl font-bold mb-4">Your Appointments</h2>
                {appointments.length === 0 ? (
                  <p className="text-gray-600">No appointments yet. Click “New appointment” to schedule one.</p>
                ) : (
                  <ul className="space-y-3">
                    {appointments.map(a => (
                      <li key={a.id} className="flex items-center justify-between border rounded-lg px-3 py-2">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-electric-blue-500" />
                          <span className="font-medium">{a.date}</span>
                          <span className="text-gray-600">at {a.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <button onClick={openModal} className="mt-4 btn-secondary inline-flex items-center"><Plus className="h-5 w-5 mr-2" /> New appointment</button>
              </>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold mb-2">Project Guidance</h2>
                <p className="text-gray-700 mb-4">Book a session with a mentor. Your first appointment is free.</p>
                <button onClick={openModal} className="btn-primary inline-flex items-center"><Calendar className="h-5 w-5 mr-2" /> Book Free Appointment</button>
                <p className="text-xs text-gray-500 mt-2">You’ll be asked to login to confirm.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
            <h3 className="text-xl font-display font-bold mb-4">Schedule appointment</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Choose a date (Mon–Fri)</label>
                <input type="date" value={date} min={minDate} onChange={e => setDate(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <select value={time} onChange={e => setTime(e.target.value)} className="flex-1 border rounded-lg px-3 py-2">
                    <option value="">Select a time</option>
                    {times.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <p className="text-xs text-gray-500 mt-1">Working hours: 09:00–17:00, Monday–Friday only.</p>
              </div>
              {error && <p className="text-sm text-hot-pink-600">{error}</p>}
              <div className="flex justify-end gap-3 pt-2">
                <button onClick={() => setModalOpen(false)} className="btn-outline">Cancel</button>
                <button onClick={confirmAppointment} className="btn-primary">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;
