import React, { useState } from 'react';
import Layout from '../components/layout';
import sportsData from '../data/sportsData.json';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Event {
  id: number;
  date: string;
  time: string;
  location: string;
  sport?: string;
}

interface Sport {
  sport: string;
  events: Event[];
}

const About: React.FC = () => {
  const [addedEvents, setAddedEvents] = useState<Event[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const [message, setMessage] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');  // State to hold the search term

  const handleAddToCalendar = (event: Event, sportName: string): void => {
    if (!addedEvents.some(e => e.id === event.id)) {
      const eventToAdd: Event = {
        ...event,
        sport: sportName,
        date: new Date(event.date).toISOString(), // Keep date as string
      };
      setAddedEvents([...addedEvents, eventToAdd]);
      setMessage('Events added to calendar successfully!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Filter sports data based on the search term
  const filteredSports = sportsData.filter((sport: Sport) =>
    sport.sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDateChange = (value: Date | Date[]) => {
    setDate(Array.isArray(value) ? value[0] : value);
  };

  return (
    <Layout>
      <div>
        <h1>About the Youth Sports Scheduler</h1>
        <input
          type="text"
          placeholder="Search for sports teams..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {message && <p>{message}</p>}
        <ul>
          {filteredSports.map((sport: Sport) => (
            sport.events.map((event: Event) => (
              <li key={event.id}>
                {sport.sport} - {event.date} at {event.time}
                <button onClick={() => handleAddToCalendar(event, sport.sport)}>
                  Add to Calendar
                </button>
              </li>
            ))
          ))}
        </ul>
        <Calendar
          onChange={handleDateChange as any}
          value={date}
          tileContent={({ date, view }) => (
            addedEvents.filter(e => new Date(e.date).toDateString() === date.toDateString())
              .map(e => (
                <div key={e.id}>
                  {`${e.time} - ${e.location}`}
                </div>
              ))
          )}
        />
        <div>
          <h2>Added Events:</h2>
          <ul>
            {addedEvents.map(e => (
              <li key={e.id}>
                {`${e.sport} - ${new Date(e.date).toDateString()} at ${e.time}, Location: ${e.location}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
