import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <header style={{ textAlign: 'center', padding: '50px', background: '#f4f4f4' }}>
        <h1>Welcome to Our Marketing Agency</h1>
        <p>Your success is our priority.</p>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Get Started</button>
      </header>

      {/* Services Section */}
      <section style={{ padding: '20px' }}>
        <h2>Our Services</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h3>Brand Strategy</h3>
            <p>We help you define your brand and make it stand out.</p>
          </div>
          <div>
            <h3>Digital Marketing</h3>
            <p>Our digital strategies will elevate your brand's online presence.</p>
          </div>
          <div>
            <h3>Content Creation</h3>
            <p>Engaging content to connect with your audience.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '20px', background: '#e9e9e9' }}>
        <h2>About Us</h2>
        <p>We are a professional marketing agency with a passion for innovation. Our team is dedicated to delivering high-quality services to help businesses grow and thrive.</p>
      </section>

      {/* Portfolio Highlights */}
      <section style={{ padding: '20px' }}>
        <h2>Our Portfolio</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <img src='project1.jpg' alt='Project 1' style={{ width: '200px' }} />
            <p>Project 1</p>
          </div>
          <div>
            <img src='project2.jpg' alt='Project 2' style={{ width: '200px' }} />
            <p>Project 2</p>
          </div>
          <div>
            <img src='project3.jpg' alt='Project 3' style={{ width: '200px' }} />
            <p>Project 3</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer style={{ textAlign: 'center', padding: '30px', background: '#c4c4c4' }}>
        <h2>Ready to work with us?</h2>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Contact Us</button>
      </footer>
    </div>
  );
};

export default HomePage;
