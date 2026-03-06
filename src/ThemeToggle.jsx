import { useState, useEffect, useRef } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import useTheme from "./UseTheme";

const themes = {
  light: { name: "Light", Icon: SunIcon },
  dark: { name: "Dark", Icon: MoonIcon },
  system: { name: "System", Icon: ComputerDesktopIcon },
};

const ThemeToggle = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useTheme();
  const dropdownRef = useRef(null);

  const CurrentIcon = themes[theme]?.Icon || SunIcon;

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
    
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="relative inline-flex items-center justify-center size-9 rounded-md border 
        bg-white dark:bg-neutral-800 shadow hover:bg-gray-100 
        dark:hover:bg-neutral-700 transition"
      >
        <CurrentIcon className="w-5 h-5 text-black dark:text-white" />
      </button>

      {dropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-36 rounded-md shadow-lg 
          bg-white dark:bg-neutral-800 border border-gray-200 
          dark:border-neutral-700 z-50 animate-fadeIn"
        >
          {Object.keys(themes).map((key) => {
            const Icon = themes[key].Icon;
            return (
              <button
                key={key}
                onClick={() => {
                  setTheme(key);
                  setDropdownOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm 
                text-gray-700 dark:text-gray-300 
                hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
              >
                <Icon className="w-4 h-4" />
                {themes[key].name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;