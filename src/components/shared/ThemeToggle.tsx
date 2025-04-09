
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if there's a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check if the browser prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set the initial theme based on localStorage or system preference
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark' || prefersDarkMode) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to dark if no preference
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-sm border transition-all duration-300 hover-trigger z-10",
        isDark 
          ? "bg-white/5 border-white/10 hover:bg-white/10" 
          : "bg-black/5 border-black/10 hover:bg-black/10"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-white" />
      ) : (
        <Moon size={18} className="text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
