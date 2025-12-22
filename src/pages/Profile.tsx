import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, Button, Badge, Heading } from '../components/ui';
import { User, Mail, LogOut, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/', { replace: true });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-[70vh] px-4 py-12 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
      <div className="max-w-3xl mx-auto">
        <Heading level={1} className="text-center mb-8">
          My Profile
        </Heading>

        <Card variant="basic" className="mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-electric-blue-500 to-cyber-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {user.profile?.name || user.username}
                </h2>
                <p className="text-gray-600">@{user.username}</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              disabled={isLoading}
              iconLeft={<LogOut className="h-4 w-4" />}
            >
              Logout
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Mail className="h-5 w-5 mr-3 text-gray-400" />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center text-gray-700">
              <User className="h-5 w-5 mr-3 text-gray-400" />
              <span>User ID: {user.id}</span>
            </div>

            {user.roles && user.roles.length > 0 && (
              <div className="flex items-start text-gray-700">
                <Calendar className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <div>
                  <p className="font-medium mb-2">Roles:</p>
                  <div className="flex flex-wrap gap-2">
                    {user.roles.map((role) => (
                      <Badge key={role} variant="solid" color="primary">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <Card variant="gradient" className="text-center">
          <div className="py-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Profile Details Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're working on adding more profile features including bio, avatar upload,
              preferences, and more. Stay tuned!
            </p>
            <div className="inline-block h-2 w-2 rounded-full bg-electric-blue-500 animate-pulse mr-2"></div>
            <div className="inline-block h-2 w-2 rounded-full bg-cyber-purple-500 animate-pulse mr-2"></div>
            <div className="inline-block h-2 w-2 rounded-full bg-hot-pink-500 animate-pulse"></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
