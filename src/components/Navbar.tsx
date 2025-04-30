import React, { useState } from 'react';
import Logo from './Logo';

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
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Log In</button>
    </form>
  );

  const SignupForm = () => (
    <form>
      <div className="text-3xl text-center font-bold mb-4">
        <Logo />
      </div>
      <h1 className='text-center text-gray-800 text-xl font-bold'>
        Create, Manage and Track <span className='text-cyan-900'>all your QR Codes</span> in one place
      </h1>
      <h6 className='text-center font-light text-xs mt-5 mb-4'>
        Sign up now and try all features free for 14 days
      </h6>
      <input type="email" placeholder="Work Email" className="w-full mb-3 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Sign Up Now</button>
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
