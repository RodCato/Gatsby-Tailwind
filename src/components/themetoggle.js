import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme")
    if (savedTheme) {
      document.body.classList.add(savedTheme)
      setTheme(savedTheme)
    }
  }, [])

  const isDark = () => theme === "dark"

  const toggleTheme = () => {
    if (isDark()) {
      document.body.classList.remove("dark")
      setTheme("light")
      localStorage.setItem("portfolio-theme", "light")
    } else {
      document.body.classList.add("dark")
      setTheme("dark")
      localStorage.setItem("portfolio-theme", "dark")
    }
  }

  return (
    <button
      type="button"
      aria-label="toggle theme"
      className="btn btn--icon"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
        icon={isDark() ? faSun : faMoon}
        aria-hidden="true"
        id="btn-theme"
      />
    </button>
  )
}

export default ThemeToggle