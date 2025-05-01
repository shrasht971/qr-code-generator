import React from "react";

const Login: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
        <button className="absolute top-2 right-3 text-gray-600 text-3xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-1 text-center  text-blue-950">Welcome back</h2>
        <h6 className="text-center font-semibold text-sm mt-1 mb-4">
          No account yet?{"  "}<span className="underline cursor-pointer text-blue-400">
            SignUp
          </span>{" "}</h6>
        <input
          type="email"
          placeholder="Work Email"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-sm font-normal gap-2">
  <div className="flex items-center">
    <input
      type="checkbox"
      id="terms"
      className="mr-2 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    />
    <label htmlFor="terms" className="text-gray-700">
      Keep me signed in
    </label>
  </div>
  <a href="#" className="text-blue-600 sm:ml-4 text-xs sm:text-sm">
    Forget Password?
  </a>
</div>
        <button className="w-full bg-blue-800 text-white py-2 rounded">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;