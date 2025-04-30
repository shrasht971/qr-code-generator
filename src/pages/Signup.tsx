import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <form className="w-full max-w-sm bg-gray-50 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;