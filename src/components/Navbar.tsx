import React, { useState, useEffect } from "react";
import "../App.css";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

export default function Navbar(props: { theme: string; }) {
  const [theme, setTheme] = useState(props.theme);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    document.body.className = props.theme;
  }, [theme]);

  return (
    <nav className="nav w-full px-3 flex items-center justify-between text-gray-300 h-16">
      <div className="title flex gap-2 items-center font-black text-lg">
        <div className="logo w-7 h-7"></div>
        <div>Senti-Surfer</div>
      </div>
      <div className="extras flex gap-3 items-center">
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme}></input>
          <span className="slider"></span>
        </label>
        <ArrowDownOnSquareIcon className="w-7 h-7 hover:cursor-pointer" />
      </div>
    </nav>
  );
}
