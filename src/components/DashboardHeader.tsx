
import { Button } from "@/components/ui/button";
import { Bell, Settings, Link2, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const DashboardHeader = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/d04303cc-a47b-4888-929d-60e19d481024.png" 
            alt="GetXPilot Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-[#FF6154] font-medium">Dashboard</Link>
          <Link to="/content-studio" className="text-gray-600 hover:text-[#FF6154] transition-colors">Content Studio</Link>
          <Link to="/automation" className="text-gray-600 hover:text-[#FF6154] transition-colors">Automation</Link>
          <Link to="/analytics" className="text-gray-600 hover:text-[#FF6154] transition-colors">Analytics</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Connected Twitter Account */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg border">
            <Twitter className="w-4 h-4 text-[#1DA1F2]" />
            <span className="text-sm text-gray-700">@joelpilot</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
              Connected
            </Badge>
          </div>

          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
            <Bell className="w-4 h-4" />
          </Button>
          
          <Link to="/settings">
            <Button variant="ghost" size="sm" className="hover:bg-gray-100">
              <Settings className="w-4 h-4" />
            </Button>
          </Link>
          
          {/* User Profile */}
          <Link to="/profile">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:bg-gray-100">
              <Avatar className="w-6 h-6">
                <AvatarFallback className="bg-[#FF6154] text-white text-xs">
                  JP
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline text-sm">Joel</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
