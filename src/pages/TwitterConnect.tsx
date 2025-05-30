
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Twitter, Shield, CheckCircle, ExternalLink } from 'lucide-react';

const TwitterConnect = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  const handleConnectTwitter = async () => {
    setIsConnecting(true);
    
    // Simulate OAuth flow
    setTimeout(() => {
      console.log('Twitter OAuth initiated');
      navigate('/setup-loading');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFF4ED] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/8c72e556-e52f-4bd8-a2af-4e23b5e18435.png" 
            alt="GetXPilot Logo" 
            className="h-12 w-auto mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">
            Connect Your Twitter Account
          </h1>
          <p className="text-[#4A4A4A]">
            Link your X (Twitter) account to start growing your presence
          </p>
        </div>

        <Card className="border-[#EAEAEA] shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-[#1DA1F2]/10 rounded-full flex items-center justify-center mb-4">
              <Twitter className="w-8 h-8 text-[#1DA1F2]" />
            </div>
            <CardTitle className="text-xl text-[#1E1E1E] mb-2">
              Secure Twitter Integration
            </CardTitle>
            <CardDescription className="text-[#4A4A4A]">
              We use official X OAuth to safely connect your account. We never store your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Security Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-[#4A4A4A]">Secure OAuth 2.0 authentication</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-[#4A4A4A]">Read and post permissions only</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-[#4A4A4A]">Revoke access anytime from Twitter settings</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-sm text-[#4A4A4A]">No password storage or access to DMs</span>
              </div>
            </div>

            <Button
              onClick={handleConnectTwitter}
              disabled={isConnecting}
              className="w-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white py-3"
            >
              {isConnecting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Connecting...
                </div>
              ) : (
                <>
                  <Twitter className="w-4 h-4 mr-2" />
                  Connect with X (Twitter)
                  <ExternalLink className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-blue-900 mb-1">
                    Why do we need access?
                  </h3>
                  <p className="text-xs text-blue-700">
                    GetXPilot needs to read your profile and post tweets to help you grow your presence. 
                    We follow Twitter's security best practices and never access private information.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-[#4A4A4A] mt-4">
              You'll be redirected to Twitter to authorize the connection. 
              This ensures your credentials stay secure.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TwitterConnect;
