import React from 'react'
import { Link } from 'react-router-dom'

const date = new Date().getFullYear()

// Literly just a footer for some style points

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
            <li>
              <a
                href="https://www.linkedin.com/in/ayoub-maimmadi-533587198/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images//linkedin.svg" />
              </a>
            </li>
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
              Copyright &copy; Ayoub Maimmadi: ASED-Team-6<span> {date}</span>.
              all rights reserved.{' '}
              <Link to="/reach-us" target="_blank" rel="noreferrer">
                Email Us.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
