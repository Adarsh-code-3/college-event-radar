
import { Event, EventType } from "../types/event";
import { format, parseISO, isAfter, isBefore, isEqual } from "date-fns";

export interface EventFilters {
  type?: EventType | "";
  college?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  searchQuery?: string;
}

export const filterEvents = (events: Event[], filters: EventFilters): Event[] => {
  return events.filter(event => {
    // Filter by event type
    if (filters.type && event.type !== filters.type) {
      return false;
    }

    // Filter by college
    if (filters.college && event.location.college !== filters.college) {
      return false;
    }

    // Filter by start date (events on or after this date)
    if (filters.startDate) {
      const eventDate = parseISO(event.startDate);
      if (isBefore(eventDate, filters.startDate) && !isEqual(eventDate, filters.startDate)) {
        return false;
      }
    }

    // Filter by end date (events on or before this date)
    if (filters.endDate) {
      const eventDate = parseISO(event.startDate);
      if (isAfter(eventDate, filters.endDate) && !isEqual(eventDate, filters.endDate)) {
        return false;
      }
    }

    // Filter by search query (search in title and description)
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return (
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return true;
  });
};

export const formatEventDate = (dateString: string, formatStr: string = "MMM d, yyyy h:mm a"): string => {
  return format(parseISO(dateString), formatStr);
};

export const getEventTypeLabel = (type: EventType): string => {
  const labels: Record<EventType, string> = {
    'hackathon': 'Hackathon',
    'tech-talk': 'Tech Talk',
    'workshop': 'Workshop',
    'career-fair': 'Career Fair',
    'conference': 'Conference',
    'other': 'Other'
  };
  
  return labels[type] || type;
};

export const getEventTypeColor = (type: EventType): string => {
  const colors: Record<EventType, string> = {
    'hackathon': 'bg-purple-100 text-purple-800',
    'tech-talk': 'bg-blue-100 text-blue-800',
    'workshop': 'bg-green-100 text-green-800',
    'career-fair': 'bg-yellow-100 text-yellow-800',
    'conference': 'bg-pink-100 text-pink-800',
    'other': 'bg-gray-100 text-gray-800'
  };
  
  return colors[type] || 'bg-gray-100 text-gray-800';
};
