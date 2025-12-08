import React, { useState, useEffect } from 'react';
import { BookOpen, Users, ClipboardList, AlertCircle, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Group {
  id: string;
  title: string;
  grade: string;
  subject: string;
}

const Teacher: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('http://localhost:3001/groups');
        if (!response.ok) {
          throw new Error('Failed to fetch groups');
        }
        const data = await response.json();
        const formattedGroups: Group[] = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setGroups(formattedGroups);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Your Groups</h1>
          <Link
            to="/create-group"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Create New Group
          </Link>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-10">
            <Loader className="animate-spin h-8 w-8 text-indigo-600" />
            <span className="ml-3 text-gray-500">Loading groups...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex">
              <div className="py-1">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div key={group.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{group.title}</h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Grade: {group.grade}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>Subject: {group.subject}</span>
                  </div>
                   <div className="mt-6 flex justify-end">
                    <Link
                      to={`/${group.id}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teacher;
