
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CampusConnect</span>
            </div>
            <p className="text-gray-600 mb-4">
              Discover tech talks, hackathons, and workshops at colleges across the country.
              Never miss an opportunity to learn and connect.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Browse Events</Link></li>
              <li><Link to="/submit" className="text-gray-600 hover:text-primary">Submit Event</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Event Types</h3>
            <ul className="space-y-2">
              <li><Link to="/?type=hackathon" className="text-gray-600 hover:text-primary">Hackathons</Link></li>
              <li><Link to="/?type=tech-talk" className="text-gray-600 hover:text-primary">Tech Talks</Link></li>
              <li><Link to="/?type=workshop" className="text-gray-600 hover:text-primary">Workshops</Link></li>
              <li><Link to="/?type=career-fair" className="text-gray-600 hover:text-primary">Career Fairs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-gray-600 mb-4">
              CampusConnect is a platform created to help college students discover and engage with tech events
              on campuses nationwide.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
