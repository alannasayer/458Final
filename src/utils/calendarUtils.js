import React from 'react';
import Layout from '../components/layout';
import sportsData from '../data/sportsData.json';  // Ensure the path is correct

const About = () => {
  // Define handleAddToCalendar right inside the component where it's used
  const handleAddToCalendar = (sportEvents) => {
    console.log('Adding to calendar:', sportEvents);
    // Implement calendar integration or update state here
  };

  return (
    <Layout>
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <h1>t the Youth Sports Scheduler</h1>
        <p>Thepage lists all the sports available in our scheduler.</p>
        <ul>
          {sportsData.map((item, index) => (
            <li key={index}>
              {item.sport}
              <button onClick={() => handleAddToCalendar(item.events)}>
                Add to Calendar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default About;
