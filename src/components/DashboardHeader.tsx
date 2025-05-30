
import { Button } from "@/components/ui/button";
import { Bell, Settings, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const DashboardHeader = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/8c72e556-e52f-4bd8-a2af-4e23b5e18435.png" 
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
          <Button variant="outline" size="sm" className="border-[#FF6154] text-[#FF6154] hover:bg-[#FF6154] hover:text-white">
            <Link2 className="w-4 h-4 mr-2" />
            Connect Twitter
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <Link to="/settings">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
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
