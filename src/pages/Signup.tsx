import { useNavigate } from "react-router-dom";
import React  from "react";
import Logo from "../components/Logo";


const Signup: React.FC = () => {
  const navigate = useNavigate();
  const handleClose =() =>{
    navigate("/")
  }
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
        <button className="absolute top-2 right-3 text-gray-600 text-xl" onClick={() => handleClose()}>
          &times;
        </button>
        <div className="text-4xl flex justify-center font-bold mb-4">
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
</div>
      </div>
  );
};

export default Signup;