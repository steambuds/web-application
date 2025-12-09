import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Users, CheckCircle, XCircle, Clock, HelpCircle, Loader, AlertCircle } from 'lucide-react';

interface Student {
  id: string;
  user_id: number;
  steamer_id: number;
  name: string;
  stats: {
    present: number;
    absent: number;
    late: number;
    excused: number;
  };
}

interface GroupInfo {
    title: string;
    grade: string;
    subject: string;
}

const GroupPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [students, setStudents] = useState<Student[]>([]);
  const [groupInfo, setGroupInfo] = useState<GroupInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroupData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch students in the group
        const studentsResponse = await fetch(`http://localhost:3001/${id}`);
        if (!studentsResponse.ok) {
          throw new Error(`Failed to fetch students for group ${id}`);
        }
        const studentsData = await studentsResponse.json();
        setStudents(studentsData);

        // Fetch all groups to find info for the current group
        const groupsResponse = await fetch('http://localhost:3001/groups');
        if(!groupsResponse.ok){
            throw new Error('Failed to fetch groups list');
        }
        const groupsData = await groupsResponse.json();
        if(groupsData[id!]){
            setGroupInfo(groupsData[id!]);
        } else {
            throw new Error(`Group with id ${id} not found.`);
        }

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGroupData();
    }
  }, [id]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {loading && (
          <div className="flex justify-center items-center py-10">
            <Loader className="animate-spin h-8 w-8 text-indigo-600" />
            <span className="ml-3 text-gray-500">Loading group data...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="py-1">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && groupInfo && (
          <>
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900">{groupInfo.title}</h1>
                <p className="text-lg text-gray-500">{groupInfo.subject} - Grade {groupInfo.grade}</p>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Student Roster</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">List of students and their attendance.</p>
              </div>
              <div className="border-t border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Steamer ID</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Present</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Absent</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Late</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Excused</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.steamer_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{student.stats.present}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{student.stats.absent}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{student.stats.late}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{student.stats.excused}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GroupPage;
