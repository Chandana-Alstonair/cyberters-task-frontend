import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Lock, Mail, Building, Shield, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function SignUp() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation('/');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up attempt:', formData);
    localStorage.setItem('userRole', 'Employee');
    localStorage.setItem('userEmail', formData.email);
    window.location.href = '/auth/signin';
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all hover:bg-white"
      >
        <ArrowLeft className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Back</span>
      </button>
      
      {/* Left Side - Avatar Image */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="relative animate-float">
          <div 
            className="w-96 h-96 rounded-full bg-gradient-to-br from-[#205fde] via-[#003f82] to-[#4ca2b5] p-1 animate-spin-slow"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white animate-pulse">
              <img 
                src="/signup-image.jpg"
                alt="Data Security Concept" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30 backdrop-saturate-150 animate-fade-in-up">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#205fde] to-[#4ca2b5] bg-clip-text text-transparent mb-2 hover:scale-105 transition-transform duration-300">
              Join CyberMatrix
            </h1>
            <p className="text-gray-600 animate-slide-in-left">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-300 rounded-lg bg-gray-100 text-black"
                required
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-300 rounded-lg bg-gray-100 text-black"
                required
              />
            </div>
            
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-300 rounded-lg bg-gray-100 text-black"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-300 rounded-lg bg-gray-100 text-black"
                required
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-300 rounded-lg bg-gray-100 text-black"
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreeToTerms: checked as boolean })
                }
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-[#E2701D] hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[#E2701D] hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[#205fde] via-[#003f82] to-[#4ca2b5] hover:opacity-90 hover:scale-105 text-white font-semibold rounded-lg transition-all duration-300 animate-pulse-slow"
            >
              Create Account
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="/auth/signin" className="text-[#E2701D] font-semibold hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}