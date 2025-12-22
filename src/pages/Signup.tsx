import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Mail, Lock, Phone, Calendar, Smile } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SuccessMessage, ErrorMessage, Input, Button, Select, Card, FormGroup } from '../components/ui';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signup, isLoading } = useAuth();
  
  // Get role from location state (passed from Home page)
  const roleFromState = location.state?.role;

  // Calculate default date (18 years ago)
  const today = new Date();
  const defaultDateObj = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  const defaultDate = defaultDateObj.toISOString().split('T')[0];
  
  // Calculate max date (2 years ago)
  const maxDateObj = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
  const maxDate = maxDateObj.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    verifyPassword: '',
    name: '',
    mobile_number: '',
    gender: '',
    date_of_birth: defaultDate,
    role: roleFromState || '' // Default to empty to force selection if not provided
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Refs for debounce and accessing fresh state in timeouts
  const formDataRef = useRef(formData);
  const timersRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Update role if location state changes
  useEffect(() => {
    if (roleFromState) {
      setFormData(prev => ({ ...prev, role: roleFromState }));
    }
  }, [roleFromState]);

  // Keep ref in sync with state
  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  const validateField = (name: string, value: string, currentData: typeof formData) => {
    let error = '';

    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = 'Email is required.';
        else if (!emailRegex.test(value)) error = 'Please enter a valid email address.';
        break;
      
      case 'password':
        // At least one lowercase, one uppercase, one number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!value) error = 'Password is required.';
        else if (value.length < 8) error = 'Password must be at least 8 characters long.';
        else if (!passwordRegex.test(value)) error = 'Must contain at least one uppercase, lowercase, and number.';
        break;
      
      case 'verifyPassword':
        if (!value) error = 'Please confirm your password.';
        else if (value !== currentData.password) error = 'Passwords do not match.';
        break;
      
      case 'mobile_number':
        const mobileRegex = /^\+?\d{10,15}$/;
        if (value && !mobileRegex.test(value)) error = 'Please enter a valid mobile number (10-15 digits).';
        break;
      
      case 'name':
        const nameRegex = /^[a-zA-Z\s]{2,50}$/;
        if (!value) error = 'Full Name is required.';
        else if (!nameRegex.test(value)) error = 'Name must contain only letters and be at least 2 characters long.';
        break;
      
      case 'date_of_birth':
        if (value) {
          const selectedDate = new Date(value);
          const minAllowedDate = new Date('1900-01-01');
          
          // Max allowed date is 2 years ago (re-calculated here for safety)
          const now = new Date();
          const maxAllowedDate = new Date(now.getFullYear() - 2, now.getMonth(), now.getDate());

          if (selectedDate < minAllowedDate) {
            error = 'Date cannot be before 1900.';
          } else if (selectedDate > maxAllowedDate) {
            error = 'Date must be at least 2 years in the past.';
          }
        }
        break;

      // Optional fields can be validated if needed, currently just format checks if any
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // 1. Update form data immediately
    setFormData(prev => ({ ...prev, [name]: value }));

    // 2. Debounce validation
    if (timersRef.current[name]) {
      clearTimeout(timersRef.current[name]);
    }

    timersRef.current[name] = setTimeout(() => {
      // Use fresh data from ref, but override the field being changed with 'value' 
      // (in case state update hasn't propagated to ref yet, though it should have in 500ms)
      const currentData = { ...formDataRef.current, [name]: value };
      
      const errorMsg = validateField(name, value, currentData);
      
      setErrors(prev => {
        const newErrors = { ...prev };
        if (errorMsg) newErrors[name] = errorMsg;
        else delete newErrors[name];
        return newErrors;
      });

      // Special case: If password changes, re-validate verifyPassword if it has value
      if (name === 'password' && currentData.verifyPassword) {
        const verifyError = validateField('verifyPassword', currentData.verifyPassword, currentData);
        setErrors(prev => {
          const newErrors = { ...prev };
          if (verifyError) newErrors['verifyPassword'] = verifyError;
          else delete newErrors['verifyPassword'];
          return newErrors;
        });
      }
    }, 500);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null);
    setSuccess(false);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    let hasError = false;

    // List of fields to validate
    const fieldsToValidate = ['name', 'email', 'role', 'mobile_number', 'date_of_birth', 'password', 'verifyPassword'];
    
    fieldsToValidate.forEach(field => {
      // @ts-ignore - indexing by string key
      const value = formData[field];
      const errorMsg = validateField(field, value, formData);
      if (errorMsg) {
        newErrors[field] = errorMsg;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) {
      setGlobalError('Please fix the errors above.');
      return;
    }

    try {
      // Handle 'others' role by sending null/undefined
      const roleToSend = formData.role === 'others' ? undefined : formData.role;

      await signup({
        email: formData.email,
        password: formData.password,
        role: roleToSend,
        name: formData.name,
        mobile_number: formData.mobile_number,
        gender: formData.gender,
        date_of_birth: formData.date_of_birth
      });
      setSuccess(true);

      // Redirect to login after a brief delay
      setTimeout(() => {
        navigate('/login', {
          state: { message: 'Account created successfully! Please log in.' }
        });
      }, 2000);
    } catch (err) {
      setGlobalError(err instanceof Error ? err.message : 'Signup failed. Please try again.');
    }
  };

  // Capitalize role for display
  const getDisplayRole = () => {
    if (!formData.role) return 'New Member';
    if (formData.role === 'others') return 'Member';
    return formData.role.charAt(0).toUpperCase() + formData.role.slice(1).replace('_', ' ');
  };

  const displayRole = getDisplayRole();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-electric-blue-50 via-cyber-purple-50 to-hot-pink-50">
      <div className="w-full max-w-2xl">
        <Card className="shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-display text-gray-900 mb-2">Create your account</h1>
            <p className="text-gray-600">
              Join STEAM Buds as a <span className="font-semibold text-primary-600">{displayRole}</span>
            </p>
          </div>

          {success ? (
            <SuccessMessage
              title="Success!"
              message="Account created successfully! Redirecting to login..."
            />
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              
              <FormGroup columns={2}>
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  iconLeft={<Smile className="h-4 w-4" />}
                  placeholder="Shyam Ish"
                  required
                  disabled={isLoading}
                  error={errors.name}
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  iconLeft={<Mail className="h-4 w-4" />}
                  placeholder="dev@steambuds.com"
                  required
                  disabled={isLoading}
                  error={errors.email}
                />
                <Select
                  label="Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'student', label: 'Student' },
                    { value: 'teacher', label: 'Teacher' },
                    { value: 'guardian', label: 'Guardian' },
                    { value: "", label: 'Others' }
                  ]}
                  disabled={isLoading}
                  error={errors.role}
                />
                <Input
                  label="Mobile Number"
                  type="tel"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  iconLeft={<Phone className="h-4 w-4" />}
                  placeholder="+91 9828770365"
                  disabled={isLoading}
                  error={errors.mobile_number}
                />
                <Input
                  label="Date of Birth"
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  iconLeft={<Calendar className="h-4 w-4" />}
                  disabled={isLoading}
                  error={errors.date_of_birth}
                  min="1900-01-01"
                  max={maxDate}
                />
                <Select
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' }
                  ]}
                  disabled={isLoading}
                  error={errors.gender}
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  iconLeft={<Lock className="h-4 w-4" />}
                  placeholder="At least 8 characters"
                  required
                  disabled={isLoading}
                  error={errors.password}
                />
                <Input
                  label="Verify Password"
                  type="password"
                  name="verifyPassword"
                  value={formData.verifyPassword}
                  onChange={handleChange}
                  iconLeft={<Lock className="h-4 w-4" />}
                  placeholder="Confirm password"
                  required
                  disabled={isLoading}
                  error={errors.verifyPassword}
                />
              </FormGroup>

              {globalError && <ErrorMessage message={globalError} />}

              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                loading={isLoading}
              >
                Create Account
              </Button>
            </form>
          )}

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account? <Link className="text-primary-600 font-semibold hover:underline" to="/login">Login</Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
