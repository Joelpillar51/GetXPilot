
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">XCommand</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#analytics" className="text-gray-600 hover:text-blue-600 transition-colors">Analytics</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link to="/dashboard">Start Growing</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
