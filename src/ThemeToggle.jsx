import { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import useTheme from "./UseTheme";

const themes = {
  light: { name: "light", Icon: SunIcon },
  dark: { name: "dark", Icon: MoonIcon },
  system: { name: "system", Icon: ComputerDesktopIcon },
};

const ThemeToggle = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setDropdownOpen(false);
  };

  const CurrentIcon = themes[theme].Icon;

  return (
    <div className=" flex justify-items-normal justify-center min-h-screen">
      <div className="relative inline-block text-left">

        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium 
          text-gray-700 dark:text-gray-300 rounded-md shadow-md"
        >
          <CurrentIcon className="w-6 h-6" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-36 origin-top-right 
            rounded-md shadow-lg">

            {Object.keys(themes).map((key) => {
              const Icon = themes[key].Icon;
              return (
                <button
                  key={key}
                  onClick={() => handleThemeChange(key)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm 
                  text-gray-700 dark:text-gray-300" 
                >
                  <Icon className="w-5 h-5" />
                  {themes[key].name}
                </button>
              );
            })}

          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;