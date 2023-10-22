import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Footer = () => {
  return (
    <div class="flex justify-center items-centergg">
      <footer class="footer">
        <a
          href="https://crod.co/github"
          class="link footer__link flex items-center space-x-2"
        >
          <span>
            Created By{" "}
            <StaticImage
              src="../images/cr-logo.png"
              alt="CR Logo"
              className="object-scale-down h-4 w-6 inline-block"
            />{" "}
            with
            <StaticImage
              src="../images/Gatsby_Monogram.png"
              alt="Gatsby Logo"
              className="object-scale-down h-4 w-4 mt-0.5 ml-1 mr-1 inline-block"
            />
            |
          </span>
          <img
            src="https://img.shields.io/badge/Made%20with%20-🫶🏽-2978b5.svg"
            alt="Made with Love"
            class="inline-block"
          />

          <span>| &copy; 2023 | Thanks for Visiting! 🎬</span>
        </a>
      </footer>
    </div>
  )
}

export default Footer
