import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Card, Heading, Button, Input, FormGroup, Badge } from '../../components/ui';
import { School, Users, GraduationCap, Plus, Check } from 'lucide-react';

type EntityType = 'school' | 'student' | 'teacher';

// Reusable Tab Content Component
interface AdminTabContentProps {
  createTitle: string;
  onCreate: (e: React.FormEvent) => void;
  listTitle: string;
  listCount: number;
  renderList: () => React.ReactNode;
  children: React.ReactNode; // Form fields
}

const AdminTabContent: React.FC<AdminTabContentProps> = ({
  createTitle,
  onCreate,
  listTitle,
  listCount,
  renderList,
  children
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Create Form */}
      <Card>
        <div className="flex items-center gap-2 mb-4">
          <Plus className="h-5 w-5 text-primary" />
          <Heading level={3}>{createTitle}</Heading>
        </div>
        <form onSubmit={onCreate}>
          <FormGroup columns={1}>
            {children}
            <Button type="submit" variant="primary" className="w-full">
              {createTitle}
            </Button>
          </FormGroup>
        </form>
      </Card>

      {/* List */}
      <Card>
        <Heading level={3} className="mb-4">
          {listTitle} ({listCount})
        </Heading>
        <div className="space-y-3">
          {renderList()}
        </div>
      </Card>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<EntityType>('school');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Dummy data
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

  const handleCreate = (type: string) => (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(`${type} created successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const tabs = [
    { id: 'school', label: 'Schools', icon: <School className="h-5 w-5" /> },
    { id: 'student', label: 'Students', icon: <Users className="h-5 w-5" /> },
    { id: 'teacher', label: 'Teachers', icon: <GraduationCap className="h-5 w-5" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Welcome Section */}
      <div className="mb-8">
        <Heading level={1} gradient className="mb-2">
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
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as EntityType)}
              className={`pb-3 px-4 font-medium transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-primary'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* School Tab */}
      {activeTab === 'school' && (
        <AdminTabContent
          createTitle="Create New School"
          onCreate={handleCreate('School')}
          listTitle="Existing Schools"
          listCount={dummySchools.length}
          renderList={() => (
            <>
              {dummySchools.map((school) => (
                <div key={school.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{school.name}</h4>
                    <Badge variant="solid" color="success">{school.status}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📍 {school.location}</p>
                  <p className="text-sm text-gray-600">👥 {school.students} students</p>
                </div>
              ))}
            </>
          )}
        >
          <Input label="School Name" type="text" placeholder="Enter school name" required />
          <Input label="Email" type="email" placeholder="admin@school.com" required />
          <Input label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
          <Input label="Location" type="text" placeholder="City, State" required />
          <Input label="Address" type="text" placeholder="Full address" required />
        </AdminTabContent>
      )}

      {/* Student Tab */}
      {activeTab === 'student' && (
        <AdminTabContent
          createTitle="Create New Student"
          onCreate={handleCreate('Student')}
          listTitle="Existing Students"
          listCount={dummyStudents.length}
          renderList={() => (
            <>
              {dummyStudents.map((student) => (
                <div key={student.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{student.name}</h4>
                    <Badge variant="outline" color="primary">{student.grade}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📧 {student.email}</p>
                  <p className="text-sm text-gray-600">🏫 {student.school}</p>
                </div>
              ))}
            </>
          )}
        >
          <Input label="Student Name" type="text" placeholder="Enter student name" required />
          <Input label="Email" type="email" placeholder="student@example.com" required />
          <Input label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
              <option value="">Select a school</option>
              {dummySchools.map((school) => <option key={school.id} value={school.id}>{school.name}</option>)}
            </select>
          </div>
          <Input label="Grade" type="text" placeholder="e.g., Grade 10" required />
        </AdminTabContent>
      )}

      {/* Teacher Tab */}
      {activeTab === 'teacher' && (
        <AdminTabContent
          createTitle="Create New Teacher"
          onCreate={handleCreate('Teacher')}
          listTitle="Existing Teachers"
          listCount={dummyTeachers.length}
          renderList={() => (
            <>
              {dummyTeachers.map((teacher) => (
                <div key={teacher.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{teacher.name}</h4>
                    <Badge variant="solid" color="secondary">{teacher.subject}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">📧 {teacher.email}</p>
                  <p className="text-sm text-gray-600">🏫 {teacher.school}</p>
                </div>
              ))}
            </>
          )}
        >
          <Input label="Teacher Name" type="text" placeholder="Enter teacher name" required />
          <Input label="Email" type="email" placeholder="teacher@example.com" required />
          <Input label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" required />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
              <option value="">Select a school</option>
              {dummySchools.map((school) => <option key={school.id} value={school.id}>{school.name}</option>)}
            </select>
          </div>
          <Input label="Subject/Specialization" type="text" placeholder="e.g., Mathematics, Science" required />
        </AdminTabContent>
      )}
    </div>
  );
};

export default AdminDashboard;
