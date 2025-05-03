
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { getEventById } from '../data/mockEvents';
import { formatEventDate, getEventTypeLabel, getEventTypeColor } from '../utils/eventUtils';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Globe, User, Mail, ArrowLeft } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const event = id ? getEventById(id) : undefined;
  
  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <p className="mb-8">Sorry, the event you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/')}>
            Back to Events
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button 
          variant="outline" 
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Button>
        
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-8 h-72 md:h-96">
          <img 
            src={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-6 text-white">
              <div className="mb-2">
                <Badge className={`${getEventTypeColor(event.type)} mb-2`}>
                  {getEventTypeLabel(event.type)}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-2">{event.title}</h1>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {event.description}
              </p>
              
              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-secondary text-sm px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Organizer */}
            {(event.organizerName || event.organizerEmail) && (
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Organizer</h2>
                {event.organizerName && (
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span>{event.organizerName}</span>
                  </div>
                )}
                {event.organizerEmail && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <a 
                      href={`mailto:${event.organizerEmail}`} 
                      className="text-primary hover:underline"
                    >
                      {event.organizerEmail}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Event Details</h2>
              
              {/* Date and Time */}
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-1">
                  <Calendar className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-medium">Date & Time</h3>
                  <p className="text-gray-700">
                    {formatEventDate(event.startDate, "EEEE, MMMM d, yyyy")}
                    <br />
                    {formatEventDate(event.startDate, "h:mm a")}
                    {event.endDate && (
                      <> - {formatEventDate(event.endDate, "h:mm a")}</>
                    )}
                  </p>
                </div>
              </div>
              
              {/* Duration (if endDate exists) */}
              {event.endDate && (
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <Clock className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Duration</h3>
                    <p className="text-gray-700">
                      {new Date(event.endDate).getDate() - new Date(event.startDate).getDate() > 0
                        ? `${new Date(event.endDate).getDate() - new Date(event.startDate).getDate()} days`
                        : `${new Date(event.endDate).getHours() - new Date(event.startDate).getHours()} hours`}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Location */}
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-1">
                  <MapPin className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  {event.location.isVirtual ? (
                    <p className="text-gray-700">Virtual Event</p>
                  ) : (
                    <p className="text-gray-700">
                      {event.location.building && `${event.location.building}, `}
                      {event.location.college}
                      <br />
                      {event.location.address && `${event.location.address}, `}
                      {event.location.city}, {event.location.state}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Website */}
              {event.websiteLink && (
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <Globe className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Website</h3>
                    <a 
                      href={event.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline break-all"
                    >
                      {event.websiteLink}
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Registration CTA */}
            {event.registrationLink && (
              <div className="bg-accent rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">Interested in attending?</h3>
                <a 
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full">
                    Register Now
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
