
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold text-gray-900">CampusConnect</h1>
        </Link>
        
        <nav className="flex items-center space-x-1">
          <Link to="/">
            <Button 
              variant={location.pathname === '/' ? "default" : "ghost"}
              className="text-sm"
            >
              Events
            </Button>
          </Link>
          <Link to="/submit">
            <Button 
              variant={location.pathname === '/submit' ? "default" : "ghost"}
              className="text-sm"
            >
              Submit Event
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
