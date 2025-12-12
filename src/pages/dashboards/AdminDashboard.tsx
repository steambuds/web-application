import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Card, Heading, Button, Input, FormGroup, Badge } from '../../components/ui';
import { School, Users, GraduationCap, Plus, Check } from 'lucide-react';

type EntityType = 'school' | 'student' | 'teacher';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<EntityType>('school');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Dummy data for existing entities
  const dummySchools = [
    { id: '1', name: 'Delhi Public School', location: 'New Delhi', status: 'Active', students: 500 },
    { id: '2', name: 'Ryan International School', location: 'Mumbai', status: 'Active', students: 750 },
    { id: '3', name: 'DAV Public School', location: 'Bangalore', status: 'Active', students: 600 },
  ];

  const dummyStudents = [
    { id: '1', name: 'Arjun Kumar', email: 'arjun@example.com', school: 'Delhi Public School', grade: 'Grade 10' },
    { id: '2', name: 'Priya Sharma', email: 'priya@example.com', school: 'Ryan International School', grade: 'Grade 9' },
    { id: '3', name: 'Rahul Patel', email: 'rahul@example.com', school: 'DAV Public School', grade: 'Grade 11' },
  ];

  const dummyTeachers = [
    { id: '1', name: 'Ms. Anita Verma', email: 'anita@example.com', school: 'Delhi Public School', subject: 'Mathematics' },
    { id: '2', name: 'Mr. Rajesh Singh', email: 'rajesh@example.com', school: 'Ryan International School', subject: 'Science' },
    { id: '3', name: 'Dr. Sunita Gupta', email: 'sunita@example.com', school: 'DAV Public School', subject: 'Physics' },
  ];

  const handleCreateSchool = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('School created successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Student created successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleCreateTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Teacher created successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Welcome Section */}
      <div className="mb-8">
        <Heading level="h1" gradient className="mb-2">
          System Administration
        </Heading>
        <p className="text-gray-600 text-lg">
          Welcome back, <span className="font-semibold">{user?.username || 'Admin'}</span>! Manage schools, students, and teachers.
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
          <Check className="h-5 w-5" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('school')}
            className={`pb-3 px-4 font-medium transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'school'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-primary'
            }`}
          >
            <School className="h-5 w-5" />
            Schools
          </button>
          <button
            onClick={() => setActiveTab('student')}
            className={`pb-3 px-4 font-medium transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'student'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-primary'
            }`}
          >
            <Users className="h-5 w-5" />
            Students
          </button>
          <button
            onClick={() => setActiveTab('teacher')}
            className={`pb-3 px-4 font-medium transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'teacher'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-primary'
            }`}
          >
            <GraduationCap className="h-5 w-5" />
            Teachers
          </button>
        </div>
      </div>

      {/* School Tab */}
      {activeTab === 'school' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create School Form */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Plus className="h-5 w-5 text-primary" />
              <Heading level="h3">Create New School</Heading>
            </div>
            <form onSubmit={handleCreateSchool}>
              <FormGroup columns={1}>
                <Input
                  label="School Name"
                  type="text"
                  placeholder="Enter school name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="admin@school.com"
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
                <Input
                  label="Location"
                  type="text"
                  placeholder="City, State"
                  required
                />
                <Input
                  label="Address"
                  type="text"
                  placeholder="Full address"
                  required
                />
                <Button type="submit" variant="primary" className="w-full">
                  Create School
                </Button>
              </FormGroup>
            </form>
          </Card>

          {/* Schools List */}
          <Card>
            <Heading level="h3" className="mb-4">
              Existing Schools ({dummySchools.length})
            </Heading>
            <div className="space-y-3">
              {dummySchools.map((school) => (
                <div
                  key={school.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{school.name}</h4>
                    <Badge variant="solid" color="green">
                      {school.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📍 {school.location}</p>
                  <p className="text-sm text-gray-600">👥 {school.students} students</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Student Tab */}
      {activeTab === 'student' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Student Form */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Plus className="h-5 w-5 text-primary" />
              <Heading level="h3">Create New Student</Heading>
            </div>
            <form onSubmit={handleCreateStudent}>
              <FormGroup columns={1}>
                <Input
                  label="Student Name"
                  type="text"
                  placeholder="Enter student name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="student@example.com"
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a school</option>
                    {dummySchools.map((school) => (
                      <option key={school.id} value={school.id}>
                        {school.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  label="Grade"
                  type="text"
                  placeholder="e.g., Grade 10"
                  required
                />
                <Button type="submit" variant="primary" className="w-full">
                  Create Student
                </Button>
              </FormGroup>
            </form>
          </Card>

          {/* Students List */}
          <Card>
            <Heading level="h3" className="mb-4">
              Existing Students ({dummyStudents.length})
            </Heading>
            <div className="space-y-3">
              {dummyStudents.map((student) => (
                <div
                  key={student.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{student.name}</h4>
                    <Badge variant="outline" color="blue">
                      {student.grade}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📧 {student.email}</p>
                  <p className="text-sm text-gray-600">🏫 {student.school}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Teacher Tab */}
      {activeTab === 'teacher' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Teacher Form */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Plus className="h-5 w-5 text-primary" />
              <Heading level="h3">Create New Teacher</Heading>
            </div>
            <form onSubmit={handleCreateTeacher}>
              <FormGroup columns={1}>
                <Input
                  label="Teacher Name"
                  type="text"
                  placeholder="Enter teacher name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="teacher@example.com"
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    School
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a school</option>
                    {dummySchools.map((school) => (
                      <option key={school.id} value={school.id}>
                        {school.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  label="Subject/Specialization"
                  type="text"
                  placeholder="e.g., Mathematics, Science"
                  required
                />
                <Button type="submit" variant="primary" className="w-full">
                  Create Teacher
                </Button>
              </FormGroup>
            </form>
          </Card>

          {/* Teachers List */}
          <Card>
            <Heading level="h3" className="mb-4">
              Existing Teachers ({dummyTeachers.length})
            </Heading>
            <div className="space-y-3">
              {dummyTeachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{teacher.name}</h4>
                    <Badge variant="solid" color="purple">
                      {teacher.subject}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📧 {teacher.email}</p>
                  <p className="text-sm text-gray-600">🏫 {teacher.school}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
