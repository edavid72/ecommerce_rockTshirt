import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../assets/images/cover-page.png';

const Home = () => {
  return (
    <Link to="/products" className="flex flex-col mt-4">
      <div className="container mx-auto m-24 laptop:mt-1">
        <img src={cover} alt="Home" />
        <h3 className="w-11/12 mx-auto text-center bg-navy text-white p-4 mt-2 text-xl laptop:text-3xl">
          <i className="fas fa-tshirt mr-2"></i>
          Buy the shirt of my favorite band
          <i className="fas fa-tshirt ml-2"></i>
        </h3>
      </div>
    </Link>
  );
};

export default Home;
