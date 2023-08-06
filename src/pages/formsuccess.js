import React, { useEffect } from "react"
import { Link } from "gatsby"

const FormSuccess = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to the main page after 5 seconds
      window.location.href = "/"
    }, 5000) // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer) // Clear the timer if the component unmounts
  }, [])

  return (
    <div className="text-center">
      <h2>Message Sent Successfully!</h2>
      <p>Thank you for your submission. You will receive a reply soon.</p>
      <p>Redirecting to the main page in 5 seconds...</p>
      <Link to="https://crod.co/gp">Go back to the main page</Link>
    </div>
  )
}

export default FormSuccess
