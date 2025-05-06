import React from 'react'
import {Sun, Moon } from "lucide-react";

const ThemeSwitch = () => {
  // Function to handle theme switching
    const handleThemeSwitch = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "Light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }

  // Check for saved theme in local storage
    
  React.useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "Light");
        }
      }
    }, []);


  return (
    <div>
      
      {/* Theme switch and sidebar */}
      <div className="fixed bottom-4 right-4 sm:top-1/2 sm:bottom-auto transform sm:-translate-y-1/2 flex flex-col gap-2 sm:gap-4">
        <button onClick={handleThemeSwitch} className="border rounded-full px-3 py-1 text-sm flex items-center gap-1 text-white">
          <Sun size={14} /> Light
        </button>
        <button onClick={handleThemeSwitch}  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-xl text-sm flex items-center gap-1">
          <Moon size={14} /> Dark Theme
        </button>
      </div>
    </div>
  )
}

export default ThemeSwitch
