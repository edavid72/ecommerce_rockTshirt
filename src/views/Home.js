import React from 'react';
import cover from '../assets/images/cover-page.png';

const Home = () => {
  return (
    <div className="mt-2">
      <div className="cover-container">
        <img src={cover} alt="Home" className="home-img" />
      </div>

      <h1 className="text-3xl text-navy">The Home is under construction</h1>
    </div>
  );
};

export default Home;
