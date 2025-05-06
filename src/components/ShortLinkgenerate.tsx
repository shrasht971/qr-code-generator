import React, { useRef, useState, useEffect } from "react";

const ShortLinkGenerator: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // simulate login status
  const [guestLinkCount, setGuestLinkCount] = useState<number>(0);
  const [shortLinks, setShortLinks] = useState<string[]>([]);

  // Load guest link count from localStorage on mount
  useEffect(() => {
    const count = parseInt(localStorage.getItem("guestLinkCount") || "0", 10);
    setGuestLinkCount(count);
  }, []);

  const generateShortLink = () => {
    const originalUrl = inputRef.current?.value;

    if (!originalUrl) {
      alert("Please enter a URL.");
      return;
    }

    if (!isLoggedIn && guestLinkCount >= 5) {
      alert("You’ve reached your limit. Please sign up to continue.");
      return;
    }

    // Fake short link generation logic
    const shortLink = `https://short.ly/${Math.random().toString(36).substr(2, 5)}`;
    setShortLinks((prev) => [...prev, shortLink]);

    // Track guest usage
    if (!isLoggedIn) {
      const newCount = guestLinkCount + 1;
      localStorage.setItem("guestLinkCount", newCount.toString());
      setGuestLinkCount(newCount);
    }

    // Clear input
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.removeItem("guestLinkCount");
    setGuestLinkCount(0);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Short Link Generator</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter URL to shorten"
        className="w-full mb-3 p-2 border rounded"
      />

      <button
        onClick={generateShortLink}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-3 w-full"
      >
        Generate Short Link
      </button>

      {!isLoggedIn && (
        <p className="text-sm text-gray-600 mb-2">
          Links left before signup: {5 - guestLinkCount}
        </p>
      )}

      {!isLoggedIn && (
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-3 py-1 rounded text-sm"
        >
          Sign up to remove limit
        </button>
      )}

      <ul className="mt-4">
        {shortLinks.map((link, index) => (
          <li key={index} className="text-blue-700 underline">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortLinkGenerator;
