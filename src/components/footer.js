import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <a href="https://github.com/RodCato" class="link footer__link">
          Created By CRod || With 🫶🏽 and
          <StaticImage
            src="../images/Gatsby_Monogram.png"
            alt="Gatsby Logo"
            className="object-scale-down h-4 w-4 mt-1 ml-2 mr-1 inline-block"
          />
          || &copy; 2023 || 🎟️ Thanks for Visiting! 🎬
        </a>
      </footer>
    </div>
  )
}

export default Footer
