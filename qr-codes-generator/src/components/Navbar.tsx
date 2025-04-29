import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="text-sm text-blue-600 font-semibold">Login</Link>
        <Link to="/signup" className="text-sm text-green-600 font-semibold">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;