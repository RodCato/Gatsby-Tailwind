import React from "react"
import { Link } from "gatsby"

const FormSuccess = () => {
  return (
    <div className="text-center">
      <h2>Message Sent Successfully!</h2>
      <p>Thank you for your submission. You will receive a reply soon.</p>
      <Link to="/">Go back to the main page</Link>
    </div>
  )
}

export default FormSuccess
