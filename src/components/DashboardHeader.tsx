
import { Button } from "@/components/ui/button";
import { Twitter, Bell, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardHeader = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">XCommand</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-blue-600 font-medium">Dashboard</Link>
          <Link to="/content-studio" className="text-gray-600 hover:text-blue-600 transition-colors">Content Studio</Link>
          <Link to="/automation" className="text-gray-600 hover:text-blue-600 transition-colors">Automation</Link>
          <Link to="/analytics" className="text-gray-600 hover:text-blue-600 transition-colors">Analytics</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};
