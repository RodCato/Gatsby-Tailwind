import React, { useState, useEffect } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMoon } from "@fortawesome/free-solid-svg-icons" // Replace `faIconName` with the specific icon you want to use

const Script = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme") || "light"
  )
  const [btnTheme, setBtnTheme] = useState(
    localStorage.getItem("portfolio-btn-theme") || "fa-moon"
  )

  useEffect(() => {
    document.body.classList.add(theme)
    library.add(faMoon)

    localStorage.setItem("portfolio-theme", theme)
    localStorage.setItem("portfolio-btn-theme", btnTheme)
  }, [theme, btnTheme])

  const isDark = () => theme === "dark"

  const toggleTheme = () => {
    if (isDark()) {
      setTheme("light")
      setBtnTheme("fa-moon")
    } else {
      setTheme("dark")
      setBtnTheme("fa-sun")
    }
  }
  const openButton = document.querySelector("[open-modal]")
  const closeButton = document.querySelector("[close-modal]")
  const modal = document.querySelector("[page-modal]")

  openButton.addEventListener("click", () => {
    modal.showModal()
  })

  closeButton.addEventListener("click", () => {
      modal.close()
  })

  modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close()
    }
  })

  return (
    <>
      {/* You can add any relevant JSX elements here */}
      <i className={`fas ${btnTheme}`} onClick={toggleTheme}></i>
    </>
  )
}

export default Script
