
import React, { useState } from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import EventFilters from '../components/EventFilters';
import { mockEvents } from '../data/mockEvents';
import { EventFilters as FilterType, filterEvents } from '../utils/eventUtils';

const Index: React.FC = () => {
  const [filters, setFilters] = useState<FilterType>({});
  const filteredEvents = filterEvents(mockEvents, filters);
  
  const featuredEvents = mockEvents.filter(event => event.isFeatured);
  
  return (
    <Layout>
      <div className="bg-gradient-to-b from-accent to-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Discover College Tech Events</h1>
            <p className="text-xl text-gray-700">
              Find hackathons, workshops, tech talks, and more at colleges across the country.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Events Section - Only show if we have featured events */}
        {featuredEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
        
        {/* All Events Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Events</h2>
            <span className="text-gray-500 text-sm">{filteredEvents.length} events found</span>
          </div>
          
          <EventFilters onFilterChange={setFilters} />
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
