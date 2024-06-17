import React, { useEffect, useState } from "react";
import Logo from "../assets/task.png";
import "./Header.css";

export const Header = () => {
  let defaultTheme
  
  if(localStorage.getItem("theme")){
    defaultTheme = localStorage.getItem("theme")
  }else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      defaultTheme = "dark";
    } else {
      defaultTheme = "light";
    }
  }

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme",theme)
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>TaskFlow</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={`light ${theme === "light" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={`medium ${theme === "medium" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={`dark ${theme === "dark" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={`gOne ${theme === "gOne" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={`gTwo ${theme === "gTwo" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={`gThree ${theme === "gThree" ? "activeTheme" : ""}`}
        ></span>
      </div>
    </header>
  );
};
