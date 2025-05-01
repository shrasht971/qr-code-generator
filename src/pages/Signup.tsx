import React from "react";
import Logo from "../components/Logo";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className=" p-6 rounded shadow-md w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-600 text-xl">&times;</button>
        <div className="text-4xl flex justify-center font-bold mb-4"><Logo /></div>
        <h1 className='text-center text-gray-800 md:text-2xl xs:text-xs sm:text-xs font-bold '>Create, Manage and Track 
        <span className='text-cyan-900'> all your QR Codes</span> in one place</h1>
        <h6 className='text-center font-extralight text-8xl mt-5 mb-4'>Sign up now and try all features free for 14 days </h6>
        <div className="flex flex-col mb-4 text-2xl font-bold text-gray-800">
        <input type="email" placeholder=" Work Email" className="w-full outline-none mb-3 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-5xl">Sign Up Now</button>
      </div>
    </div>
  );
};

export default SignupModal;
