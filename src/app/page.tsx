"use client";

import React, { useState } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
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

const Home: React.FC = () => {
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
      <div style={{
          backgroundColor: '#f5f5f5', // Light grey background color
          padding: '20px',
          color: 'black',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          textAlign: 'center' // Centering all text
        }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to the Youth Sports Society!</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>We have current time and dates for all kids sports in South Orange County!</p>
        <div>
          <h2 style={{ fontSize: '2rem', marginTop: '40px' }}>Featured Health & Fitness Articles</h2>
          <div style={{ marginTop: '20px' }}>
            <h3>Why is Protein Important for Kids&apos; Growth?</h3>
            <p>Protein is essential for kids&apos; growth and development. Learn more about its importance...</p>
            <p>
              <a href="https://www.nutritionnews.abbott/pregnancy-childhood/kids-growth/why-is-protein-important-for-kids-growth/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  color: '#333', // Darker color for links
                  textDecoration: 'none',
                  border: '2px solid #333', // Darker border color
                  borderRadius: '5px',
                  padding: '10px 20px',
                  transition: 'background-color 0.2s, color 0.3s',
                  display: 'inline-block',
                  marginTop: '10px'
                }}>Read More</a>
            </p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <h3>Child Development Through Sports</h3>
            <p>Through friendly competition, teamwork, and physical activity, sports can foster...</p>
            <p>
              <a href="https://pce.sandiego.edu/child-development-through-sports/#:~:text=Through%20friendly%20competition%2C%20teamwork%2C%20and,desire%20to%20top%20the%20standings."
                target="_blank" rel="noopener noreferrer"
                style={{
                  color: '#333', // Darker color for links
                  textDecoration: 'none',
                  border: '2px solid #333', // Darker border color
                  borderRadius: '5px',
                  padding: '10px 20px',
                  transition: 'background-color 0.2s, color 0.3s',
                  display: 'inline-block',
                  marginTop: '10px'
                }}>Read More</a>
            </p>
          </div>
          <div style={{ marginTop: '40px' }}>
            <h3>6 Tips to Keep Youth Sports Fun for Kids</h3>
            <p>Don&apos;t be that parent! Here are six tips to ensure youth sports remain enjoyable...</p>
            <p>
              <a href="https://fargomom.com/dont-be-that-parent-6-tips-to-keep-youth-sports-fun-for-kids/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  color: '#333', // Darker color for links
                  textDecoration: 'none',
                  border: '2px solid #333', // Darker border color
                  borderRadius: '5px',
                  padding: '10px 20px',
                  transition: 'background-color 0.2s, color 0.3s',
                  display: 'inline-block',
                  marginTop: '10px'
                }}>Read More</a>
            </p>
          </div>
        </div>
        <nav style={{ marginTop: '40px' }}>
          <ul style={{ textAlign: 'center', padding: '0', margin: '0' }}>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <Link href="/about">
                <button style={{
                  color: 'black',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  border: '2px solid black',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s',
                  cursor: 'pointer',
                  background: 'none',
                  fontSize: 'inherit'
                }}>ABOUT</button>
              </Link>
            </li>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <Link href="/contact">
                <button style={{
                  color: 'black',
                  textDecoration: 'none',
                  padding: '10px 20px',
                  border: '2px solid black',
                  borderRadius: '5px',
                  transition: 'background-color 0.2s, color 0.3s',
                  cursor: 'pointer',
                  background: 'none',
                  fontSize: 'inherit'
                }}>CONTACT</button>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Adding Calendar and Sports Data below the existing content */}
        <div style={{
          backgroundColor: '#f0f0f0', padding: '40px', color: '#333', borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '800px', margin: '40px auto',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
        }}>
          <h2>Sports Events</h2>
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
      </div>
    </Layout>
  );
};

export default Home;
