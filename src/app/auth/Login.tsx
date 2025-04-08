import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Sprout } from 'lucide-react';

interface LoginResponse {
    token: string;
  }

const Login: React.FC = () => {

    const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.post<LoginResponse>('http://localhost:3000/auth/login', formData);
      
      // Assuming response contains a token
      const { token } = response.data;
      localStorage.setItem('token', token);

      navigate('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      setErrors({
        form: error.response?.data?.message || 'Invalid email or password. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
            <img src="/LOGO.jpg" alt="Logo" className="h-12 w-12" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to SN-Elegancy
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to your account to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* <LoginForm /> */}
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                        errors.email ? 'border-red-500' : ''
                    }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
                </div>
    
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="mt-1 relative">
                    <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${
                        errors.password ? 'border-red-500' : ''
                    }`}
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                    )}
                </div>
                </div>
    
                {errors.form && (
                <div className="text-red-500 text-xs">{errors.form}</div>
                )}
    
                <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A0522D] hover:bg-[#653700] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {isLoading ? 'Loading...' : 'Sign In'}
                </button>
                </div>
            </form>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          &copy; 2025 Sn-Elegancy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;