import React, { useState, useRef } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const [isClicked, setIsClicked] = useState(0);
  const inputRef = useRef(0);
  const navigate = useNavigate();

  const handleClick = () => {
    inputRef.current += 1;
    setIsClicked(inputRef.current);
    if (inputRef.current >= 5) {
      setIsClicked(0);
      inputRef.current = 0;
      navigate("/Signup");
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 py-6 w-full">
      {/* Main section */}
      <div className="text-center">
        <h1 className="text-xl md:text-4xl py-2 font-bold mb-4 bg-gradient-to-tl from-indigo-800 to-rose-700 text-transparent bg-clip-text break-words text-center px-2">
          Shorten Your Loooong Links :)
        </h1>

        <p className="mt-2 text-gray-400 text-xs sm:text-base md:max-w-2xl mx-auto">
          Linkly is an efficient and easy-to-use URL shortening and QR code generation service that streamlines your online experience.
        </p>

        {/* Input field */}
        <div className="mt-8 w-full max-w-md md:max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter the link here"
            className="w-full flex-1 text-sm rounded-full bg-[#1a1c2c] text-white px-5 py-3 focus:outline-none border border-gray-700"
          />
          <button
            onClick={handleClick}
            disabled={isClicked >= 5}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl text-sm sm:text-base"
          >
            Shorten Now!
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-4">
          <div className="w-5 h-5 rounded-full bg-blue-600"></div>
          <span className="text-sm text-gray-400">Auto Paste from Clipboard</span>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          You can create <span className="text-pink-500 font-semibold">{5 - isClicked}</span>{" "}
          more links.{" "}
          <span className='underline cursor-pointer text-blue-400 ' onClick={() => navigate("/Signup")}>
            Register 
          </span>{" "}
          now to enjoy Unlimited usage ⚡
        </p>
      </div>
      
      <ThemeSwitch />
      {/* Table section */}
      <div className="mt-20 hidden sm:block overflow-x-auto px-2 sm:px-0">
        <table className="w-full text-left text-sm text-gray-300 min-w-[700px]">
          <thead className="bg-[#1a1c2c] text-gray-400">
            <tr>
              <th className="p-2 sm:p-3">Short Link</th>
              <th className="p-2 sm:p-3">Original Link</th>
              <th className="p-2 sm:p-3">QR Code</th>
              <th className="p-2 sm:p-3">Clicks</th>
              <th className="p-2 sm:p-3">Status</th>
              <th className="p-2 sm:p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                short: "https://linkly.com/Bn14aCOlnxj",
                original: "https://twitter.com/tweets/8erelCoihu/",
                clicks: 1313,
                status: "Active",
                date: "Oct - 10 - 2023",
              },
              {
                short: "https://linkly.com/Bn14aCOlnxj",
                original: "https://www.youtube.com/watch?v=8J7zrnHOXuk",
                clicks: 4313,
                status: "Inactive",
                date: "Oct - 08 - 2023",
              },
              {
                short: "https://linkly.com/Bn14aCOlnxj",
                original: "https://www.adventuresinwanderlust.com/",
                clicks: 1013,
                status: "Active",
                date: "Oct - 01 - 2023",
              },
              {
                short: "https://linkly.com/Bn14aCOlnxj",
                original: "https://vimeo.com/625257654",
                clicks: 1313,
                status: "Active",
                date: "Sep - 20 - 2023",
              },
              {
                short: "https://linkly.com/Bn14aCOlnxj",
                original: "https://unsplash.com/photos/2KjNw0zF1vQ",
                clicks: 1423,
                status: "Active",
                date: "Sep - 18 - 2023",
              },
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td className="p-2 sm:p-3 text-blue-400 underline cursor-pointer">
                  {row.short}
                </td>
                <td className="p-2 sm:p-3 text-white truncate xs:min-w-xs md:max-w-xs">
                  {row.original}
                </td>
                <td className="p-2 sm:p-3">
                  <QrCode className="w-4 h-4 text-gray-400" />
                </td>
                <td className="p-2 sm:p-3">{row.clicks}</td>
                <td className="p-2 sm:p-3">
                  <span
                    className={`px-2 py-1 rounded-full sm:text-xs ${
                      row.status === "Active"
                        ? "bg-green-800 text-green-400"
                        : "bg-yellow-800 text-yellow-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-2 sm:p-3 text-gray-400">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Landing;
