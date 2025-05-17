import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EyeIcon, EyeOffIcon, UserIcon, MailIcon, PhoneIcon, LockIcon } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/users'; // Update this with your actual API URL

const AyushIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-green-500"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    verifyPassword: '',
    loginIdentifier: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateSignup = () => {
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.password || !formData.verifyPassword) {
      setError('All fields are required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Invalid email format');
      return false;
    }
    if (formData.password.length < 8 || !/\d/.test(formData.password) || !formData.password.includes('@')) {
      setError('Password must be at least 8 characters long, include a number and "@"');
      return false;
    }
    if (formData.password !== formData.verifyPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateSignup()) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${API_URL}/register`, {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      });

      setSuccess('Signup successful! You can now login.');
      setIsLogin(true); // Switch to login tab
      setFormData({
        ...formData,
        loginIdentifier: formData.email,
        password: '',
        verifyPassword: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.loginIdentifier || !formData.password) {
      setError('Both fields are required');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${API_URL}/login`, {
        loginIdentifier: formData.loginIdentifier,
        password: formData.password,
      });

      // Store the token in localStorage
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('userRole', response.data.role);
      localStorage.setItem('userFullName', response.data.fullName);
  
      setSuccess('Login successful!');
      
      // Redirect to home page or dashboard
      setTimeout(() => {
        navigate('/'); // Update this to your desired route
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <AyushIcon />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <CardHeader>
            <Tabs defaultValue={isLogin ? "login" : "signup"} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" onClick={() => setIsLogin(true)}>Login</TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setIsLogin(false)}>Signup</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      <Input
                        type="text"
                        name="loginIdentifier"
                        placeholder="Email or User ID"
                        onChange={handleChange}
                        value={formData.loginIdentifier}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        icon={<MailIcon className="h-5 w-5 text-gray-400" />}
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          value={formData.password}
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                          icon={<LockIcon className="h-5 w-5 text-gray-400" />}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-5 w-5 text-gray-400" />
                          ) : (
                            <EyeIcon className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
              <TabsContent value="signup">
                <form onSubmit={handleSignup}>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      <Input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        value={formData.fullName}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        icon={<UserIcon className="h-5 w-5 text-gray-400" />}
                      />
                    </div>
                    <div className="space-y-1">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formData.email}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        icon={<MailIcon className="h-5 w-5 text-gray-400" />}
                      />
                    </div>
                    <div className="space-y-1">
                      <Input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        value={formData.phoneNumber}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        icon={<PhoneIcon className="h-5 w-5 text-gray-400" />}
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          value={formData.password}
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                          icon={<LockIcon className="h-5 w-5 text-gray-400" />}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-5 w-5 text-gray-400" />
                          ) : (
                            <EyeIcon className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Input
                        type="password"
                        name="verifyPassword"
                        placeholder="Verify Password"
                        onChange={handleChange}
                        value={formData.verifyPassword}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        icon={<LockIcon className="h-5 w-5 text-gray-400" />}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </CardHeader>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert variant="default" className="mt-4 bg-green-50 border-green-500">
              <AlertDescription className="text-green-700">{success}</AlertDescription>
            </Alert>
          )}
        </Card>
      </div>
    </div>
  );
};

export default LoginSignup;