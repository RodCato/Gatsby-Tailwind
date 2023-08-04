import React, { useState } from "react"
import Modal from "react-modal"
import "./layout.css"

const Contact = () => {
  const modalRef = React.useRef(null)
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  React.useEffect(() => {
    const modal = modalRef.current

    if (!modal) {
      return
    }

    const handleModalClick = e => {
      const dialogDimensions = modal.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        closeModal()
      }
    }

    modal.addEventListener("click", handleModalClick)

    return () => {
      // Clean up the event listener when the component unmounts
      modal.removeEventListener("click", handleModalClick)
    }
  }, [])

  return (
    <div>
      <section className="section contact center" id="contact">
        <h2 className="section__title">📧 Contact</h2>
        <div className="contact-button-wrapper">
          <button onClick={openModal} className="btn btn--outline">
            Contact Me
          </button>
        </div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false} // This is required to prevent warnings in Gatsby
          contentLabel="Contact Modal"
          className="modal"
          overlayClassName="overlay" 
        >
          <span>
            <button onClick={closeModal} className="btn btn--outline">
              Close
            </button>
          </span>
          <section className="formcarry-container">
            <form
              action="https://forms.un-static.com/forms/5f3f4b43ffc40a85b4c09ed12187b0d948be6623"
              method="post"
            >
              <div className="formcarry-block">
                <label htmlFor="fc-generated-1-name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="fc-generated-1-name"
                  placeholder="Your first and last name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="formcarry-block">
                <label htmlFor="fc-generated-1-email">Your Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="fc-generated-1-email"
                  placeholder="john@doe.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="formcarry-block">
                <label htmlFor="fc-generated-1-message">Your message</label>
                <textarea
                  name="message"
                  id="fc-generated-1-message"
                  placeholder="Enter your message..."
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <div className="formcarry-block">
                <button type="submit">Send</button>
              </div>
              <div>
                <p>
                  <small>
                    <center>
                      (Powered by
                      <a rel="nofollow" href="Un-static Forms">
                        Un-static Forms
                      </a>
                      )
                    </center>
                  </small>
                </p>
              </div>
            </form>
          </section>
        </Modal>
      </section>
    </div>
  )
}

export default Contact
