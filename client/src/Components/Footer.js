import React from 'react'

// for dynamic routing between our project's components/pages
import { Link } from 'react-router-dom'

const date = new Date().getFullYear()

// Our website's footer

const Footer = () => {
  return (
    <footer>
      <div className="footerCol">
        <div className="container">
          <ul className="socialCol">
            <li>
              <a
                href="https://www.facebook.com/AYOUB.MAIMMADI1"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images//fb.svg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ayoubmaimmadi/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images//insta.svg" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Ayoubmaimmadi2"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images//twitter.svg" />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.linkedin.com/in/ayoub-maimmadi-533587198/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images//linkedin.svg" />
              </a>
            </li> */}
            <li>
              <a
                href="https://github.com/AyoubMaimmadi"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images//github.svg" />
              </a>
            </li>
          </ul>
          <div className="copyrightCol">
            <p>
              Copyright &copy;{' '}
              <a
                href="https://gpa-booster-api.herokuapp.com/exams"
                target="_blank"
                rel="noreferrer"
              >
                Ayoub Maimmadi
              </a>
              <span> {date}.</span>&nbsp;All rights reserved.{' '}
              <Link to="/reach-us" target="_blank" rel="noreferrer">
                Reach Us
              </Link>
              <span>&nbsp;Via Email, or view the</span>
              <a
                href="https://drive.google.com/file/d/1gbkt8w3FFGgVJxcs9LLoYtPUKnZJy9IU/view"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Agreement Form.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
