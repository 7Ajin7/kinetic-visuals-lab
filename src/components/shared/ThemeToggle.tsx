
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-sm border transition-all duration-300 hover-trigger",
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
