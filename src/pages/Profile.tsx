import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Alert from '../components/Alert';
import Loading from '../components/Loading';
import { apiService } from '../services/api';
import { storage } from '../utils/storage';
import type { Profile, ProfileCreate, UserType } from '../types';

const Profile: React.FC = () => {
  const { user, token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    user_type: 'student' as UserType,
    bio: '',
    avatar_url: '',
    phone: '',
    address: '',
    date_of_birth: '',
    // Student fields
    grade_level: '',
    enrollment_date: '',
    parent_contact: '',
    // Teacher fields
    subjects_taught: '',
    years_experience: 0,
    qualification: '',
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
      return;
    }

    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, navigate]);

  const fetchProfile = async () => {
    if (!token || !user) return;

    try {
      setIsLoading(true);

      // First, try to load from localStorage
      const storedProfile = storage.getProfile<Profile>();

      if (storedProfile) {
        console.log('Loaded profile from localStorage:', storedProfile);
        setProfile(storedProfile);

        // Populate form data for editing
        setFormData({
          user_type: storedProfile.user_type,
          bio: storedProfile.bio || '',
          avatar_url: storedProfile.avatar_url || '',
          phone: storedProfile.phone || '',
          address: storedProfile.address || '',
          date_of_birth: storedProfile.date_of_birth || '',
          grade_level: storedProfile.grade_level || '',
          enrollment_date: storedProfile.enrollment_date || '',
          parent_contact: storedProfile.parent_contact || '',
          subjects_taught: storedProfile.subjects_taught || '',
          years_experience: storedProfile.years_experience || 0,
          qualification: storedProfile.qualification || '',
        });

        // Try to refresh from backend if we have profile_id
        if (storedProfile.id) {
          try {
            const freshProfile = await apiService.getProfile(storedProfile.id, token);
            setProfile(freshProfile);
            storage.setProfile(freshProfile);
          } catch (err) {
            console.warn('Could not refresh profile from backend, using cached version');
          }
        }
      } else {
        // No profile exists yet - this is OK, user can create one
        console.log('No profile found in localStorage');
        setProfile(null);
      }
    } catch (err: any) {
      console.error('Error fetching profile:', err);
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateProfile = async () => {
    console.log('=== handleCreateProfile called ===');
    console.log('Token exists:', !!token);
    console.log('User:', user);

    if (!token) {
      setError('No authentication token found. Please login again.');
      return;
    }

    setError(null);
    setSuccess(null);

    try {
      setIsSaving(true);

      console.log('Creating profile with token:', token?.substring(0, 20) + '...');

      const profileData: ProfileCreate = {
        user_type: formData.user_type,
        bio: formData.bio || undefined,
        phone: formData.phone || undefined,
        address: formData.address || undefined,
        date_of_birth: formData.date_of_birth || undefined,
      };

      // Add type-specific fields
      if (formData.user_type === 'student') {
        profileData.grade_level = formData.grade_level || undefined;
        profileData.enrollment_date = formData.enrollment_date || undefined;
        profileData.parent_contact = formData.parent_contact || undefined;
      } else if (formData.user_type === 'teacher') {
        profileData.subjects_taught = formData.subjects_taught || undefined;
        profileData.years_experience = formData.years_experience || undefined;
        profileData.qualification = formData.qualification || undefined;
      }

      console.log('Profile data to send:', profileData);

      const newProfile = await apiService.createProfile(profileData, token);
      console.log('Profile created successfully:', newProfile);

      // Store profile in localStorage for persistence
      storage.setProfile(newProfile);

      setProfile(newProfile);
      setSuccess('Profile created successfully!');
      setIsEditing(false);
    } catch (err: any) {
      console.error('Error creating profile:', err);

      // Better error message handling
      let errorMessage = 'Failed to create profile';
      if (err.error) {
        errorMessage = err.error;
        if (err.message) {
          errorMessage += ': ' + err.message;
        }
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateProfile = async () => {
    if (!token || !profile) return;

    setError(null);
    setSuccess(null);

    try {
      setIsSaving(true);
      const updateData: any = {
        bio: formData.bio || undefined,
        phone: formData.phone || undefined,
        address: formData.address || undefined,
        date_of_birth: formData.date_of_birth || undefined,
      };

      // Add type-specific fields
      if (profile.user_type === 'student') {
        updateData.grade_level = formData.grade_level || undefined;
        updateData.parent_contact = formData.parent_contact || undefined;
      } else if (profile.user_type === 'teacher') {
        updateData.subjects_taught = formData.subjects_taught || undefined;
        updateData.years_experience = formData.years_experience || undefined;
        updateData.qualification = formData.qualification || undefined;
      }

      const updatedProfile = await apiService.updateProfile(profile.id, updateData, token);
      setProfile(updatedProfile);
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
    } catch (err: any) {
      console.error('Error updating profile:', err);
      setError(err.message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <Loading text="Loading your profile..." />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold font-display gradient-text">My Profile</h1>
              <p className="text-gray-600 mt-1">Manage your account information</p>
            </div>
            {profile && !isEditing && (
              <Button variant="primary" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>

          {error && (
            <div className="mb-4">
              <Alert type="error" message={error} onClose={() => setError(null)} />
            </div>
          )}

          {success && (
            <div className="mb-4">
              <Alert type="success" message={success} onClose={() => setSuccess(null)} />
            </div>
          )}

          {/* User Info */}
          <div className="mb-8 p-4 bg-gradient-to-br from-electric-blue-50 to-cyber-purple-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-electric-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                {user?.username?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user?.username}</h2>
                <p className="text-gray-600 flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {!profile ? (
            <div className="space-y-6">
              <Alert
                type="info"
                title="Complete Your Profile"
                message="You haven't created a profile yet. Fill in the information below to get started."
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
                <select
                  value={formData.user_type}
                  onChange={(e) => handleInputChange('user_type', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="school">School</option>
                  <option value="guardian">Guardian</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 9876543210"
                  icon={Phone}
                />

                <Input
                  type="date"
                  label="Date of Birth"
                  value={formData.date_of_birth}
                  onChange={(e) => handleInputChange('date_of_birth', e.target.value)}
                  icon={Calendar}
                />
              </div>

              <Input
                type="text"
                label="Address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Your address"
                icon={MapPin}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                  rows={4}
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* Student-specific fields */}
              {formData.user_type === 'student' && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      label="Grade Level"
                      value={formData.grade_level}
                      onChange={(e) => handleInputChange('grade_level', e.target.value)}
                      placeholder="e.g., 10"
                      icon={BookOpen}
                    />
                    <Input
                      type="date"
                      label="Enrollment Date"
                      value={formData.enrollment_date}
                      onChange={(e) => handleInputChange('enrollment_date', e.target.value)}
                      icon={Calendar}
                      required
                    />
                  </div>
                  <Input
                    type="text"
                    label="Parent Contact"
                    value={formData.parent_contact}
                    onChange={(e) => handleInputChange('parent_contact', e.target.value)}
                    placeholder="parent@example.com"
                    icon={User}
                  />
                </div>
              )}

              {/* Teacher-specific fields */}
              {formData.user_type === 'teacher' && (
                <div className="space-y-4">
                  <Input
                    type="text"
                    label="Subjects Taught"
                    value={formData.subjects_taught}
                    onChange={(e) => handleInputChange('subjects_taught', e.target.value)}
                    placeholder="e.g., Physics, Mathematics"
                    icon={BookOpen}
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="number"
                      label="Years of Experience"
                      value={formData.years_experience.toString()}
                      onChange={(e) => handleInputChange('years_experience', parseInt(e.target.value) || 0)}
                      placeholder="e.g., 5"
                      icon={Award}
                    />
                    <Input
                      type="text"
                      label="Qualification"
                      value={formData.qualification}
                      onChange={(e) => handleInputChange('qualification', e.target.value)}
                      placeholder="e.g., M.Sc, B.Ed"
                      icon={Award}
                    />
                  </div>
                </div>
              )}

              <Button
                variant="primary"
                onClick={handleCreateProfile}
                isLoading={isSaving}
                className="w-full"
              >
                Create Profile
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {isEditing ? (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      label="Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 9876543210"
                      icon={Phone}
                    />
                    <Input
                      type="date"
                      label="Date of Birth"
                      value={formData.date_of_birth}
                      onChange={(e) => handleInputChange('date_of_birth', e.target.value)}
                      icon={Calendar}
                    />
                  </div>

                  <Input
                    type="text"
                    label="Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Your address"
                    icon={MapPin}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-electric-blue-400"
                      rows={4}
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="primary"
                      onClick={handleUpdateProfile}
                      isLoading={isSaving}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      disabled={isSaving}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">User Type</p>
                      <p className="font-medium capitalize">{profile.user_type}</p>
                    </div>
                    {profile.phone && (
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{profile.phone}</p>
                      </div>
                    )}
                    {profile.date_of_birth && (
                      <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium">{new Date(profile.date_of_birth).toLocaleDateString()}</p>
                      </div>
                    )}
                    {profile.address && (
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{profile.address}</p>
                      </div>
                    )}
                  </div>

                  {profile.bio && (
                    <div>
                      <p className="text-sm text-gray-500">Bio</p>
                      <p className="font-medium">{profile.bio}</p>
                    </div>
                  )}

                  {profile.user_type === 'student' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {profile.grade_level && (
                        <div>
                          <p className="text-sm text-gray-500">Grade Level</p>
                          <p className="font-medium">{profile.grade_level}</p>
                        </div>
                      )}
                      {profile.enrollment_date && (
                        <div>
                          <p className="text-sm text-gray-500">Enrollment Date</p>
                          <p className="font-medium">{new Date(profile.enrollment_date).toLocaleDateString()}</p>
                        </div>
                      )}
                      {profile.parent_contact && (
                        <div>
                          <p className="text-sm text-gray-500">Parent Contact</p>
                          <p className="font-medium">{profile.parent_contact}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {profile.user_type === 'teacher' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {profile.subjects_taught && (
                        <div>
                          <p className="text-sm text-gray-500">Subjects Taught</p>
                          <p className="font-medium">{profile.subjects_taught}</p>
                        </div>
                      )}
                      {profile.years_experience && (
                        <div>
                          <p className="text-sm text-gray-500">Years of Experience</p>
                          <p className="font-medium">{profile.years_experience} years</p>
                        </div>
                      )}
                      {profile.qualification && (
                        <div>
                          <p className="text-sm text-gray-500">Qualification</p>
                          <p className="font-medium">{profile.qualification}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
