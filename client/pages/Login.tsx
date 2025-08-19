import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/use-auth';
import { toast } from '@/hooks/use-toast';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const { login, loginWithSSO, signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let success = false;
      
      if (isSignUp) {
        success = await signup(formData.name, formData.email, formData.password);
        if (success) {
          toast({
            title: "Account created successfully!",
            description: "Welcome to RedTools!"
          });
        }
      } else {
        success = await login(formData.email, formData.password);
        if (success) {
          toast({
            title: "Welcome back!",
            description: "You've been logged in successfully."
          });
        }
      }
      
      if (success) {
        navigate('/');
      } else {
        toast({
          title: "Authentication failed",
          description: "Please check your credentials and try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleSSO = async (provider: 'apple' | 'microsoft') => {
    try {
      const success = await loginWithSSO(provider);
      if (success) {
        toast({
          title: "Welcome!",
          description: `Logged in with ${provider === 'apple' ? 'Apple' : 'Microsoft'}`
        });
        navigate('/');
      } else {
        toast({
          title: "SSO login failed",
          description: "Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn.builder.io/api/v1/assets/64496b1e452044d89561b3b5a5c1ff83/redtools-logo-257438?format=webp&width=800"
              alt="RedTools Logo"
              className="h-12 w-auto brightness-0 invert"
            />
          </div>
          <CardTitle className="text-2xl text-center text-white">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            {isSignUp 
              ? 'Sign up to get started with RedTools' 
              : 'Sign in to your RedTools account'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required={isSignUp}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-redtools-red hover:bg-redtools-red-dark text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </>
              ) : (
                isSignUp ? 'Create Account' : 'Sign In'
              )}
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              onClick={() => handleSSO('apple')}
              disabled={isLoading}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple
            </Button>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              onClick={() => handleSSO('microsoft')}
              disabled={isLoading}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
              </svg>
              Microsoft
            </Button>
          </div>
          
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-gray-400 hover:text-white underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : "Don't have an account? Sign up"
              }
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
