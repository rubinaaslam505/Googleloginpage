import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")||"system");

  useEffect(() => {
    const root = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (currentTheme) => {
      if (currentTheme === "dark") {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else if (currentTheme === "light") {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
       
        localStorage.removeItem("theme");
        if (darkQuery.matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    };

    applyTheme(theme);

   
    const listener = (e) => {
      if (theme === "system") {
        if (e.matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    };

    darkQuery.addEventListener("change", listener);
    return () => darkQuery.removeEventListener("change", listener);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;