import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ErrorMessage } from '../../components/ui';
import { getAccessToken } from '../../utils/auth';
import * as groupsAPI from '../../api/groups';
import { Group } from '../../types/groups';
import { Users } from 'lucide-react';

/**
 * TeacherDashboard Component
 * Dashboard for teachers to view and manage their assigned student groups
 */
const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // State for groups from API
  const [groups, setGroups] = useState<Group[]>([]);
  const [groupsLoading, setGroupsLoading] = useState(true);
  const [groupsError, setGroupsError] = useState<string | null>(null);

  // Fetch groups from API
  useEffect(() => {
    const fetchGroups = async () => {
      setGroupsLoading(true);
      setGroupsError(null);
      try {
        const token = getAccessToken();
        if (!token) {
          throw new Error('No access token found');
        }
        const data = await groupsAPI.getTeacherGroups(token);
        setGroups(data);
      } catch (err) {
        const errorMessage = err instanceof groupsAPI.GroupsAPIError
          ? err.message
          : 'Failed to load groups';
        setGroupsError(errorMessage);
        console.error('Error fetching groups:', err);
      } finally {
        setGroupsLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const handleGroupClick = (groupId: string) => {
    navigate(`/teacher/groups/${groupId}/attendance`);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Welcome, {user?.username || 'Teacher'}!
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a group below to view and manage student attendance
          </p>
        </div>

        {/* Groups Section */}
        <div>
          {groupsLoading && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}

          {groupsError && (
            <div className="max-w-xl mx-auto">
              <ErrorMessage variant="banner" message={groupsError} />
            </div>
          )}

          {!groupsLoading && !groupsError && groups.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Groups Assigned</h3>
              <p className="text-gray-600">You don't have any student groups assigned yet.</p>
            </div>
          )}

          {!groupsLoading && !groupsError && groups.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group) => (
                <div
                  key={group.id}
                  onClick={() => handleGroupClick(group.id)}
                  className="card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue-400 to-cyber-purple-500 flex items-center justify-center text-white mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{group.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Grade: {group.grades}</p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {group.about || 'No description'}
                  </p>
                  <button className="btn-outline w-full">View Attendance</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
