
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check temporary credentials
    if (formData.email === 'eshabsa@gmail.com' && formData.password === 'ganduarun69') {
      toast.success('Login successful! Welcome to CareConnect.');
      navigate('/');
    } else {
      toast.error('Invalid credentials. Use: eshabsa@gmail.com / ganduarun69');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: 'eshabsa@gmail.com',
      password: 'ganduarun69'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcare-teal/5 via-white to-healthcare-blue/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
          <Link 
            to="/" 
            className="inline-flex items-center text-healthcare-teal hover:text-healthcare-blue transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
            </div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your healthcare dashboard</p>
          </div>

          <div className="mb-6 p-4 bg-healthcare-teal/10 rounded-lg border border-healthcare-teal/20">
            <p className="text-sm text-healthcare-teal font-medium mb-2">Demo Credentials:</p>
            <p className="text-xs text-gray-600 mb-2">Email: eshabsa@gmail.com</p>
            <p className="text-xs text-gray-600 mb-3">Password: ganduarun69</p>
            <Button 
              type="button" 
              onClick={fillDemoCredentials}
              size="sm"
              variant="outline"
              className="w-full border-healthcare-teal text-healthcare-teal hover:bg-healthcare-teal hover:text-white"
            >
              Use Demo Credentials
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 h-12 border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="h-12 pr-12 border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-healthcare-teal focus:ring-healthcare-teal" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-healthcare-teal hover:text-healthcare-blue">
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90 transform hover:scale-105 transition-all"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-healthcare-teal hover:text-healthcare-blue font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
