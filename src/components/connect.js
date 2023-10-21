import React from "react"

const Connect = () => {
  return (
    <div>
      <section class="section skills" id="connect">
        <h2 class="section__title">💻 Connect</h2>
        <ul class="skills__list">
          <li>
            <a
              href="https://crod.co/LI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>
          </li>

          <li>
            <a
              href="https://crod.co/github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="Github"
              />
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://crod.co/x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/twitter/follow/CrodDev"
                alt="X"
                height="50px"
              />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://crod.co/CodeWars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.codewars.com/users/CRodDev/badges/micro"
                alt="CodeWars"
                width="120%"
              />
            </a>
          </li>
          <li>
            <a href="https://crod.co/wakatime" target="_blank">
              <img
                src="https://wakatime.com/badge/user/36909aee-5bcd-487e-ba59-26e85f89c050.svg"
                alt="Total time coded since Jun 3 2023"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Connect
