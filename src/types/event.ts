
export type EventType = 'hackathon' | 'tech-talk' | 'workshop' | 'career-fair' | 'conference' | 'other';

export interface EventLocation {
  college: string;
  building?: string;
  address?: string;
  city: string;
  state: string;
  isVirtual: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  startDate: string; // ISO date string
  endDate?: string; // ISO date string
  location: EventLocation;
  organizerName?: string;
  organizerEmail?: string;
  registrationLink?: string;
  websiteLink?: string;
  imageUrl?: string;
  tags: string[];
  isFeatured?: boolean;
}
