"use client";

import { useEffect } from "react";
import style from "./change-dark-mode.module.css";

export default function ChangeDarkMode() {
  useEffect(() => changeDarkMode());

  function changeDarkMode() {
    if (typeof window === "undefined") {
      return;
    }

    if (localStorage.getItem("darkMode") === null) {
      localStorage.setItem("darkMode", "true");
    }

    if (localStorage.getItem("darkMode") === "true") {
      document.documentElement.classList.remove("dark");

      document.documentElement.style.setProperty("--bg-color", "#fdfdfd");
      document.documentElement.style.setProperty("--text-color", "#333");
    } else {
      document.documentElement.classList.add("dark");

      document.documentElement.style.setProperty("--bg-color", "#313238");
      document.documentElement.style.setProperty("--text-color", "#fdfdfd");
    }
  }

  function clickEvent() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      localStorage.setItem("darkMode", "false");
    } else {
      localStorage.setItem("darkMode", "true");
    }
    changeDarkMode();
  }

  return (
    <div>
      <button onClick={() => clickEvent()} className={style.button}>
        Change Dark Mode
      </button>
    </div>
  );
}
