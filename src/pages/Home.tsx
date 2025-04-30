import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';

const Home: React.FC = () => {
  return (
    <>
    <div className='bg-gray-900 text-white min-h-svh'>
    <Navbar />
      <div className=" flex flex-col items-center justify-center md:mt-16 text-center p-4">
      
       <Landing /> 
      </div>
      </div>
    </>
  );
};

export default Home;