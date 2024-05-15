// src/pages/about.tsx
import React, { useState } from 'react';

interface Event {
  id: string;
  name: string;
  date: string;
  // Add other properties relevant to your event object
}

const AboutPage = () => {
  const [searchTerm, setSearchTerm] = useState('');  // State to hold the search term
  const [addedEvents, setAddedEvents] = useState<Event[]>([]);

  const handleAddToCalendar = (event: Event, sportName: string) => {
    if (!addedEvents.some(e => e.id === event.id)) {
      const eventToAdd = {
        ...event,
        sportName
      };
      setAddedEvents([...addedEvents, eventToAdd]);
    }
  };

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default AboutPage;
