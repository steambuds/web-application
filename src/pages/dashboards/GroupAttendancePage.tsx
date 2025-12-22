import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../utils/auth';
import * as groupsAPI from '../../api/groups';
import {
  StudentAttendanceRecord,
  AttendanceStatus,
  BulkAttendanceRequest
} from '../../types/groups';
import {
  ErrorMessage,
  SuccessMessage
} from '../../components/ui';
import StudentAttendanceRow from '../../components/attendance/StudentAttendanceRow';
import AttendanceCalendarView from '../../components/attendance/AttendanceCalendarView';
import { Save, X, Plus } from 'lucide-react';

/**
 * GroupAttendancePage Component
 *
 * Allows teachers to view and mark attendance for their assigned groups
 * Features:
 * - View attendance history calendar by default
 * - Mark attendance in a modal popup
 * - Quick actions (Mark All Present/Absent)
 * - Save bulk attendance to database
 */
const GroupAttendancePage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();

  // Data state
  const [students, setStudents] = useState<StudentAttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state - Always use today's date
  const selectedDate = new Date().toISOString().split('T')[0]; // Today's date in YYYY-MM-DD
  const [attendanceMap, setAttendanceMap] = useState<Map<string, AttendanceStatus>>(
    new Map()
  );

  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Fetch attendance data
  useEffect(() => {
    if (!groupId) return;

    const fetchAttendance = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = getAccessToken();
        if (!token) {
          throw new Error('No access token found');
        }
        const data = await groupsAPI.getGroupAttendance(groupId, token);
        setStudents(data);

        // Pre-populate form with existing attendance for today
        const newMap = new Map<string, AttendanceStatus>();
        data.forEach(student => {
          if (student.calendar[selectedDate]) {
            newMap.set(student.user_id, student.calendar[selectedDate]);
          }
        });
        setAttendanceMap(newMap);
      } catch (err) {
        const errorMessage = err instanceof groupsAPI.GroupsAPIError
          ? err.message
          : 'Failed to load attendance data';
        setError(errorMessage);
        console.error('Error fetching attendance:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [groupId]);

  // Handle status change for individual student
  const handleStatusChange = (userId: string, status: AttendanceStatus) => {
    setAttendanceMap(prev => {
      const newMap = new Map(prev);
      if (status) {
        newMap.set(userId, status);
      } else {
        newMap.delete(userId);
      }
      return newMap;
    });
  };

  // Handle bulk submit
  const handleSubmit = async () => {
    if (!groupId || attendanceMap.size === 0) {
      setSubmitError('Please mark attendance for at least one student');
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const token = getAccessToken();
      if (!token) {
        throw new Error('No access token found');
      }

      const attendances = Array.from(attendanceMap.entries()).map(([user_id, status]) => ({
        user_id,
        status,
      }));

      // Create ISO date string with current time
      const dateTime = new Date(selectedDate);
      dateTime.setHours(9, 0, 0, 0); // Set to 9:00 AM
      const requestData: BulkAttendanceRequest = {
        date: dateTime.toISOString(),
        attendances,
      };

      await groupsAPI.recordGroupAttendance(groupId, requestData, token);
      setSubmitSuccess(true);

      // Close modal and refresh data after successful submission
      setTimeout(async () => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
        setAttendanceMap(new Map());
        // Refetch attendance data
        const token = getAccessToken();
        if (token && groupId) {
          const data = await groupsAPI.getGroupAttendance(groupId, token);
          setStudents(data);
        }
      }, 1500);
    } catch (err) {
      const errorMessage = err instanceof groupsAPI.GroupsAPIError
        ? err.message
        : 'Failed to save attendance';
      setSubmitError(errorMessage);
      console.error('Error saving attendance:', err);
    } finally {
      setSubmitting(false);
    }
  };

  // Quick mark all
  const handleMarkAll = (status: AttendanceStatus) => {
    const newMap = new Map<string, AttendanceStatus>();
    students.forEach(student => {
      newMap.set(student.user_id, status);
    });
    setAttendanceMap(newMap);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorMessage variant="centered" message={error} />
          <div className="flex justify-center mt-6">
            <button className="btn-outline" onClick={() => navigate('/teacher/dashboard')}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAttendanceMap(new Map());
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold font-display">
            Attendance
          </h1>
          <button
            className="btn-primary inline-flex items-center gap-2 px-4 py-2"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm">Mark Attendance</span>
          </button>
        </div>

        {/* Attendance History Calendar */}
        {students.length > 0 ? (
          <AttendanceCalendarView students={students} />
        ) : (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-500">No students in this group</p>
          </div>
        )}

        {/* Mark Attendance Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold font-display">Mark Attendance</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4">
                {/* Success/Error Messages */}
                {submitSuccess && (
                  <SuccessMessage
                    title="Success!"
                    message="Attendance saved successfully!"
                    className="mb-3"
                  />
                )}
                {submitError && (
                  <ErrorMessage
                    variant="inline"
                    message={submitError}
                    className="mb-3"
                  />
                )}

                {/* Student Attendance Table */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
                  <div className="overflow-x-hidden">
                    <table className="w-full text-left border-collapse table-fixed">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="py-2 px-2 text-gray-700 font-semibold text-xs w-[35%]">
                            Student ({students.length})
                          </th>
                          <th className="py-2 px-2 text-gray-700 font-semibold text-xs text-center w-[20%]">
                            {(() => {
                              // Get the most recent date from all students' calendars (excluding today)
                              const allDates = new Set<string>();
                              const today = new Date().toISOString().split('T')[0];
                              students.forEach(student => {
                                Object.keys(student.calendar).forEach(date => {
                                  if (date !== today) allDates.add(date);
                                });
                              });
                              const sortedDates = Array.from(allDates).sort().reverse();
                              if (sortedDates.length > 0) {
                                const lastDate = new Date(sortedDates[0]);
                                return lastDate.toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                });
                              }
                              return 'Last';
                            })()}
                          </th>
                          <th className="py-2 px-2 text-gray-700 font-semibold text-xs text-center w-[45%]">
                            Mark {new Date().toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map(student => (
                          <StudentAttendanceRow
                            key={student.user_id}
                            student={student}
                            currentStatus={attendanceMap.get(student.user_id)}
                            onStatusChange={handleStatusChange}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action Buttons - Inside scrollable area */}
                <div className="flex justify-center gap-2 py-4 bg-gray-50 rounded-lg">
                  <button
                    className="btn-outline text-sm px-4 py-2"
                    onClick={() => handleMarkAll('present')}
                  >
                    All Present
                  </button>
                  <button
                    className="btn-outline text-sm px-4 py-2"
                    onClick={() => handleMarkAll('absent')}
                  >
                    All Absent
                  </button>
                  <button
                    className="btn-primary inline-flex items-center gap-2 px-4 py-2"
                    onClick={handleSubmit}
                    disabled={submitting || attendanceMap.size === 0}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span className="text-sm">Saving...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span className="text-sm">Save ({attendanceMap.size}/{students.length})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupAttendancePage;
