import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
        <h1 className="text-4xl font-bold mb-6">Welcome to Utility Dashboard</h1>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded">Signup</Link>
        </div>
      </div>
    </>
  );
};

export default Home;