import React from "react";

const Login: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className=" p-6 rounded shadow-md w-full max-w-md relative">
        <button className="absolute top-2 right-3 text-gray-600 text-xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;