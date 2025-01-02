import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[#2C302E] text-white hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;