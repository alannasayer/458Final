import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const Home = () => {
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
            {/* Link to the health and fitness article */}
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
            {/* Link to the child development article */}
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
            {/* Link to the third article */}
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
      </div>
    </Layout>
  );
};

export default Home;
