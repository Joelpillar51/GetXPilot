
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Twitter, Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF4ED] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/8c72e556-e52f-4bd8-a2af-4e23b5e18435.png" 
            alt="GetXPilot Logo" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-[#1E1E1E]">Create your account</h1>
          <p className="text-[#4A4A4A] mt-2">Start growing your Twitter presence today</p>
        </div>

        <Card className="border-[#EAEAEA] shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center text-[#1E1E1E]">Sign up for GetXPilot</CardTitle>
            <CardDescription className="text-center text-[#4A4A4A]">
              Join thousands of creators growing on Twitter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#1E1E1E]">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4A4A4A]" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 border-[#EAEAEA] focus:border-[#FF6154] focus:ring-[#FF6154]"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1E1E1E]">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4A4A4A]" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 border-[#EAEAEA] focus:border-[#FF6154] focus:ring-[#FF6154]"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#1E1E1E]">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4A4A4A]" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 border-[#EAEAEA] focus:border-[#FF6154] focus:ring-[#FF6154]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-[#4A4A4A]" />
                    ) : (
                      <Eye className="w-4 h-4 text-[#4A4A4A]" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#1E1E1E]">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4A4A4A]" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 border-[#EAEAEA] focus:border-[#FF6154] focus:ring-[#FF6154]"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#FF6154] hover:bg-[#FF6154]/90 text-white py-3">
                Create Account
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full bg-[#EAEAEA]" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-[#4A4A4A]">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full mt-4 border-[#EAEAEA] text-[#4A4A4A] hover:bg-[#FFF4ED] hover:border-[#FF6154]"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Continue with Twitter
              </Button>
            </div>

            <p className="mt-6 text-center text-sm text-[#4A4A4A]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#FF6154] hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-xs text-[#4A4A4A]">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-[#FF6154] hover:underline">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-[#FF6154] hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
