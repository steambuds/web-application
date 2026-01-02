import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ErrorMessage, Card, Badge, Button } from '../../components/ui';
import { getAccessToken } from '../../utils/auth';
import * as groupsAPI from '../../api/groups';
import { Group } from '../../types/groups';
import { Users, BookOpen, Brain, Award, ArrowRight, Lock } from 'lucide-react';

/**
 * Article data for teacher resources
 */
const TEACHER_ARTICLES = [
  {
    id: 'education-myths',
    title: 'The Biggest Myth of Education',
    description: 'Discover why "Learning Styles" (VARK) might be holding students back, and what science actually says works.',
    thumbnail: Brain,
    badge: 'Myth Busting',
    badgeColor: 'error' as const,
    route: '/resources/education-myths',
    readTime: '8 min read'
  },
  {
    id: 'pedagogical-excellence',
    title: 'Pedagogical Excellence Framework',
    description: 'Master student personas, class dynamics, and lesson quality with RIASEC and Bloom\'s Taxonomy.',
    thumbnail: Award,
    badge: 'Framework',
    badgeColor: 'secondary' as const,
    route: '/resources/pedagogical-excellence',
    readTime: '12 min read'
  },
  {
    id: 'good-teacher',
    title: 'What Makes a Good Teacher?',
    description: 'Insights from leading educators on effective teaching strategies for the modern classroom.',
    thumbnail: BookOpen,
    badge: 'Professional Development',
    badgeColor: 'primary' as const,
    route: '/resources/what-makes-good-teacher',
    readTime: '10 min read'
  }
];

/**
 * TeacherDashboard Component
 * Dashboard for teachers to view and manage their assigned student groups
 */
const TeacherDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
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

  // Determine which articles to show based on auth status
  const visibleArticles = isAuthenticated ? TEACHER_ARTICLES : TEACHER_ARTICLES.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Welcome{isAuthenticated && user?.username ? `, ${user.username}` : ', Teacher'}!
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isAuthenticated
              ? 'Explore professional development resources and manage your student groups'
              : 'Sign in to access all resources and manage your classes'}
          </p>
        </div>

        {/* Teacher Resources Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold font-display mb-2">Professional Development</h2>
              <p className="text-gray-600">Expert insights and research-backed teaching strategies</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.map((article) => {
              const ThumbnailIcon = article.thumbnail;
              return (
                <Card
                  key={article.id}
                  variant="hover"
                  className="flex flex-col h-full cursor-pointer group"
                  onClick={() => navigate(article.route)}
                >
                  {/* Thumbnail */}
                  <div className="w-full h-48 bg-gradient-to-br from-electric-blue-400 via-cyber-purple-500 to-hot-pink-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <ThumbnailIcon className="w-20 h-20 text-white opacity-90" />
                  </div>

                  {/* Badge */}
                  <Badge variant="outline" color={article.badgeColor} className="mb-3 w-fit">
                    {article.badge}
                  </Badge>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>{article.readTime}</span>
                    <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Login CTA for non-authenticated users */}
          {!isAuthenticated && (
            <div className="mt-8 bg-gradient-to-r from-electric-blue-50 to-cyber-purple-50 border-2 border-electric-blue-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unlock More Resources</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Sign in to access our complete library of professional development articles, teaching frameworks, and expert insights.
              </p>
              <Button
                variant="primary"
                onClick={() => navigate('/login')}
                className="mx-auto"
              >
                Sign In to Continue
              </Button>
            </div>
          )}
        </div>

        {/* Groups Section */}
        {isAuthenticated && (
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
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
