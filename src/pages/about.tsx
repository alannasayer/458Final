import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('Component mounted');
    console.log('Sports data:', sportsData);
  }, []);

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

  console.log('Filtered sports:', filteredSports);

  const handleDateChange = (value: Date | Date[]) => {
    setDate(Array.isArray(value) ? value[0] : value);
  };

  return (
    <Layout>
      <div style={{
          backgroundColor: '#f0f0f0', padding: '40px', color: '#333', borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '800px', margin: '20px auto',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
        }}>
        <h1>About the Youth Sports Scheduler</h1>
        <input
          type="text"
          placeholder="Search for sports teams..."
          style={{ width: '100%', padding: '10px', margin: '20px 0', borderRadius: '5px', border: '1px solid #ccc' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredSports.map((sport: Sport) => (
            sport.events.map((event: Event) => (
              <li key={event.id} style={{
                backgroundColor: '#ffffff', margin: '10px 0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                {sport.sport} - {event.date} at {event.time}
                <button onClick={() => handleAddToCalendar(event, sport.sport)} style={{
                  marginLeft: '20px', backgroundColor: '#00488B', color: 'white', border: 'none',
                  borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s'
                }}>
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
                <div key={e.id} style={{ padding: '5px', backgroundColor: 'lightblue', borderRadius: '5px', color: 'darkblue' }}>
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
