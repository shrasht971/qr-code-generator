import React, { useState } from 'react';
import Logo from './Logo';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded p-6 w-full max-w-sm relative shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );

  const LoginForm = () => (
    <form>
      <Login />
    </form>
  );

  const SignupForm = () => (
    <form>
   <Signup />
      
    </form>
  );

  return (
    <>
      <nav className="bg-gray-900 shadow p-4 flex justify-between items-center">
        <div className="cursor-pointer">
          <Logo />
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setShowLogin(true)}
            className="text-sm text-blue-600 font-semibold"
          >
            Login
          </button>
          <button
            onClick={() => setShowSignup(true)}
            className="text-sm text-green-600 font-semibold"
          >
            Signup
          </button>
        </div>
      </nav>

      {showLogin && <Modal onClose={() => setShowLogin(false)}><LoginForm /></Modal>}
      {showSignup && <Modal onClose={() => setShowSignup(false)}><SignupForm /></Modal>}
    </>
  );
};

export default Navbar;
