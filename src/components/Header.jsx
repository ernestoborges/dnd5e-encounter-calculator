import { useState, useEffect } from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

export function Header() {
  const [isDark, setIsDark] = useState(true);
  function checkStorageMode() {
    if (localStorage.getItem("DarkMode") === null) {
      localStorage.setItem("DarkMode", true);
    }
    let darkmode = localStorage.getItem("DarkMode") === "true";
    if (darkmode) {
      setIsDark(true);
      document.querySelector("html").classList.add("dark");
    } else {
      setIsDark(false);
      document.querySelector("html").classList.remove("dark");
    }
  }

  useEffect(() => {
    checkStorageMode();
  }, []);
  return (
    <nav className="page-header">
      <div className="logo-container">
        <div className="logo"></div>
        <h1>DnD5e Encounters</h1>
      </div>
      <button
        className="darkmode-button"
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
          isDark
            ? localStorage.setItem("DarkMode", false)
            : localStorage.setItem("DarkMode", true);
          isDark ? setIsDark(false) : setIsDark(true);
        }}
      >
        {isDark ? <FaMoon /> : <FaRegMoon />}
        Dark Mode
      </button>
    </nav>
  );
}
