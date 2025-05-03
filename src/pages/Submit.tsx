
import React from 'react';
import Layout from '../components/Layout';
import EventForm from '../components/EventForm';

const Submit: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Submit an Event</h1>
          <p className="text-gray-600 mb-8">
            Know about an upcoming tech event at your college? Share it with the community!
          </p>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <EventForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Submit;
