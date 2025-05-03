
import React from 'react';
import { Link } from 'react-router-dom';
import { Event } from '../types/event';
import { formatEventDate, getEventTypeLabel, getEventTypeColor } from '../utils/eventUtils';
import { CalendarCheck, MapPin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link 
      to={`/event/${event.id}`} 
      className="block group h-full"
    >
      <div className="h-full border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col bg-white animate-fade-in">
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.imageUrl || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"} 
            alt={event.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {event.isFeatured && (
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-2 py-1 m-2 rounded">
              Featured
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
            <Badge className={`${getEventTypeColor(event.type)}`}>
              {getEventTypeLabel(event.type)}
            </Badge>
          </div>
        </div>
        
        {/* Event Details */}
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          
          {/* Date and Location */}
          <div className="mt-2 text-sm text-gray-600 space-y-1.5">
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-gray-500" />
              <span>{formatEventDate(event.startDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>
                {event.location.isVirtual ? 'Virtual Event' : `${event.location.college}, ${event.location.city}`}
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="mt-3 text-sm text-gray-700 line-clamp-3 flex-grow">
            {event.description}
          </p>
          
          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1">
            {event.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-secondary text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {event.tags.length > 3 && (
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded-full">
                +{event.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
